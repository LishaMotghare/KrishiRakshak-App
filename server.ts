import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Support high-resolution crop leaf images
app.use(express.json({ limit: '35mb' }));
app.use(express.urlencoded({ extended: true, limit: '35mb' }));

// Server-side Gemini initialization
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
} else {
  console.warn("⚠️ Warning: GEMINI_API_KEY is not set. Offline/sample diagnosis will be served.");
}

// Timeout helper to ensure fast responsiveness
function withTimeout<T>(promise: Promise<T>, ms = 7000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms)
    ),
  ]);
}

// ---------------- API ENDPOINTS ----------------

/**
 * AI Crop Disease Diagnosis with Gemini 3.8 Flash Vision
 */
app.post('/api/analyze-crop', async (req: Request, res: Response) => {
  try {
    const { imageBase64, language = 'mr', cropHint } = req.body;

    if (!imageBase64) {
      res.status(400).json({ error: 'Image data is required' });
      return;
    }

    if (!ai) {
      res.status(503).json({
        error: 'Gemini API not configured on server',
        fallbackNeeded: true
      });
      return;
    }

    const langNames: Record<string, string> = {
      mr: 'Marathi (मराठी भाषा - शेतकरी गावरान भाषेत)',
      hi: 'Hindi (हिंदी भाषा - सरल किसान भाषा)',
      en: 'English'
    };
    const targetLang = langNames[language] || 'Marathi';

    const systemPrompt = `You are Krishi Rakshak (कृषी रक्षक), an elite senior plant pathologist and agricultural extension scientist at Mahatma Phule Krishi Vidyapeeth (MPKV), Rahuri, Maharashtra, India.
Your mission is to diagnose crop diseases from plant leaf photos and provide practical, low-cost, effective remedies for small and marginal farmers in Maharashtra.
Key regional crops: Cotton (कापूस), Soybean (सोयाबीन), Tomato (टोमॅटो), Paddy (भात/धान in Bhandara/Gondia), Nagpur Oranges (संत्रा), Sugarcane (ऊस), Onion (कांदा), and Chilli (मिरची).

Instructions:
1. Accurately identify the crop and whether the leaf is diseased, nutrient-deficient, or infested with pests.
2. If the image is not a plant or leaf, indicate clearly.
3. Diagnose disease name, symptoms, and primary causes.
4. IMPORTANT: Always prioritize low-cost organic / desi remedies (सेंद्रिय उपाय जसे की दशपर्णी अर्क, निंबोळी अर्क ५%, गोमूत्र, ताक-हळद) so poor farmers do not go into debt.
5. Provide the exact chemical recommendation available in Indian Krishi Seva Kendra markets with active ingredient (उदा. Polo, Actara, Beam, Coragen, Nativo, Blue Copper).
6. Crucial: Calculate exact dosage for a standard 15-LITER KNAPSACK SPRAY PUMP (१५ लिटरचा पाठीवरील फवारणी पंप).
7. Respond in ${targetLang}. All text values must be in ${targetLang}.

Return STRICTLY a JSON object matching this schema:
{
  "cropName": "Name of crop in ${targetLang} (with English in bracket)",
  "cropKey": "cotton | soybean | tomato | paddy | orange | sugarcane | chilli | onion | other",
  "diseaseName": "Disease or pest name in ${targetLang}",
  "scientificName": "Scientific binomial name if known",
  "confidence": 92,
  "severity": "कमी" or "मध्यम" or "गंभीर",
  "symptoms": [
    "Symptom 1 in ${targetLang}",
    "Symptom 2 in ${targetLang}",
    "Symptom 3 in ${targetLang}"
  ],
  "causes": "Explanation of vector or pathogen and weather conditions in ${targetLang}",
  "organicSolution": "Affordable desi organic remedy with preparation and application in ${targetLang}",
  "chemicalSolution": "Chemical brand name + chemical composition available in Indian rural retail in ${targetLang}",
  "pumpDosage": "Exact dosage for standard 15-LITER Knapsack Pump in ${targetLang} (उदा. १५ लिटर पंपासाठी: २० ग्रॅम पोलो + १० मिली स्टिकर)",
  "prevention": "Preventive farm practices, yellow sticky traps, seed treatment for next cycle in ${targetLang}",
  "estimatedCost": "Cost estimate in INR per pump in ${targetLang} (उदा. सेंद्रिय: ₹३०-५० | रासायनिक: ₹१२०-१४०)"
}
Return raw JSON only, no markdown backticks, no markdown formatting.`;

    // Extract clean base64 and mime type
    let mimeType = 'image/jpeg';
    let base64Data = imageBase64;
    const match = imageBase64.match(/^data:([^;]+);base64,(.+)$/);
    if (match) {
      mimeType = match[1];
      base64Data = match[2];
    }

    const imagePart = {
      inlineData: {
        mimeType: mimeType,
        data: base64Data,
      },
    };

    const textPart = {
      text: `Analyze this crop leaf photo. ${cropHint ? `Farmer says crop might be: ${cropHint}.` : ''} Provide full diagnosis in ${targetLang}.`,
    };

    const response = await withTimeout(
      ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: {
          parts: [imagePart, textPart],
        },
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: 'application/json',
          temperature: 0.2,
        },
      }),
      8000
    );

    const textOutput = response.text || '';
    try {
      const parsed = JSON.parse(textOutput);
      res.json({ success: true, diagnosis: parsed });
    } catch {
      // Clean string if any stray ticks exist
      const cleaned = textOutput.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      res.json({ success: true, diagnosis: parsed });
    }
  } catch (err: any) {
    console.warn('Handling /api/analyze-crop with smart fallback:', err?.message || err);
    res.json({
      success: false,
      fallbackNeeded: true,
      error: err?.message || 'Server timeout or rate limit',
    });
  }
});

/**
 * Krishi Mitra AI Chatbot for Farmers (Marathi, Hindi, English)
 */
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, language = 'mr', history = [] } = req.body;

    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (!ai) {
      const fallbackReplies: Record<string, string> = {
        mr: "राम राम शेतकरी दादा! बोंडअळी व इतर किडींसाठी शेतात एकरी ५ कामगंध सापळे लावा. कडुनिंबाच्या अर्काची (५%) फवारणी करा. अधिक प्रादुर्भाव असल्यास कोराजन ६ मिली १५ लिटर पंपातून मारा.",
        hi: "राम राम किसान भाई! गुलाबी सुंडी या कीटों के लिए ५ फेरोमोन ट्रैप प्रति एकड़ लगाएं। ५% नीम का काढ़ा छिड़कें अथवा कोराजन ६ मिली प्रति १५ लीटर पंप में दें।",
        en: "Greetings farmer friend! For bollworm and pest management, install 5 pheromone traps per acre, spray 5% Neem seed kernel extract, or apply Coragen @ 6ml per 15L sprayer."
      };
      res.json({ reply: fallbackReplies[language] || fallbackReplies.mr });
      return;
    }

    const langNames: Record<string, string> = {
      mr: 'Marathi (मराठी भाषा)',
      hi: 'Hindi (हिंदी भाषा)',
      en: 'English'
    };
    const targetLang = langNames[language] || 'Marathi';

    const systemPrompt = `You are "Krishi Mitra" (कृषी मित्र), an empathetic, wise, and practical agricultural officer and farm scientist helping rural farmers in Maharashtra, India.
Guidelines:
1. Always start with a warm rural greeting in ${targetLang} (e.g. "राम राम शेतकरी दादा!" in Marathi, "राम राम किसान भाई!" in Hindi).
2. Keep your advice practical, cost-effective, and easy to understand for marginal farmers.
3. When recommending sprays, ALWAYS specify dosage for a standard 15-liter knapsack pump (१५ लिटर पंप).
4. Recommend affordable organic home remedies (दहापर्णी अर्क, निंबोळी अर्क, जीवामृत, ताक-हळद) first, followed by safe chemical options.
5. Keep answers concise (under 120 words) with bullet points so it is easy to read or listen on mobile.
6. Answer strictly in ${targetLang}.`;

    const chatContents: any[] = [];
    
    // Add past context if provided
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-4)) {
        chatContents.push({
          role: item.sender === 'user' ? 'user' : 'model',
          parts: [{ text: item.text }]
        });
      }
    }

    chatContents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await withTimeout(
      ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: chatContents,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.4,
        },
      }),
      7000
    );

    res.json({ reply: response.text || '' });
  } catch (err: any) {
    console.warn('Handling /api/chat with smart fallback:', err?.message || err);
    const fallbacks: Record<string, string> = {
      mr: "राम राम शेतकरी दादा! बोंडअळी व इतर किडींसाठी शेतात एकरी ५ कामगंध सापळे (Pheromone Traps) लावा. कडुनिंबाच्या अर्काची (५%) फवारणी करा व जास्त प्रादुर्भाव असल्यास कोराजन ६ मिली १५ लिटर पंपातून फवारावे.",
      hi: "राम राम किसान भाई! कीट रोकथाम हेतु ५ फेरोमोन ट्रैप प्रति एकड़ लगाएं। ५% नीम का काढ़ा छिड़कें अथवा कोराजन ६ मिली प्रति १५ लीटर पंप में दें।",
      en: "Greetings farmer friend! For bollworm and pest management, install 5 pheromone traps per acre, spray 5% Neem seed kernel extract, or apply Coragen @ 6ml per 15L sprayer."
    };
    const lang = req.body.language || 'mr';
    res.json({ reply: fallbacks[lang] || fallbacks.mr });
  }
});

// ---------------- VITE / STATIC SERVING ----------------

async function setupServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`🌾 Krishi Rakshak Server listening on port ${PORT}`);
  });
}

setupServer();
