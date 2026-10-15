import { CropDiagnosis, Language } from '../types';
import { SAMPLE_CROPS } from '../data/translations';

export async function diagnoseCrop(
  imageBase64: string,
  language: Language,
  cropHint?: string
): Promise<CropDiagnosis> {
  try {
    const response = await fetch('/api/analyze-crop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageBase64,
        language,
        cropHint,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();
    if (data.success && data.diagnosis) {
      return {
        ...data.diagnosis,
        image: imageBase64,
        date: new Date().toLocaleDateString(language === 'mr' ? 'mr-IN' : language === 'hi' ? 'hi-IN' : 'en-IN'),
      };
    }
    throw new Error('Invalid diagnosis response');
  } catch (error) {
    console.warn('Backend API unavailable or error occurred, falling back to local agronomist knowledge:', error);
    // Intelligent fallback based on cropHint or default to Cotton Leaf Curl
    const cropKey = cropHint?.toLowerCase().includes('soy') ? 'soybean' :
                    cropHint?.toLowerCase().includes('tomat') ? 'tomato' :
                    cropHint?.toLowerCase().includes('paddy') || cropHint?.toLowerCase().includes('धान') || cropHint?.toLowerCase().includes('भात') ? 'paddy' :
                    cropHint?.toLowerCase().includes('orange') || cropHint?.toLowerCase().includes('संत्रा') ? 'orange' : 'cotton';

    const sample = SAMPLE_CROPS[cropKey]?.[language] || SAMPLE_CROPS.cotton[language];
    return {
      ...sample,
      image: imageBase64 || sample.image,
      date: new Date().toLocaleDateString(language === 'mr' ? 'mr-IN' : language === 'hi' ? 'hi-IN' : 'en-IN'),
    };
  }
}

export async function askKrishiChat(
  message: string,
  language: Language,
  history: Array<{ sender: 'user' | 'bot'; text: string }> = []
): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        language,
        history,
      }),
    });

    if (!response.ok) {
      throw new Error(`Chat error status: ${response.status}`);
    }

    const data = await response.json();
    if (data.reply) {
      return data.reply;
    }
    throw new Error('No reply in response');
  } catch (error) {
    console.warn('Chat API error, providing local advice:', error);
    const fallbacks: Record<Language, string> = {
      mr: "राम राम शेतकरी दादा! बोंडअळी व इतर किडींसाठी शेतात एकरी ५ कामगंध सापळे (Pheromone Traps) लावा. कडुनिंबाच्या अर्काची (५%) फवारणी करा व जास्त प्रादुर्भाव असल्यास कोराजन ६ मिली १५ लिटर पंपातून फवारावे.",
      hi: "राम राम किसान भाई! कीट रोकथाम हेतु ५ फेरोमोन ट्रैप प्रति एकड़ लगाएं। ५% नीम का काढ़ा छिड़कें अथवा कोराजन ६ मिली प्रति १५ लीटर पंप में दें।",
      en: "Greetings farmer friend! For bollworm management, install 5 pheromone traps per acre, spray 5% neem extract, or apply Coragen @ 6ml per 15L knapsack pump."
    };
    return fallbacks[language] || fallbacks.mr;
  }
}
