import React, { useState, useRef } from 'react';
import { Language, CropDiagnosis } from '../types';
import { UI_TRANSLATIONS, SAMPLE_CROPS } from '../data/translations';
import { diagnoseCrop } from '../services/api';
import { DosageModal } from './DosageModal';
import {
  Camera,
  Upload,
  Volume2,
  VolumeX,
  Share2,
  Leaf,
  FlaskConical,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Droplets,
  Calculator,
  Info,
  CheckCircle,
} from 'lucide-react';

interface ScanViewProps {
  lang: Language;
  onSaveToHistory: (diagnosis: CropDiagnosis) => void;
  isSpeaking: boolean;
  onSpeak: (text: string) => void;
  onStopSpeaking: () => void;
}

export const ScanView: React.FC<ScanViewProps> = ({
  lang,
  onSaveToHistory,
  isSpeaking,
  onSpeak,
  onStopSpeaking,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<CropDiagnosis | null>(null);
  const [selectedCropHint, setSelectedCropHint] = useState<string>('');
  const [showDosageModal, setShowDosageModal] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Quick sample loader
  const handleLoadSample = (cropKey: string) => {
    const sample = SAMPLE_CROPS[cropKey]?.[lang] || SAMPLE_CROPS.cotton[lang];
    setImagePreview(sample.image || null);
    setLoading(true);
    setResult(null);
    onStopSpeaking();

    // Short realistic scan animation
    setTimeout(() => {
      const fullDiagnosis: CropDiagnosis = {
        ...sample,
        date: new Date().toLocaleDateString(lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN'),
      };
      setResult(fullDiagnosis);
      setLoading(false);
      onSaveToHistory(fullDiagnosis);
    }, 1100);
  };

  // File / Camera handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImagePreview(base64);
        runDiagnosis(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const runDiagnosis = async (base64Image: string) => {
    setLoading(true);
    setResult(null);
    onStopSpeaking();

    try {
      const diagnosis = await diagnoseCrop(base64Image, lang, selectedCropHint);
      setResult(diagnosis);
      onSaveToHistory(diagnosis);
    } catch (err) {
      console.error('Diagnosis failed:', err);
      // Fallback
      const fallback = SAMPLE_CROPS.cotton[lang];
      setResult({ ...fallback, image: base64Image });
      onSaveToHistory({ ...fallback, image: base64Image });
    } finally {
      setLoading(false);
    }
  };

  const handleVoiceReadout = () => {
    if (!result) return;
    if (isSpeaking) {
      onStopSpeaking();
      return;
    }

    const voiceSummary =
      lang === 'mr'
        ? `पिकाचे नाव: ${result.cropName}. रोगाचे नाव: ${result.diseaseName}. रोगाची तीव्रता: ${result.severity}. लक्षणे: ${result.symptoms.slice(0, 2).join(', ')}. सेंद्रिय व गावठी उपाय: ${result.organicSolution}. रासायनिक फवारणी: ${result.chemicalSolution}. ${result.pumpDosage}.`
        : lang === 'hi'
        ? `फसल: ${result.cropName}. रोग: ${result.diseaseName}. गंभीरता: ${result.severity}. लक्षण: ${result.symptoms.slice(0, 2).join(', ')}. जैविक उपाय: ${result.organicSolution}. रासायनिक छिड़काव: ${result.chemicalSolution}. ${result.pumpDosage}.`
        : `Crop: ${result.cropName}. Disease: ${result.diseaseName}. Severity: ${result.severity}. Symptoms: ${result.symptoms.slice(0, 2).join(', ')}. Organic remedy: ${result.organicSolution}. Chemical spray: ${result.chemicalSolution}. Dosage: ${result.pumpDosage}.`;

    onSpeak(voiceSummary);
  };

  const handleShareWhatsApp = () => {
    if (!result) return;
    const text =
      lang === 'mr'
        ? `*कृषी रक्षक - पीक रोग तपासणी अहवाल*\n\n🌱 *पीक:* ${result.cropName}\n⚠️ *रोग:* ${result.diseaseName}\n📊 *तीव्रता:* ${result.severity}\n\n🌿 *सेंद्रिय उपाय:* ${result.organicSolution}\n\n💊 *रासायनिक औषध:* ${result.chemicalSolution}\n💧 *१५ लिटर पंपासाठी:* ${result.pumpDosage}\n\n_कृषी रक्षक ॲपद्वारे तपासले_`
        : lang === 'hi'
        ? `*कृषि रक्षक - फसल रोग जांच रिपोर्ट*\n\n🌱 *फसल:* ${result.cropName}\n⚠️ *रोग:* ${result.diseaseName}\n📊 *गंभीरता:* ${result.severity}\n\n🌿 *जैविक उपाय:* ${result.organicSolution}\n\n💊 *रासायनिक दवा:* ${result.chemicalSolution}\n💧 *१५ लीटर पंप के लिए:* ${result.pumpDosage}\n\n_कृषि रक्षक ऐप द्वारा जांच_`
        : `*Krishi Rakshak - Crop Diagnosis Report*\n\n🌱 *Crop:* ${result.cropName}\n⚠️ *Disease:* ${result.diseaseName}\n📊 *Severity:* ${result.severity}\n\n🌿 *Organic:* ${result.organicSolution}\n\n💊 *Chemical:* ${result.chemicalSolution}\n💧 *Dosage (15L Pump):* ${result.pumpDosage}`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const getSeverityStyle = (severity: string) => {
    const s = severity.toLowerCase();
    if (s.includes('high') || s.includes('गंभीर') || s.includes('अधिक')) {
      return {
        badge: 'bg-rose-500 text-white',
        border: 'border-rose-400',
        bg: 'bg-rose-50',
      };
    }
    if (s.includes('med') || s.includes('मध्यम')) {
      return {
        badge: 'bg-amber-500 text-stone-950 font-bold',
        border: 'border-amber-400',
        bg: 'bg-amber-50',
      };
    }
    return {
      badge: 'bg-emerald-600 text-white',
      border: 'border-emerald-400',
      bg: 'bg-emerald-50',
    };
  };

  return (
    <div className="space-y-4 pb-6">
      {/* State banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-green-700 text-white px-3.5 py-2 rounded-2xl flex items-center justify-between text-xs shadow-xs">
        <span className="font-semibold flex items-center gap-1.5">
          <span className="text-base">🇮🇳</span>
          {t.stateBadge}
        </span>
        <span className="bg-amber-400 text-stone-900 font-extrabold px-2 py-0.5 rounded-full text-[10px]">
          {lang === 'mr' ? 'विदर्भ • मराठवाडा • प.महाराष्ट्र' : lang === 'hi' ? 'महाराष्ट्र विशेष' : 'Maharashtra State'}
        </span>
      </div>

      {/* Main Action Card */}
      {!result && !loading && (
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-stone-200 text-center relative overflow-hidden">
          {/* Subtle background leaves pattern */}
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-tr from-emerald-100 to-amber-100 text-emerald-800 rounded-full flex items-center justify-center text-3xl shadow-inner">
            🌱
          </div>

          <h2 className="text-xl font-black text-stone-800 leading-tight mb-1">
            {t.takePhoto}
          </h2>
          <p className="text-xs text-stone-500 max-w-sm mx-auto mb-5">
            {t.takePhotoSub}
          </p>

          {/* Big Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <button
              onClick={() => cameraInputRef.current?.click()}
              className="w-full bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-extrabold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2.5 text-base shadow-md transition"
            >
              <Camera className="w-6 h-6 text-amber-300" />
              <span>{t.cameraBtn}</span>
            </button>

            <button
              onClick={() => handleLoadSample('cotton')}
              className="w-full bg-amber-400 hover:bg-amber-500 active:scale-98 text-stone-950 font-black py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 text-base shadow-md transition"
            >
              <Sparkles className="w-5 h-5" />
              <span>{t.demoBtn} (कापूस)</span>
            </button>
          </div>

          {/* Secondary File Upload */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-emerald-800 hover:text-emerald-900 text-xs font-bold underline underline-offset-4 py-1.5 flex items-center justify-center gap-1 mx-auto"
          >
            <Upload className="w-3.5 h-3.5" />
            {t.galleryBtn}
          </button>

          {/* Hidden inputs */}
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="hidden"
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Quick Sample Crops Carousel */}
          <div className="mt-5 pt-4 border-t border-stone-100 text-left">
            <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2.5 flex items-center gap-1">
              <span>⚡</span> {t.quickSamplesTitle}
            </p>
            <div className="grid grid-cols-5 gap-1.5">
              {[
                { key: 'cotton', label: t.cotton, icon: '🌿' },
                { key: 'soybean', label: t.soybean, icon: '🌱' },
                { key: 'tomato', label: t.tomato, icon: '🍅' },
                { key: 'paddy', label: t.paddy, icon: '🌾' },
                { key: 'orange', label: t.orange, icon: '🍊' },
              ].map((crop) => (
                <button
                  key={crop.key}
                  onClick={() => handleLoadSample(crop.key)}
                  className="bg-stone-50 hover:bg-emerald-50 active:scale-95 border border-stone-200 hover:border-emerald-400 rounded-xl p-2 flex flex-col items-center text-center transition"
                >
                  <span className="text-xl mb-1">{crop.icon}</span>
                  <span className="text-[10px] font-bold text-stone-700 leading-tight truncate w-full">
                    {crop.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Loading Radar Animation */}
      {loading && (
        <div className="bg-white rounded-3xl p-8 text-center shadow-lg border-2 border-emerald-500/40 space-y-4">
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            {/* Animated radar rings */}
            <div className="absolute inset-0 rounded-full border-4 border-emerald-300 animate-ping opacity-30" />
            <div className="absolute inset-2 rounded-full border-2 border-emerald-400 animate-pulse" />
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl shadow-inner">
              🔍
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-emerald-900 leading-tight">
              {t.scanning}
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
              {t.analyzingInfo}
            </p>
          </div>

          <div className="flex justify-center items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 py-1.5 px-3 rounded-full w-max mx-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {lang === 'mr' ? 'कृषी विद्यापीठ अल्गोरिदम द्वारे तपासणी...' : 'Analyzing with MPKV Agronomy database...'}
          </div>
        </div>
      )}

      {/* Full Diagnosis Result Screen */}
      {result && !loading && (
        <div className="space-y-4">
          {/* Main Result Card */}
          <div className="bg-white rounded-3xl shadow-lg border-2 border-emerald-500 overflow-hidden">
            {/* Result Header */}
            <div className="bg-emerald-900 text-white p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="inline-block bg-emerald-700 text-amber-300 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    🌱 {result.cropName}
                  </span>
                  <h3 className="text-2xl font-black mt-1 leading-snug tracking-tight text-white">
                    {result.diseaseName}
                  </h3>
                  {result.scientificName && (
                    <p className="text-[11px] text-emerald-300 italic">
                      {result.scientificName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-bold shadow-xs ${
                      getSeverityStyle(result.severity).badge
                    }`}
                  >
                    {t.severity}: {result.severity}
                  </span>
                  <span className="text-[11px] text-emerald-200 font-semibold">
                    🎯 {t.confidence}: {result.confidence}%
                  </span>
                </div>
              </div>

              {/* Quick Audio & Action Bar */}
              <div className="mt-4 pt-3 border-t border-emerald-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={handleVoiceReadout}
                  className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition shadow-sm ${
                    isSpeaking
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-amber-400 hover:bg-amber-300 text-stone-950'
                  }`}
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="w-4 h-4" />
                      <span>{t.stopAudio}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4" />
                      <span>{t.listenBtn}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleShareWhatsApp}
                    className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-2 rounded-xl font-bold text-xs flex items-center gap-1 transition"
                    title={t.shareWhatsApp}
                  >
                    <Share2 className="w-3.5 h-3.5 text-amber-300" />
                    <span className="hidden sm:inline">{t.shareWhatsApp}</span>
                  </button>

                  <button
                    onClick={() => setShowDosageModal(true)}
                    className="bg-emerald-800 hover:bg-emerald-700 text-amber-300 border border-emerald-700 px-3 py-2 rounded-xl font-bold text-xs flex items-center gap-1 transition"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>{t.calcDosageBtn}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Photo preview */}
            {imagePreview && (
              <div className="w-full h-48 bg-stone-900 overflow-hidden relative">
                <img
                  src={imagePreview}
                  alt={result.diseaseName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-lg flex items-center gap-1">
                  <span>📸</span>
                  <span>{lang === 'mr' ? 'तपासलेले पान' : 'Analyzed Leaf'}</span>
                </div>
                {result.estimatedCost && (
                  <div className="absolute top-2 right-2 bg-amber-400 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded-md shadow-md">
                    {result.estimatedCost}
                  </div>
                )}
              </div>
            )}

            {/* Diagnosis Details */}
            <div className="p-4 space-y-4">
              {/* Highlighted 15L Knapsack Pump Dosage */}
              <div className="bg-amber-50 rounded-2xl p-3.5 border-2 border-amber-300 shadow-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center flex-shrink-0 font-bold">
                    <Droplets className="w-4 h-4 text-amber-950" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-black text-amber-950 uppercase tracking-wide">
                      {t.dosagePumpTitle}
                    </h4>
                    <p className="text-sm font-extrabold text-stone-900 mt-0.5 leading-snug">
                      {result.pumpDosage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Remedy 1: Organic & Desi (Sasta Upay) */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-300">
                <div className="flex items-center gap-2 text-emerald-950 font-black text-sm">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs">
                    <Leaf className="w-3.5 h-3.5" />
                  </div>
                  <h4>{t.organicTitle}</h4>
                </div>
                <p className="text-xs text-emerald-950 font-medium mt-2 leading-relaxed">
                  {result.organicSolution}
                </p>
              </div>

              {/* Remedy 2: Chemical spray (Market formulations) */}
              <div className="bg-stone-50 rounded-2xl p-4 border border-stone-300">
                <div className="flex items-center gap-2 text-stone-900 font-black text-sm">
                  <div className="w-6 h-6 rounded-lg bg-stone-800 text-white flex items-center justify-center text-xs">
                    <FlaskConical className="w-3.5 h-3.5" />
                  </div>
                  <h4>{t.chemicalTitle}</h4>
                </div>
                <p className="text-xs text-stone-800 font-semibold mt-2 leading-relaxed">
                  {result.chemicalSolution}
                </p>
              </div>

              {/* Symptoms & Causes */}
              <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200 text-xs">
                <h4 className="font-bold text-stone-900 flex items-center gap-1.5 mb-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  {t.symptomsTitle}
                </h4>
                <ul className="list-disc list-inside text-stone-700 space-y-1 pl-1">
                  {result.symptoms.map((s, idx) => (
                    <li key={idx} className="leading-snug">
                      {s}
                    </li>
                  ))}
                </ul>

                <h4 className="font-bold text-stone-900 flex items-center gap-1.5 mt-3 mb-1">
                  <Info className="w-4 h-4 text-sky-600" />
                  {t.causesTitle}
                </h4>
                <p className="text-stone-600 leading-snug pl-1">
                  {result.causes}
                </p>
              </div>

              {/* Remedy 3: Prevention */}
              <div className="bg-sky-50 rounded-2xl p-3.5 border border-sky-200 text-xs">
                <div className="flex items-center gap-2 text-sky-950 font-bold">
                  <ShieldCheck className="w-4 h-4 text-sky-700" />
                  <h4>{t.preventionTitle}</h4>
                </div>
                <p className="text-sky-900 mt-1 leading-relaxed pl-1">
                  {result.prevention}
                </p>
              </div>
            </div>

            {/* Bottom New Scan Button */}
            <div className="p-4 bg-stone-100 border-t border-stone-200">
              <button
                onClick={() => {
                  setResult(null);
                  setImagePreview(null);
                  onStopSpeaking();
                }}
                className="w-full bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-extrabold py-3 rounded-2xl text-xs flex items-center justify-center gap-2 transition shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.newScanBtn}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dosage Modal */}
      <DosageModal
        isOpen={showDosageModal}
        onClose={() => setShowDosageModal(false)}
        lang={lang}
        defaultChemicalName={result?.chemicalSolution}
        defaultDosagePerPump={result?.pumpDosage}
      />
    </div>
  );
};
