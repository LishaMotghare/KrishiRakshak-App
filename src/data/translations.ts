import { Language, CropDiagnosis, WeatherData, MandiRate, SchemeInfo } from '../types';

export const UI_TRANSLATIONS = {
  mr: {
    appName: "कृषी रक्षक",
    tagline: "महाराष्ट्रातील शेतकऱ्यांचा डिजिटल पीक डॉक्टर",
    stateBadge: "महाराष्ट्र शेतकरी विशेष",
    takePhoto: "पिकाच्या पानाचा फोटो काढा किंवा निवडा",
    takePhotoSub: "रोगग्रस्त पानाच्या पुढील व मागील बाजूचा स्पष्ट फोटो घ्या",
    cameraBtn: "कॅमेरा उघडा",
    galleryBtn: "गॅलरीतून निवडा",
    demoBtn: "नमुना पाहा (डेमो)",
    quickSamplesTitle: "नमुना पिके निवडून तात्काळ तपासा:",
    cotton: "कापूस",
    soybean: "सोयाबीन",
    tomato: "टोमॅटो",
    paddy: "भात / धान",
    orange: "नागपूर संत्रा",
    scanning: "पिकाच्या पानांची तपासणी सुरू आहे...",
    analyzingInfo: "कृत्रिम बुद्धिमत्ता (AI) रोगाचे प्रकार, तीव्रता आणि सेंद्रिय उपायांची माहिती तयार करत आहे...",
    confidence: "खात्री (सचोटी)",
    severity: "रोगाची तीव्रता",
    severityLow: "कमी",
    severityMedium: "मध्यम",
    severityHigh: "गंभीर",
    listenBtn: "माहिती ऐका (आवाज)",
    stopAudio: "आवाज थांबवा",
    shareWhatsApp: "व्हॉट्सॲपवर पाठवा",
    savedToHistory: "इतिहासात जतन केले",
    symptomsTitle: "रोगाची प्रमुख लक्षणे",
    causesTitle: "रोग पसरण्याचे मुख्य कारण",
    organicTitle: "१. सेंद्रिय व गावठी उपाय (कमी खर्चाचा / स्वस्त उपाय)",
    chemicalTitle: "२. रासायनिक फवारणी (कृषी सेवा केंद्र औषधे)",
    dosagePumpTitle: "१५ लिटर पंपासाठी अचूक प्रमाण (Knapsack Sprayer)",
    preventionTitle: "३. पुढच्या वेळेस काय काळजी घ्याल?",
    calcDosageBtn: "पंप व औषध कॅल्क्युलेटर",
    estimatedCost: "अंदाजे खर्च",
    noImageHint: "कृपया पानाचा फोटो अपलोड करा किंवा नमुना निवडा",
    newScanBtn: "नवीन पानाची तपासणी करा",
    tabs: {
      scan: "पीक तपासणी",
      chat: "कृषी मित्र",
      weather: "हवामान सल्ला",
      mandi: "बाजार भाव",
      schemes: "शासकीय योजना",
      history: "इतिहास"
    },
    weather: {
      title: "हवामान अंदाज व फवारणी सल्ला",
      subtitle: "पाऊस आणि वाऱ्याचा वेग तपासून महागडी फवारणी वाया जाण्यापासून वाचवा",
      selectCity: "जिल्हा / तालुका निवडा:",
      temp: "तापमान",
      humidity: "हवेतील आर्द्रता",
      wind: "वाऱ्याचा वेग",
      rainProb: "पावसाची शक्यता",
      spraySafe: "फवारणीसाठी उत्तम वेळ",
      sprayCaution: "सावधगिरीने फवारणी करा",
      sprayUnsafe: "फवारणी पूर्णपणे टाळा!"
    },
    mandi: {
      title: "महाराष्ट्र कृषी उत्पन्न बाजार समिती (APMC) दर",
      subtitle: "आजचे ताजे बाजार भाव (प्रति क्विंटल)",
      crop: "पीक",
      market: "बाजारपेठ",
      minPrice: "किमान भाव",
      maxPrice: "कमाल भाव",
      modalPrice: "सरासरी भाव",
      trend: "कल"
    },
    chat: {
      title: "कृषी मित्र (AI शेती तज्ज्ञ)",
      subtitle: "२४ तास उपलब्ध - तुमच्या स्थानिक भाषेत बोला किंवा लिहा",
      placeholder: "तुमचा शेतीविषयक प्रश्न विचारा किंवा बोला...",
      send: "पाठवा",
      voiceInputStart: "बोला (माईक)",
      voiceInputStop: "ऐकणे बंद करा",
      suggestedQuestions: "वारंवार विचारले जाणारे प्रश्न:",
      suggest1: "कापसावरील बोंडअळी कशी रोखावी?",
      suggest2: "सोयाबीन पिवळे का पडत आहे?",
      suggest3: "टोमॅटोवरील नागअळीसाठी स्वस्त उपाय काय?",
      suggest4: "दहापर्णी अर्क घरी कसा तयार करावा?",
      suggest5: "संत्र्याची फळगळ कशी थांबवावी?",
      botTyping: "कृषी मित्र सल्ला लिहित आहे..."
    },
    schemes: {
      title: "महाराष्ट्र राज्य शेतकरी कल्याणकारी योजना",
      subtitle: "अनुदान, थेट आर्थिक लाभ आणि अर्ज करण्याची पद्धत",
      subsidyLabel: "शासकीय अनुदान / लाभ:",
      eligibilityLabel: "पात्रता:",
      documentsLabel: "आवश्यक कागदपत्रे:",
      applyBtn: "अधिकृत पोर्टलवर अर्ज करा",
      guidanceBtn: "योजना माहिती ऐका"
    },
    history: {
      title: "पूर्वी तपासलेल्या पिकांचा इतिहास",
      empty: "अद्याप कोणतीही तपासणी झालेली नाही. वरील कॅमेऱ्याने फोटो काढून तपासणी करा.",
      clearBtn: "इतिहास साफ करा",
      viewDiagnosis: "सविस्तर उपाय पाहा"
    },
    calculator: {
      title: "१५ लिटर पंप व औषध प्रमाण कॅल्क्युलेटर",
      farmSize: "तुमचे शेत क्षेत्र (एकर मध्ये):",
      waterRequired: "लागणारे पाणी:",
      pumpsRequired: "एकूण लागणारे १५L पंप:",
      acre: "एकर",
      calculate: "हिशोब करा",
      liters: "लिटर",
      pumps: "पंप"
    }
  },
  hi: {
    appName: "कृषि रक्षक",
    tagline: "महाराष्ट्र के किसानों का डिजिटल फसल डॉक्टर",
    stateBadge: "महाराष्ट्र किसान विशेष",
    takePhoto: "फसल के पत्ते की फोटो लें या चुनें",
    takePhotoSub: "रोगग्रस्त पत्ते के आगे और पीछे का स्पष्ट फोटो लें",
    cameraBtn: "कैमरा खोलें",
    galleryBtn: "गैलरी से चुनें",
    demoBtn: "डेमो देखें",
    quickSamplesTitle: "नमूना फसल चुनकर तुरंत जांचें:",
    cotton: "कपास",
    soybean: "सोयाबीन",
    tomato: "टमाटर",
    paddy: "धान / चावल",
    orange: "नागपुर संतरा",
    scanning: "फसल के पत्तों की जांच हो रही है...",
    analyzingInfo: "आर्टिफिशियल इंटेलिजेंस (AI) रोग, गंभीरता और सस्ते जैविक उपायों की पहचान कर रहा है...",
    confidence: "सटीकता (Confidence)",
    severity: "रोग की गंभीरता",
    severityLow: "कम",
    severityMedium: "मध्यम",
    severityHigh: "गंभीर",
    listenBtn: "जानकारी सुनें (आवाज़)",
    stopAudio: "आवाज़ बंद करें",
    shareWhatsApp: "व्हाट्सएप पर भेजें",
    savedToHistory: "इतिहास में सुरक्षित",
    symptomsTitle: "रोग के प्रमुख लक्षण",
    causesTitle: "रोग फैलने का मुख्य कारण",
    organicTitle: "१. सस्ता जैविक/देसी उपाय (कम खर्च)",
    chemicalTitle: "२. रासायनिक छिड़काव (दुकान की दवाएं)",
    dosagePumpTitle: "१५ लीटर स्प्रे पंप के लिए सटीक मात्रा (Knapsack Sprayer)",
    preventionTitle: "३. अगली बार के लिए रोकथाम",
    calcDosageBtn: "पंप व दवा कैलकुलेटर",
    estimatedCost: "अनुमानित खर्च",
    noImageHint: "कृपया पत्ते का फोटो अपलोड करें या नमूना चुनें",
    newScanBtn: "नए पत्ते की जांच करें",
    tabs: {
      scan: "फसल जांच",
      chat: "कृषि मित्र",
      weather: "मौसम सलाह",
      mandi: "मंडी भाव",
      schemes: "सरकारी योजनाएं",
      history: "इतिहास"
    },
    weather: {
      title: "मौसम पूर्वानुमान और छिड़काव की सलाह",
      subtitle: "बारिश और हवा देखकर अपनी महंगी दवा का नुकसान बचाएं",
      selectCity: "जिला / क्षेत्र चुनें:",
      temp: "तापमान",
      humidity: "हवा में नमी",
      wind: "हवा की गति",
      rainProb: "बारिश की संभावना",
      spraySafe: "छिड़काव के लिए उत्तम समय",
      sprayCaution: "सावधानी से छिड़काव करें",
      sprayUnsafe: "छिड़काव तुरंत रोक दें!"
    },
    mandi: {
      title: "महाराष्ट्र कृषि उपज मंडी (APMC) के भाव",
      subtitle: "आज के ताजा मंडी भाव (प्रति क्विंटल)",
      crop: "फसल",
      market: "मंडी",
      minPrice: "न्यूनतम",
      maxPrice: "अधिकतम",
      modalPrice: "औसत भाव",
      trend: "ट्रेंड"
    },
    chat: {
      title: "कृषि मित्र (AI विशेषज्ञ)",
      subtitle: "२४ घंटे उपलब्ध - अपनी भाषा में पूछें या बोलें",
      placeholder: "अपना कृषि सवाल पूछें या बोलें...",
      send: "भेजें",
      voiceInputStart: "बोलें (माइक)",
      voiceInputStop: "सुनना बंद करें",
      suggestedQuestions: "अक्सर पूछे जाने वाले सवाल:",
      suggest1: "कपास में गुलाबी सुंडी कैसे रोकें?",
      suggest2: "सोयाबीन के पत्ते पीले क्यों पड़ रहे हैं?",
      suggest3: "टमाटर में फल छेदक के लिए सस्ता उपाय?",
      suggest4: "दशपर्णी अर्क घर पर कैसे बनाएं?",
      suggest5: "संतरे के फल गिरने से कैसे रोकें?",
      botTyping: "कृषि मित्र उत्तर लिख रहा है..."
    },
    schemes: {
      title: "महाराष्ट्र किसान कल्याणकारी योजनाएं",
      subtitle: "सब्सिडी, प्रत्यक्ष लाभ और आवेदन प्रक्रिया",
      subsidyLabel: "सरकारी अनुदान / लाभ:",
      eligibilityLabel: "पात्रता:",
      documentsLabel: "जरूरी दस्तावेज:",
      applyBtn: "आधिकारिक पोर्टल पर आवेदन करें",
      guidanceBtn: "योजना की जानकारी सुनें"
    },
    history: {
      title: "पूर्व में जांची गई फसलें",
      empty: "अभी तक कोई जांच नहीं की गई है। ऊपर कैमरे से पत्ते का फोटो लें।",
      clearBtn: "इतिहास मिटाएं",
      viewDiagnosis: "विस्तृत उपाय देखें"
    },
    calculator: {
      title: "१५ लीटर पंप और दवा कैलकुलेटर",
      farmSize: "आपका खेत क्षेत्र (एकड़ में):",
      waterRequired: "आवश्यक पानी:",
      pumpsRequired: "कुल १५ लीटर पंप:",
      acre: "एकड़",
      calculate: "गणना करें",
      liters: "लीटर",
      pumps: "पंप"
    }
  },
  en: {
    appName: "Krishi Rakshak",
    tagline: "AI Crop Doctor & Advisor for Farmers in Maharashtra",
    stateBadge: "Maharashtra Special",
    takePhoto: "Take or Upload Crop Leaf Photo",
    takePhotoSub: "Capture a clear, close-up photo of the affected leaf (front and back)",
    cameraBtn: "Open Camera",
    galleryBtn: "Choose from Gallery",
    demoBtn: "View Sample Demo",
    quickSamplesTitle: "Or instantly test with sample crops:",
    cotton: "Cotton",
    soybean: "Soybean",
    tomato: "Tomato",
    paddy: "Paddy / Rice",
    orange: "Nagpur Orange",
    scanning: "Analyzing crop leaf...",
    analyzingInfo: "Gemini AI is identifying the disease, severity score, and affordable desi remedies...",
    confidence: "Confidence",
    severity: "Disease Severity",
    severityLow: "Low",
    severityMedium: "Medium",
    severityHigh: "High",
    listenBtn: "Listen (Voice)",
    stopAudio: "Stop Voice",
    shareWhatsApp: "Share to WhatsApp",
    savedToHistory: "Saved to history",
    symptomsTitle: "Key Symptoms",
    causesTitle: "Primary Causes & Vector",
    organicTitle: "1. Affordable Organic / Desi Remedy (Low Cost)",
    chemicalTitle: "2. Chemical Treatment (Commercial Formulations)",
    dosagePumpTitle: "Exact Dosage per 15-Liter Knapsack Sprayer Pump",
    preventionTitle: "3. Future Preventive Measures",
    calcDosageBtn: "Pump & Spray Calculator",
    estimatedCost: "Estimated Cost",
    noImageHint: "Please take a leaf photo or pick a sample crop",
    newScanBtn: "Scan Another Leaf",
    tabs: {
      scan: "Crop Scan",
      chat: "Agri Bot",
      weather: "Weather Advisory",
      mandi: "Mandi Rates",
      schemes: "Govt Schemes",
      history: "History"
    },
    weather: {
      title: "Weather Forecast & Spray Advisory",
      subtitle: "Check rain forecast and wind speed to avoid wasting expensive sprays",
      selectCity: "Select Location:",
      temp: "Temperature",
      humidity: "Humidity",
      wind: "Wind Speed",
      rainProb: "Rain Probability",
      spraySafe: "Ideal Time for Spraying",
      sprayCaution: "Exercise Caution while Spraying",
      sprayUnsafe: "Do NOT Spray! Rain Imminent"
    },
    mandi: {
      title: "Maharashtra APMC Mandi Rates",
      subtitle: "Today's live market prices (per Quintal)",
      crop: "Crop",
      market: "Market",
      minPrice: "Min Price",
      maxPrice: "Max Price",
      modalPrice: "Modal Price",
      trend: "Trend"
    },
    chat: {
      title: "Krishi Mitra (AI Agri Expert)",
      subtitle: "Available 24/7 - Ask questions in your local language or use voice",
      placeholder: "Ask your crop question or tap the mic...",
      send: "Send",
      voiceInputStart: "Speak (Mic)",
      voiceInputStop: "Stop Listening",
      suggestedQuestions: "Frequently Asked Questions:",
      suggest1: "How to manage Pink Bollworm in cotton?",
      suggest2: "Why are soybean leaves turning yellow?",
      suggest3: "Cheapest remedy for tomato leaf miner?",
      suggest4: "How to prepare Dashparni Ark at home?",
      suggest5: "How to prevent fruit drop in oranges?",
      botTyping: "Krishi Mitra is formulating advice..."
    },
    schemes: {
      title: "Maharashtra Farmer Welfare Schemes",
      subtitle: "Subsidies, direct benefit transfers, and application guide",
      subsidyLabel: "Subsidy / Benefit:",
      eligibilityLabel: "Eligibility:",
      documentsLabel: "Required Documents:",
      applyBtn: "Apply on MahaDBT Portal",
      guidanceBtn: "Listen to Scheme Details"
    },
    history: {
      title: "Previous Crop Scans",
      empty: "No scans recorded yet. Use the camera above to diagnose a crop leaf.",
      clearBtn: "Clear History",
      viewDiagnosis: "View Full Diagnosis"
    },
    calculator: {
      title: "15L Sprayer Pump & Chemical Calculator",
      farmSize: "Farm Area (in Acres):",
      waterRequired: "Water Required:",
      pumpsRequired: "Total 15L Pumps Needed:",
      acre: "Acres",
      calculate: "Calculate",
      liters: "Liters",
      pumps: "Pumps"
    }
  }
};

export const SAMPLE_CROPS: Record<string, Record<Language, CropDiagnosis>> = {
  cotton: {
    mr: {
      cropName: "कापूस (Cotton)",
      cropKey: "cotton",
      diseaseName: "पानांचा चुरडा-मुरडा (Cotton Leaf Curl Virus - CLCuV)",
      scientificName: "Begomovirus / Bemisia tabaci vector",
      confidence: 94,
      severity: "मध्यम",
      symptoms: [
        "पानांच्या शिरा जाड होतात आणि पाने वरच्या किंवा खालच्या बाजूला वाटीसारखी वळतात.",
        "झाडांची वाढ खुंटते, नवीन पालवी येत नाही आणि बोंडे लहान राहून गळून पडतात.",
        "पानाच्या मागच्या बाजूला शिरांवर लहान पानासारखी अतिरिक्त वाढ (Enation) दिसते."
      ],
      causes: "हा विषाणूजन्य रोग पांढऱ्या माशीमुळे (Whitefly) वेगाने पसरतो. कोरडे, उष्ण व ढगाळ हवामान या किडीच्या प्रसारासाठी अतिशय अनुकूल ठरते.",
      organicSolution: "५% निंबोळी अर्क (Neem Seed Kernel Extract) किंवा ५० मिली गोमूत्र + २ ग्रॅम हिंग प्रति लिटर पाण्यात मिसळून फवारावे. यामुळे पांढरी माशी पळून जाते व रोगाचा प्रसार थांबतो.",
      chemicalSolution: "डायफेन्थियूरॉन ५०% WP (पोलो / Polo) २० ग्रॅम किंवा ऍसिटामिप्रीड २०% SP ५ ग्रॅम प्रति १५ लिटर पंप फवारावे.",
      pumpDosage: "१५ लिटरच्या पंपासाठी: पोलो २० ग्रॅम किंवा प्राईड (ऍसिटामिप्रीड) ५ ग्रॅम + सिलिकॉन स्टिकर १० मिली.",
      prevention: "शेतात एकरी ८ ते १० पिवळे चिकट सापळे (Yellow Sticky Traps) लावा. नत्रयुक्त खतांचा (युरिया) अतिरेक टाळा आणि शेताच्या कडेला मका किंवा ज्वारीचे आंतरपीक लावा.",
      estimatedCost: "सेंद्रिय: ₹४०-६०/पंप | रासायनिक: ₹१२०-१४०/पंप",
      image: "https://images.unsplash.com/photo-1599818815124-d450fb6b2230?auto=format&fit=crop&w=600&q=80"
    },
    hi: {
      cropName: "कपास (Cotton)",
      cropKey: "cotton",
      diseaseName: "पत्ती मरोड़ रोग (Cotton Leaf Curl Virus)",
      scientificName: "Begomovirus / Bemisia tabaci vector",
      confidence: 94,
      severity: "मध्यम",
      symptoms: [
        "पत्तियों की नसें मोटी हो जाती हैं और पत्तियां कटोरी की तरह ऊपर या नीचे मुड़ जाती हैं।",
        "पौधों का विकास रुक जाता है, नए कल्ले नहीं आते और गूलर छोटे रह जाते हैं।",
        "पत्तियों की निचली सतह पर छोटे उभार (Enation) दिखाई देते हैं।"
      ],
      causes: "यह विषाणु सफेद मक्खी (Whitefly) द्वारा फैलता है। गर्म और शुष्क मौसम में यह मक्खी तेजी से बढ़ती है।",
      organicSolution: "५% नीम का काढ़ा या ५० मिली गोमूत्र + २ ग्राम हींग प्रति लीटर पानी में मिलाकर छिड़कें। इससे सफेद मक्खी भाग जाती है।",
      chemicalSolution: "डायफेन्थियूरॉन ५०% WP (पोलो) २० ग्राम अथवा एसिटामिप्रिड २०% SP ५ ग्राम प्रति १५ लीटर स्प्रे पंप छिड़कें।",
      pumpDosage: "१५ लीटर स्प्रे पंप के लिए: पोलो २० ग्राम अथवा एसिटामिप्रिड ५ ग्राम + ५ मिली स्टीकर।",
      prevention: "खेत में प्रति एकड़ ८-१० पीले चिपचिपे कार्ड लगाएं। अत्यधिक यूरिया के प्रयोग से बचें।",
      estimatedCost: "जैविक: ₹४०-६०/पंप | रासायनिक: ₹१२०-१४०/पंप",
      image: "https://images.unsplash.com/photo-1599818815124-d450fb6b2230?auto=format&fit=crop&w=600&q=80"
    },
    en: {
      cropName: "Cotton",
      cropKey: "cotton",
      diseaseName: "Cotton Leaf Curl Virus (CLCuV)",
      scientificName: "Begomovirus / Bemisia tabaci vector",
      confidence: 94,
      severity: "Medium",
      symptoms: [
        "Upward or downward curling of leaf margins with severe vein thickening.",
        "Stunted vegetative growth and premature dropping of flower squares/bolls.",
        "Cup-like enations develop along primary veins on the leaf underside."
      ],
      causes: "Transmitted by Whitefly vector (Bemisia tabaci). Hot and dry weather accelerates pest feeding and transmission.",
      organicSolution: "Spray 5% Neem Seed Kernel Extract (NSKE) or Dashparni Ark @ 50ml + Cow urine @ 100ml per 15L water to repel whiteflies.",
      chemicalSolution: "Spray Diafenthiuron 50% WP (Polo) @ 20g or Acetamiprid 20% SP @ 5g per 15-liter knapsack pump.",
      pumpDosage: "For 15L Knapsack Pump: 20g Polo or 5g Pride (Acetamiprid) + 5ml wetting agent/sticker.",
      prevention: "Install 8-10 Yellow Sticky Traps per acre. Avoid excess urea fertilizer. Plant border rows of maize/sorghum.",
      estimatedCost: "Organic: ₹40-60/pump | Chemical: ₹120-140/pump",
      image: "https://images.unsplash.com/photo-1599818815124-d450fb6b2230?auto=format&fit=crop&w=600&q=80"
    }
  },
  soybean: {
    mr: {
      cropName: "सोयाबीन (Soybean)",
      cropKey: "soybean",
      diseaseName: "सोयाबीन पिवळा मोज़ॅक व तांबेरा (Yellow Mosaic & Rust)",
      scientificName: "Mungbean Yellow Mosaic India Virus (MYMIV)",
      confidence: 91,
      severity: "गंभीर",
      symptoms: [
        "पानांवर पिवळे व हिरवे चट्टे तयार होतात, नंतर संपूर्ण पान पिवळे पडून वाळते.",
        "झाडांची वाढ थांबून शेंगांमध्ये दाणे लहान भरतात किंवा भरतच नाहीत.",
        "तांबेरा असल्यास पानांच्या मागच्या बाजूला तपकिरी रंगाचे लहान ठिपके उमटतात."
      ],
      causes: "पिवळा मोज़ॅक पांढऱ्या माशीद्वारे पसरतो, तर तांबेरा रोग सतत ढगाळ व दमट हवामानामुळे बुरशीजन्य प्रादुर्भावातून होतो.",
      organicSolution: "ताक (२ लिटर आंबट ताक) + ५० ग्रॅम हळद प्रति १५ लिटर पाण्यात मिसळून फवारावे. सोबत ५% निंबोळी अर्क द्यावा.",
      chemicalSolution: "थायमेथोक्सम २५% WG (अक्टारा) १० ग्रॅम किंवा प्रोपिकोनॅझोल २५% EC (टिल्ट) १५ मिली प्रति १५ लिटर पंप फवारावे.",
      pumpDosage: "१५ लिटर पंपासाठी: अक्टारा १० ग्रॅम + टिल्ट १५ मिली + स्टिकर १० मिली.",
      prevention: "रोगप्रतिकारक वाणांची निवड करा (उदा. फुले संगम KDS-726). शेतातील तण त्वरित काढून टाका.",
      estimatedCost: "सेंद्रिय: ₹३०-५०/पंप | रासायनिक: ₹१५०-१७०/पंप",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80"
    },
    hi: {
      cropName: "सोयाबीन (Soybean)",
      cropKey: "soybean",
      diseaseName: "सोयाबीन पीला मोजेक व गेरुआ (Yellow Mosaic & Rust)",
      scientificName: "Mungbean Yellow Mosaic India Virus",
      confidence: 91,
      severity: "गंभीर",
      symptoms: [
        "पत्तियों पर पीले और हरे धब्बे बनते हैं, बाद में पूरी पत्ती पीली पड़ जाती है।",
        "पौधे का विकास रुक जाता है और फलियों में दाने नहीं भरते।",
        "गेरुआ में पत्ती के नीचे भूरे-तांबई फफोले दिखाई देते हैं।"
      ],
      causes: "सफेद मक्खी द्वारा वायरस का फैलाव और अधिक आर्द्रता में फफूंद का प्रकोप।",
      organicSolution: "खट्टी छाछ (२ लीटर) + ५० ग्राम हल्दी प्रति १५ लीटर पानी में मिलाकर स्प्रे करें।",
      chemicalSolution: "थियामेथोक्सम २५% WG (अकटारा) १० ग्राम या प्रोपिकोनाजोल २५% EC (टिल्ट) १५ मिली प्रति १५ लीटर पंप में छिड़कें।",
      pumpDosage: "१५ लीटर स्प्रे पंप के लिए: अकटारा १० ग्राम + टिल्ट १५ मिली + ५ मिली स्टीकर।",
      prevention: "फुले संगम (KDS-726) जैसी प्रतिरोधी किस्में लगाएं और खेत में जलभराव न होने दें।",
      estimatedCost: "जैविक: ₹३०-५०/पंप | रासायनिक: ₹१५०-१७०/पंप",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80"
    },
    en: {
      cropName: "Soybean",
      cropKey: "soybean",
      diseaseName: "Soybean Yellow Mosaic Virus & Rust",
      scientificName: "Mungbean Yellow Mosaic India Virus",
      confidence: 91,
      severity: "High",
      symptoms: [
        "Mosaic of alternating yellow and green patches on leaves, progressing to complete chlorosis.",
        "Pod filling is severely impaired, resulting in shriveled grains.",
        "Brownish-cinnamon colored pustules appear on lower leaf surfaces under rust infection."
      ],
      causes: "Spread by whitefly vector alongside fungal rust spores thriving in humid monsoon overcast.",
      organicSolution: "Foliar spray of 2L sour buttermilk + 50g turmeric powder mixed in 15L water with 5% neem seed oil.",
      chemicalSolution: "Spray Thiamethoxam 25% WG (Actara) @ 10g + Propiconazole 25% EC (Tilt) @ 15ml per 15L pump.",
      pumpDosage: "For 15L Knapsack Pump: 10g Actara + 15ml Tilt + 5ml spreader/sticker.",
      prevention: "Plant resistant cultivars like Phule Sangam (KDS-726). Maintain weed-free borders.",
      estimatedCost: "Organic: ₹30-50/pump | Chemical: ₹150-170/pump",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80"
    }
  },
  tomato: {
    mr: {
      cropName: "टोमॅटो (Tomato)",
      cropKey: "tomato",
      diseaseName: "लवकर येणारा करपा व नागअळी (Early Blight & Leaf Miner)",
      scientificName: "Alternaria solani / Liriomyza trifolii",
      confidence: 96,
      severity: "मध्यम",
      symptoms: [
        "खालच्या पानांवर गोल काळे-तपकिरी चक्राकार ठिपके (Target Board) पडतात.",
        "पानांवर नागमोडी पांढऱ्या रेषा (नागअळीच्या खाणी) उमटतात.",
        "फळांवर देठाजवळ काळे खोलगट डाग पडतात आणि फळे सडतात."
      ],
      causes: "अल्टरनेरिया बुरशी दमट हवेत व दव पडल्यावर झपाट्याने वाढते, तर नागअळीचे किडे पानाच्या आत शिरून हरितद्रव्य खातात.",
      organicSolution: "ट्रायकोडर्मा व्हिरीडी (Trichoderma) ६० ग्रॅम किंवा जीवामृत २ लिटर प्रति १५ लिटर पाण्यात मिसळून फवारावे व मुळाशी आळवणी करावी.",
      chemicalSolution: "मँकोझेब ७५% WP (एम-४५) ३० ग्रॅम किंवा टेब्युकोनॅझोल + ट्रायफ्लॉक्सीस्ट्रॉबिन (नेटिव्हो) १० ग्रॅम प्रति १५ लिटर पंप फवारावे.",
      pumpDosage: "१५ लिटर पंपासाठी: नेटिव्हो १० ग्रॅम किंवा एम-४५ ३० ग्रॅम + नागअळीसाठी प्रोक्लेम (एमॅमेक्टिन बेंझोएट) ७ ग्रॅम.",
      prevention: "टोमॅटोची लागवड गादीवाफ्यावर मल्चिंग पेपरवर करा. पिवळे व निळे चिकट सापळे लावा.",
      estimatedCost: "सेंद्रिय: ₹४०/पंप | रासायनिक: ₹१४०/पंप",
      image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80"
    },
    hi: {
      cropName: "टमाटर (Tomato)",
      cropKey: "tomato",
      diseaseName: "अगेती झुलसा व लीफ माइनर (Early Blight & Leaf Miner)",
      scientificName: "Alternaria solani / Liriomyza trifolii",
      confidence: 96,
      severity: "मध्यम",
      symptoms: [
        "निचली पत्तियों पर गोल भूरे छल्लेदार धब्बे (Target spots) बनते हैं।",
        "पत्तियों पर सफेद टेढ़ी-मेढ़ी सुरंग जैसी लकीरें दिखाई देती हैं।",
        "फल डंठल के पास से काले होकर सड़ने लगते हैं।"
      ],
      causes: "अल्टरनेरिया फफूंद अधिक ओस व नमी में तेजी से फैलती है।",
      organicSolution: "ट्राइकोडर्मा ६० ग्राम अथवा जीवामृत २ लीटर प्रति १५ लीटर पानी में मिलाकर पत्तियों पर छिड़कें।",
      chemicalSolution: "मैनकोजेब ७५% WP (M-45) ३० ग्राम अथवा टेबुकोनाजोल (नेटिवो) १० ग्राम प्रति १५ लीटर पानी में छिड़कें।",
      pumpDosage: "१५ लीटर स्प्रे पंप के लिए: नेटिवो १० ग्राम + प्रोक्लेम (एमामेक्टिन बेंजोएट) ७ ग्राम।",
      prevention: "मल्चिंग पेपर पर खेती करें और खेत में नीले व पीले स्टिकी ट्रैप लगाएं।",
      estimatedCost: "जैविक: ₹४०/पंप | रासायनिक: ₹१४०/पंप",
      image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80"
    },
    en: {
      cropName: "Tomato",
      cropKey: "tomato",
      diseaseName: "Early Blight & Serpentine Leaf Miner",
      scientificName: "Alternaria solani / Liriomyza trifolii",
      confidence: 96,
      severity: "Medium",
      symptoms: [
        "Concentric target-board rings on older foliage with chlorotic yellow halos.",
        "Winding serpentine white mines mined across the chlorophyll layer.",
        "Dark sunken leathery lesions at stem attachment points on fruits."
      ],
      causes: "Alternaria fungal spores spread under warm, humid microclimates with frequent dew cycles.",
      organicSolution: "Foliar drench of Trichoderma viride @ 60g or filtered Jeevamrut @ 2L per 15L water with neem formulation.",
      chemicalSolution: "Spray Mancozeb 75% WP @ 30g or Tebuconazole + Trifloxystrobin (Nativo) @ 10g per 15L knapsack pump.",
      pumpDosage: "For 15L Knapsack Pump: 10g Nativo + 7g Emamectin Benzoate 5% SG (Proclaim) + 5ml sticker.",
      prevention: "Use silver-black plastic mulch. Install combination of yellow and blue sticky traps.",
      estimatedCost: "Organic: ₹40/pump | Chemical: ₹140/pump",
      image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80"
    }
  },
  paddy: {
    mr: {
      cropName: "भात / धान (Paddy - Bhandara special)",
      cropKey: "paddy",
      diseaseName: "भात पिकावरील करपा व तुडतुडे (Rice Blast & Brown Plant Hopper)",
      scientificName: "Magnaporthe oryzae / Nilaparvata lugens",
      confidence: 93,
      severity: "गंभीर",
      symptoms: [
        "पानांवर डोळ्याच्या आकाराचे ( spindle shaped ) दोन्ही टोकांना टोकदार राखाडी डाग पडतात.",
        "पेऱ्याजवळ काळा पट्टा पडून लोंब्या मोडून पडतात (मानमोडी किंवा मान करपा).",
        "खालच्या खोडाजवळ तपकिरी तुडतुड्यांचा प्रादुर्भाव होऊन झाडे वाळतात (हॉपर बर्न)."
      ],
      causes: "जास्त नत्र (युरिया) खतांचा वापर, शेतात सतत पाणी साचून राहणे आणि ढगाळ दमट हवामान यामुळे करपा झपाट्याने वाढतो.",
      organicSolution: "दहापर्णी अर्क (Dashparni Ark) १०० मिली + गोमूत्र १०० मिली प्रति १५ लिटर पाण्यात फवारावे. मुळाशी ट्रायकोडर्मा द्यावा.",
      chemicalSolution: "ट्रायसायक्लॅझोल ७५% WP (बाण / Beam) १० ग्रॅम किंवा आयसोप्रॉथियोलेन ४०% EC (फुजी-वन) ३० मिली प्रति १५ लिटर पंप फवारावे.",
      pumpDosage: "१५ लिटर पंपासाठी: बीम (Tricyclazole) १० ग्रॅम + तुडतुड्यांसाठी पायमेट्रोझीन (चेस) १२ ग्रॅम.",
      prevention: "शेतातील पाणी २ दिवस उपसून शेत वाळू द्यावे (Alternate wetting & drying). युरियाचा हप्ता फोडून द्यावा.",
      estimatedCost: "सेंद्रिय: ₹४०/पंप | रासायनिक: ₹१६०/पंप",
      image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80"
    },
    hi: {
      cropName: "धान / चावल (Paddy)",
      cropKey: "paddy",
      diseaseName: "धान का झुलसा/ब्लास्ट व भूरा फुदका (Rice Blast & BPH)",
      scientificName: "Magnaporthe oryzae / Nilaparvata lugens",
      confidence: 93,
      severity: "गंभीर",
      symptoms: [
        "पत्तियों पर नाव या आँख के आकार के बीच में राख जैसे धब्बे बनते हैं।",
        "बाली की गर्दन काली होकर टूट जाती है (गर्दन तोड़ रोग)।",
        "तने के निचले हिस्से पर भूरे फुदके रस चूसते हैं जिससे पौधा सूख जाता है।"
      ],
      causes: "अत्यधिक यूरिया का प्रयोग और लगातार पानी भरा रहने से फफूंद सक्रिय होती है।",
      organicSolution: "दशपर्णी अर्क १०० मिली + १०० मिली गोमूत्र प्रति १५ लीटर पानी में मिलाकर छिड़काव करें।",
      chemicalSolution: "ट्राइसाइक्लाजोल ७५% WP (बीम) १० ग्राम या आइसोप्रोथियोलेन ४०% EC (फुजी-वन) ३० मिली प्रति १५ लीटर पंप में छिड़कें।",
      pumpDosage: "१५ लीटर स्प्रे पंप के लिए: बीम १० ग्राम + चेस (पाइमेट्रोज़िन) १२ ग्राम + स्टीकर।",
      prevention: "खेत से पानी निकालकर २-३ दिन हवा लगने दें। संतुलित पोटाश व फॉस्फोरस दें।",
      estimatedCost: "जैविक: ₹४०/पंप | रासायनिक: ₹१६०/पंप",
      image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80"
    },
    en: {
      cropName: "Paddy / Rice",
      cropKey: "paddy",
      diseaseName: "Rice Blast & Brown Plant Hopper (BPH)",
      scientificName: "Magnaporthe oryzae / Nilaparvata lugens",
      confidence: 93,
      severity: "High",
      symptoms: [
        "Diamond/spindle-shaped lesions with grayish-white necrotic centers and dark brownish margins.",
        "Blackened neck rot (neck blast) causing panicle breakage and chaffy empty grains.",
        "Circular yellowing and scorched patches at base known as Hopper Burn."
      ],
      causes: "Excessive split application of nitrogenous fertilizers alongside stagnant water and high humidity.",
      organicSolution: "Spray Dashparni Ark @ 100ml + filtered cow urine @ 100ml per 15L water. Seed treatment with Pseudomonas.",
      chemicalSolution: "Spray Tricyclazole 75% WP (Beam) @ 10g or Isoprothiolane 40% EC (Fuji-One) @ 30ml per 15L knapsack pump.",
      pumpDosage: "For 15L Knapsack Pump: 10g Beam (Tricyclazole) + 12g Pymetrozine (Chess) + 5ml spreader.",
      prevention: "Practice Alternate Wetting and Drying (AWD). Avoid applying excess urea during tillering.",
      estimatedCost: "Organic: ₹40/pump | Chemical: ₹160/pump",
      image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80"
    }
  },
  orange: {
    mr: {
      cropName: "संत्रा (Nagpur Santra - Vidarbha Special)",
      cropKey: "orange",
      diseaseName: "संत्र्यावरील खैऱ्या रोग व डहाळी वाळणे (Citrus Canker & Dieback)",
      scientificName: "Xanthomonas citri pv. citri / Colletotrichum gloeosporioides",
      confidence: 95,
      severity: "मध्यम",
      symptoms: [
        "पानांवर, देठांवर व संत्र्याच्या फळांवर खडबडीत, खपलीसारखे तपकिरी उंचवटे (खैऱ्या डाग) येतात.",
        "डागांच्या भोवती स्पष्ट पिवळे वलय (Yellow Halo) दिसते.",
        "झाडांच्या शेंड्याकडील बारीक फांद्या वरून खाली वाळत येतात आणि फळगळ होते."
      ],
      causes: "हा जिवाणूजन्य रोग पावसाच्या पाण्याच्या थेंबांमुळे व पानांवरील जखमांमुळे वेगाने एका झाडावरून दुसऱ्या झाडावर पसरतो.",
      organicSolution: "बोर्डो मिश्रण (Bordeaux Mixture) १% ची फवारणी किंवा गोमूत्र २०० मिली + हळद ५० ग्रॅम प्रति १५ लिटर पाण्यात फवारावे.",
      chemicalSolution: "कॉपर ऑक्सिक्लोराईड ५०% WP (ब्लू कॉपर) ३० ग्रॅम + स्ट्रेप्टोमायसीन सल्फेट (स्ट्रेप्टोसायक्लिन) २ ग्रॅम प्रति १५ लिटर पंप फवारावे.",
      pumpDosage: "१५ लिटर पंपासाठी: ब्लू कॉपर ३० ग्रॅम + स्ट्रेप्टोसायक्लिन २ ग्रॅम + स्टिकर १० मिली.",
      prevention: "वाळलेल्या व रोगट फांद्या छाटून त्यावर बोर्डो पेस्ट लावा. पावसाळ्यापूर्वी बागेची स्वच्छता ठेवा.",
      estimatedCost: "सेंद्रिय: ₹५०/पंप | रासायनिक: ₹९०/पंप",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=600&q=80"
    },
    hi: {
      cropName: "संतरा (Nagpur Orange)",
      cropKey: "orange",
      diseaseName: "संतरे का खैरा रोग व डाईबैक (Citrus Canker & Dieback)",
      scientificName: "Xanthomonas citri pv. citri",
      confidence: 95,
      severity: "मध्यम",
      symptoms: [
        "पत्तियों, टहनियों और फलों पर उभरे हुए खुरदुरे भूरे मस्से जैसे चकत्ते बनते हैं।",
        "धब्बों के चारों ओर स्पष्ट पीला घेरा (Yellow Halo) दिखाई देता है।",
        "टहनियां ऊपर से नीचे की ओर सूखने लगती हैं और फल समय से पहले गिर जाते हैं।"
      ],
      causes: "जीवाणु जनित रोग जो बारिश की बौछारों और तेज हवा से बगीचे में फैलता है।",
      organicSolution: "१% बोर्डो मिश्रण का छिड़काव अथवा २०० मिली गोमूत्र + ५० ग्राम हल्दी प्रति १५ लीटर पानी में छिड़कें।",
      chemicalSolution: "कॉपर ऑक्सीक्लोराइड ५०% WP (ब्लू कॉपर) ३० ग्राम + स्ट्रेप्टोसाइक्लिन २ ग्राम प्रति १५ लीटर पानी में छिड़कें।",
      pumpDosage: "१५ लीटर स्प्रे पंप के लिए: ब्लू कॉपर ३० ग्राम + स्ट्रेप्टोसाइक्लिन २ ग्राम + ५ मिली स्टीकर।",
      prevention: "सूखी और रोगी टहनियों की कटाई करके कटे भाग पर बोर्डो पेस्ट लगाएं।",
      estimatedCost: "जैविक: ₹५०/पंप | रासायनिक: ₹९०/पंप",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=600&q=80"
    },
    en: {
      cropName: "Nagpur Orange (Santra)",
      cropKey: "orange",
      diseaseName: "Citrus Bacterial Canker & Twig Dieback",
      scientificName: "Xanthomonas citri pv. citri",
      confidence: 95,
      severity: "Medium",
      symptoms: [
        "Raised corky, pustular brownish cankers on leaves, twigs, and fruit rinds.",
        "Prominent oily water-soaked margin surrounded by an oily chlorotic halo.",
        "Progressive dieback of twigs from tip downwards accompanied by premature fruit drop."
      ],
      causes: "Bacterial pathogen disseminated by wind-blown rain droplets and leaf miner injuries.",
      organicSolution: "Foliar spray of 1% Bordeaux Mixture, or 200ml fermented cow urine + 50g turmeric in 15L water.",
      chemicalSolution: "Copper Oxychloride 50% WP (Blitox/Blue Copper) @ 30g + Streptocycline @ 2g per 15L pump.",
      pumpDosage: "For 15L Knapsack Pump: 30g Blue Copper + 2g Streptocycline pouch + 5ml non-ionic sticker.",
      prevention: "Prune diseased twigs 2 inches below infected area and seal with Bordeaux paste before monsoon onset.",
      estimatedCost: "Organic: ₹50/pump | Chemical: ₹90/pump",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=600&q=80"
    }
  }
};

export const WEATHER_STATIONS: WeatherData[] = [
  {
    cityKey: "junnar",
    cityName: {
      mr: "जुन्नर (पुणे)",
      hi: "जुन्नर (पुणे)",
      en: "Junnar (Pune)"
    },
    region: {
      mr: "पश्चिम महाराष्ट्र (टोमॅटो, कांदा व डाळिंब पट्टा)",
      hi: "पश्चिम महाराष्ट्र (टमाटर व प्याज क्षेत्र)",
      en: "Western Maharashtra (Tomato & Onion Belt)"
    },
    temp: 28,
    humidity: 58,
    windSpeed: 11,
    rainChance: 15,
    condition: "partlyCloudy",
    sprayStatus: "safe",
    sprayAdvice: {
      mr: "हवामान निरभ्र व अनुकूल आहे. वाऱ्याचा वेग कमी असल्याने सकाळी ८ ते ११ किंवा दुपारी ४ नंतर फवारणीसाठी योग्य वेळ आहे.",
      hi: "मौसम साफ और अनुकूल है। हवा की गति कम होने से सुबह ८ से ११ या शाम ४ बजे के बाद छिड़काव के लिए उत्तम समय है।",
      en: "Weather is clear and favorable. Low wind speed makes 8-11 AM or after 4 PM ideal for foliar spraying."
    }
  },
  {
    cityKey: "bhandara",
    cityName: {
      mr: "भंडारा (विदर्भ)",
      hi: "भंडारा (विदर्भ)",
      en: "Bhandara (Vidarbha)"
    },
    region: {
      mr: "पूर्व विदर्भ (भात / धान व कडधान्य पट्टा)",
      hi: "पूर्वी विदर्भ (धान व दलहन क्षेत्र)",
      en: "Eastern Vidarbha (Paddy & Rice Bowl)"
    },
    temp: 31,
    humidity: 86,
    windSpeed: 24,
    rainChance: 82,
    condition: "rainy",
    sprayStatus: "unsafe",
    sprayAdvice: {
      mr: "पुढील २४ तासांत मुसळधार पावसाची ८२% शक्यता आहे! कोणतीही रासायनिक किंवा सेंद्रिय फवारणी करू नका, औषध वाहून जाईल.",
      hi: "अगले २४ घंटे में भारी बारिश की ८२% संभावना है! कोई भी कीटनाशक छिड़काव न करें, दवा धुल जाएगी।",
      en: "82% probability of heavy rainfall in the next 24 hours! Postpone all pesticide and fungicide spraying immediately."
    }
  },
  {
    cityKey: "nagpur",
    cityName: {
      mr: "नागपूर (विदर्भ)",
      hi: "नागपुर (विदर्भ)",
      en: "Nagpur (Vidarbha)"
    },
    region: {
      mr: "मध्य विदर्भ (कापूस, संत्रा व सोयाबीन पट्टा)",
      hi: "मध्य विदर्भ (कपास, संतरा व सोयाबीन)",
      en: "Central Vidarbha (Orange & Cotton Belt)"
    },
    temp: 33,
    humidity: 64,
    windSpeed: 14,
    rainChance: 35,
    condition: "partlyCloudy",
    sprayStatus: "caution",
    sprayAdvice: {
      mr: "दुपारी ढगाळ हवामान राहू शकते. फवारणी करताना सिलिकॉन स्टिकर अवश्य वापरा म्हणजे हलक्या पावसातही औषध धुऊन जाणार नाही.",
      hi: "दोपहर में बादल छा सकते हैं। छिड़काव करते समय सिलिकॉन स्टीकर जरूर मिलाएं ताकि हल्की बारिश में दवा न धुले।",
      en: "Overcast skies expected in the afternoon. Must use a silicone spreader/sticker if spraying today."
    }
  },
  {
    cityKey: "jalna",
    cityName: {
      mr: "जालना (मराठवाडा)",
      hi: "जालना (मराठवाड़ा)",
      en: "Jalna (Marathwada)"
    },
    region: {
      mr: "मराठवाडा (सोयाबीन, कापूस व मोसंबी)",
      hi: "मराठवाड़ा (सोयाबीन, कपास व मौसमी)",
      en: "Marathwada (Soybean & Sweet Lime Belt)"
    },
    temp: 32,
    humidity: 52,
    windSpeed: 10,
    rainChance: 10,
    condition: "sunny",
    sprayStatus: "safe",
    sprayAdvice: {
      mr: "हवामान स्वच्छ व कोरडे आहे. कीटकनाशक व बुरशीनाशक फवारणीसाठी अगदी परिपूर्ण दिवस आहे.",
      hi: "मौसम बिल्कुल साफ और सूखा है। कीटनाशक व फफूंदनाशक छिड़काव के लिए बिल्कुल उपयुक्त दिन है।",
      en: "Clear and dry weather. Perfect conditions for insecticidal and fungal sprays."
    }
  },
  {
    cityKey: "kolhapur",
    cityName: {
      mr: "कोल्हापूर (दक्षिण महाराष्ट्र)",
      hi: "कोल्हापुर (दक्षिण महाराष्ट्र)",
      en: "Kolhapur (South Maharashtra)"
    },
    region: {
      mr: "दक्षिण महाराष्ट्र (ऊस, हळद व भाजीपाला)",
      hi: "दक्षिण महाराष्ट्र (गन्ना व हल्दी)",
      en: "South Maharashtra (Sugarcane & Turmeric)"
    },
    temp: 27,
    humidity: 78,
    windSpeed: 16,
    rainChance: 45,
    condition: "partlyCloudy",
    sprayStatus: "caution",
    sprayAdvice: {
      mr: "दमट हवामानामुळे हुमणी व करपा वाढण्याची शक्यता. दुपारच्या वेळी पाऊस थांबल्यावरच फवारणी करा.",
      hi: "नमी ज्यादा रहने से फफूंद का खतरा। दोपहर में बारिश रुकने पर ही दवा छिड़कें।",
      en: "High humidity increases fungal risk. Spray only after showers subside in midday."
    }
  }
];

export const MANDI_RATES: MandiRate[] = [
  {
    cropName: { mr: "कापूस (मध्यम धागा)", hi: "कपास (मीडियम)", en: "Cotton (Medium Staple)" },
    market: { mr: "अकोला APMC", hi: "अकोला APMC", en: "Akola APMC" },
    minPrice: 6950,
    maxPrice: 7750,
    modalPrice: 7420,
    trend: "up",
    unit: "क्विंटल"
  },
  {
    cropName: { mr: "सोयाबीन (पिवळा)", hi: "सोयाबीन (पीला)", en: "Soybean (Yellow)" },
    market: { mr: "लातूर APMC", hi: "लातूर APMC", en: "Latur APMC" },
    minPrice: 4200,
    maxPrice: 4680,
    modalPrice: 4510,
    trend: "stable",
    unit: "क्विंटल"
  },
  {
    cropName: { mr: "टोमॅटो (हायब्रिड)", hi: "टमाटर (हाइब्रिड)", en: "Tomato (Hybrid)" },
    market: { mr: "जुन्नर / नारायणगाव APMC", hi: "जुन्नर / नारायणगांव", en: "Junnar / Narayangaon" },
    minPrice: 1200,
    maxPrice: 2400,
    modalPrice: 1850,
    trend: "up",
    unit: "क्विंटल"
  },
  {
    cropName: { mr: "भात / धान (कshared/बारीक)", hi: "धान (बारीक)", en: "Paddy (Fine/Jai Sriram)" },
    market: { mr: "गोंदिया / भंडारा APMC", hi: "गोंदिया / भंडारा", en: "Gondia / Bhandara" },
    minPrice: 2200,
    maxPrice: 2850,
    modalPrice: 2550,
    trend: "stable",
    unit: "क्विंटल"
  },
  {
    cropName: { mr: "नागपूर संत्रा (मृग बहार)", hi: "नागपुर संतरा", en: "Nagpur Orange (Santra)" },
    market: { mr: "नागपूर कॉटन मार्केट", hi: "नागपुर मंडी", en: "Nagpur Fruit Market" },
    minPrice: 3500,
    maxPrice: 6200,
    modalPrice: 4800,
    trend: "up",
    unit: "क्विंटल"
  },
  {
    cropName: { mr: "कांदा (उन्हाळी)", hi: "प्याज (समर)", en: "Onion (Summer)" },
    market: { mr: "लासलगाव APMC", hi: "लासलगांव APMC", en: "Lasalgaon APMC" },
    minPrice: 1400,
    maxPrice: 2250,
    modalPrice: 1920,
    trend: "down",
    unit: "क्विंटल"
  }
];

export const SCHEMES_DATA: SchemeInfo[] = [
  {
    id: "namo-shetkari",
    title: {
      mr: "नमो शेतकरी महासन्मान निधी योजना",
      hi: "नमो शेतकरी महासम्मान निधि योजना",
      en: "Namo Shetkari Mahasanman Nidhi"
    },
    subtitle: {
      mr: "महाराष्ट्र शासन थेट आर्थिक मदत",
      hi: "महाराष्ट्र शासन प्रत्यक्ष वित्तीय सहायता",
      en: "Govt of Maharashtra Direct Farmer Support"
    },
    subsidy: {
      mr: "दरवर्षी ₹६,००० अतिरिक्त थेट खात्यात (PM-Kisan सोबत एकूण ₹१२,००० प्रति वर्ष)",
      hi: "सालाना ₹६,००० अतिरिक्त सीधे बैंक खाते में (PM-Kisan के साथ कुल ₹१२,००० प्रति वर्ष)",
      en: "₹6,000/year directly to bank account (Combined ₹12,000/year with PM-Kisan)"
    },
    eligibility: {
      mr: "महाराष्ट्रातील सर्व अल्प व अत्यल्प भूधारक शेतकरी ज्यांची पीएम-किसान नोंदणी व e-KYC पूर्ण आहे.",
      hi: "महाराष्ट्र के सभी लघु व सीमांत किसान जिनका पीएम-किसान ई-केवाईसी पूर्ण है।",
      en: "All active PM-Kisan registered landholding farmers with completed e-KYC in Maharashtra."
    },
    documents: {
      mr: ["आधार कार्ड (Aadhaar)", "७/१२ व ८-अ उतारा", "बँक पासबुक व NPCI लिंक", "मोबाईल नंबर"],
      hi: ["आधार कार्ड", "७/१२ व ८-अ खतौनी", "बैंक पासबुक (आधार लिंक)", "मोबाइल नंबर"],
      en: ["Aadhaar Card", "7/12 & 8-A Land Records", "Aadhaar-seeded Bank Account", "Mobile Number"]
    },
    link: "https://mahadbt.maharashtra.gov.in",
    badge: { mr: "दरवर्षी ₹१२,०००", hi: "सालाना ₹१२,०००", en: "₹12,000 / Yr" }
  },
  {
    id: "panjabrao-deshmukh",
    title: {
      mr: "डॉ. पंजाबराव देशमुख जैविक शेती मिशन",
      hi: "डॉ. पंजाबराव देशमुख जैविक खेती मिशन",
      en: "Dr. Panjabrao Deshmukh Organic Farming Mission"
    },
    subtitle: {
      mr: "सेंद्रिय खते, कीटकनाशके व शेतकरी गट अनुदान",
      hi: "जैविक खाद, कीट नियंत्रण व किसान समूह अनुदान",
      en: "Bio-Fertilizers & Organic Farming Group Subsidy"
    },
    subsidy: {
      mr: "सेंद्रिय निविष्ठा, दहापर्णी अर्क युनिट, गांडूळ खत व जैविक प्रमाणीकरणासाठी ७५% पर्यंत अनुदान (प्रति गट ₹१० लाख पर्यंत).",
      hi: "जैविक खाद, वर्मी कम्पोस्ट, दशपर्णी अर्क यूनिट और ऑर्गेनिक सर्टिफिकेशन पर ७५% तक की भारी छूट।",
      en: "Up to 75% subsidy on organic inputs, vermicompost units, and organic certification."
    },
    eligibility: {
      mr: "विदर्भ व मराठवाड्यातील शेतकरी गट (FPO), सेंद्रिय शेती करणारे वैयक्तिक शेतकरी.",
      hi: "विदर्भ व मराठवाड़ा के किसान समूह (FPO) एवं व्यक्तिगत जैविक उत्पादक।",
      en: "Farmer Producer Organizations (FPOs) and registered organic farmers in Vidarbha & Marathwada."
    },
    documents: {
      mr: ["७/१२ उतारा", "शेतकरी गट नोंदणी प्रमाणपत्र", "आधार कार्ड", "बँक तपशील"],
      hi: ["७/१२ नकल", "किसान समूह पंजीयन", "आधार कार्ड", "बैंक खाता"],
      en: ["Land 7/12 extract", "FPO registration certificate", "Aadhaar Card", "Bank Details"]
    },
    link: "https://krishi.maharashtra.gov.in",
    badge: { mr: "७५% अनुदान", hi: "७५% सब्सिडी", en: "75% Subsidy" }
  },
  {
    id: "saur-krishi-pump",
    title: {
      mr: "मागेल त्याला सौर कृषी पंप योजना (कुसुम घटक-ब)",
      hi: "मागेल त्याला सोलर कृषि पंप योजना (कुसुम)",
      en: "Magel Tyala Solar Agricultural Pump Scheme (PM-KUSUM)"
    },
    subtitle: {
      mr: "दिवसा अखंड वीज व सिंचनासाठी सौर पंप",
      hi: "दिन में मुफ्त सिंचाई के लिए सोलर पंप",
      en: "Daytime Solar Powered Irrigation Pumps"
    },
    subsidy: {
      mr: "३ HP, ५ HP व ७.५ HP सौर पंपासाठी ९०% ते ९५% शासकीय अनुदान (शेतकऱ्याला फक्त ५% ते १०% भरायचे).",
      hi: "३ HP, ५ HP और ७.५ HP सोलर पंप पर ९०% से ९५% सब्सिडी (किसान को केवल ५% से १०% देना है)।",
      en: "90% to 95% government subsidy for 3 HP, 5 HP, and 7.5 HP solar pumps."
    },
    eligibility: {
      mr: "शेतात विहीर किंवा बोअरवेल असणारे आणि पारंपारिक वीज जोडणी नसलेले शेतकरी.",
      hi: "जिनके पास कुआं या बोरवेल है और पारम्परिक बिजली कनेक्शन नहीं है।",
      en: "Farmers with borewell/well irrigation sources lacking conventional grid power."
    },
    documents: {
      mr: ["७/१२ उतारा (पाण्याची नोंद असणारा)", "आधार कार्ड", "जातीचे प्रमाणपत्र (लागू असल्यास)", "पासपोर्ट फोटो"],
      hi: ["७/१२ खतौनी (पानी स्रोत दर्ज)", "आधार कार्ड", "जाति प्रमाण पत्र", "पासपोर्ट फोटो"],
      en: ["7/12 Record (with water source endorsement)", "Aadhaar Card", "Caste Certificate (if SC/ST)", "Photo"]
    },
    link: "https://www.mahadiscom.in/solar_MSEDCL/",
    badge: { mr: "९५% पर्यंत अनुदान", hi: "९५% तक छूट", en: "Up to 95% Subsidy" }
  },
  {
    id: "mahadbt-yantrikikaran",
    title: {
      mr: "महाडीबीटी कृषी यांत्रिकीकरण योजना",
      hi: "महाडीबीटी कृषि यंत्रीकरण योजना",
      en: "MahaDBT Farm Mechanization Scheme"
    },
    subtitle: {
      mr: "ट्रॅक्टर, रोटाव्हेटर व बॅटरी स्प्रे पंपावर थेट अनुदान",
      hi: "ट्रैक्टर, रोटावेटर और बैटरी स्प्रे पंप पर अनुदान",
      en: "Direct Subsidy on Sprayers, Tractors & Implements"
    },
    subsidy: {
      mr: "बॅटरी फवारणी पंपावर ₹२,५०० ते ₹३,००० अनुदान, ट्रॅक्टरवर ₹१,२५,००० पर्यंत ५०% अनुदान.",
      hi: "बैटरी स्प्रेयर पंप पर ₹३,००० तक और ट्रैक्टर/उपकरणों पर ५०% तक छूट।",
      en: "₹3,000 on battery spray pumps and up to 50% subsidy on tractors and implements."
    },
    eligibility: {
      mr: "सर्व महिला शेतकरी, अल्प व अत्यल्प भूधारक शेतकरी.",
      hi: "सभी महिला किसान एवं लघु/सीमांत किसान।",
      en: "All women farmers, small and marginal agricultural landholders."
    },
    documents: {
      mr: ["७/१२ व ८-अ", "आधार कार्ड", "कोटेशन (मान्यताप्राप्त डीलर)", "बँक पासबुक"],
      hi: ["७/१२ व ८-अ", "आधार कार्ड", "डीलर कोटेशन", "बैंक पासबुक"],
      en: ["7/12 & 8-A", "Aadhaar Card", "Authorized Dealer Quotation", "Bank Passbook"]
    },
    link: "https://mahadbt.maharashtra.gov.in",
    badge: { mr: "५०% अनुदान", hi: "५०% छूट", en: "50% Subsidy" }
  }
];
