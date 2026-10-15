import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { X, Droplets, Gauge, Calculator, CheckCircle2, AlertCircle } from 'lucide-react';

interface DosageModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  defaultChemicalName?: string;
  defaultDosagePerPump?: string;
}

export const DosageModal: React.FC<DosageModalProps> = ({
  isOpen,
  onClose,
  lang,
  defaultChemicalName,
  defaultDosagePerPump,
}) => {
  const [acres, setAcres] = useState<number>(1);
  const [sprayType, setSprayType] = useState<'standard' | 'dense' | 'orchard'>('standard');

  if (!isOpen) return null;
  const t = UI_TRANSLATIONS[lang];

  // Calculations:
  // Standard field crops (Cotton, Soybean, Paddy): ~150 L water per acre = 10 pumps of 15L
  // Dense/Vegetable crops (Tomato, Chilli): ~200 L water per acre = 13.3 pumps of 15L
  // Fruit Orchard (Orange/Citrus): ~300 L water per acre = 20 pumps of 15L
  const litersPerAcre = sprayType === 'standard' ? 150 : sprayType === 'dense' ? 200 : 300;
  const totalWater = Math.round(acres * litersPerAcre);
  const totalPumps = Math.round((totalWater / 15) * 10) / 10;
  const stickerNeededMl = Math.round(totalPumps * 10); // 10ml per pump

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight">{t.calculator.title}</h3>
              <p className="text-[11px] text-emerald-200">
                {lang === 'mr' ? 'अचूक पाण्याचे व औषधाचे प्रमाण' : lang === 'hi' ? 'सटीक पानी और दवा की मात्रा' : 'Accurate pump & chemical calculator'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-emerald-900/80 hover:bg-emerald-950 flex items-center justify-center text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Farm area selector */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              {t.calculator.farmSize}
            </label>
            <div className="grid grid-cols-4 gap-2 mb-2">
              {[0.5, 1, 2, 5].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAcres(val)}
                  className={`py-2 rounded-xl text-xs font-bold border transition ${
                    acres === val
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  {val} {t.calculator.acre}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-stone-100 p-2.5 rounded-2xl border border-stone-200">
              <input
                type="range"
                min="0.25"
                max="10"
                step="0.25"
                value={acres}
                onChange={(e) => setAcres(parseFloat(e.target.value))}
                className="flex-1 accent-emerald-600 cursor-pointer"
              />
              <div className="bg-white px-3 py-1 rounded-xl border border-stone-300 font-black text-sm text-emerald-800 min-w-16 text-center">
                {acres} {t.calculator.acre}
              </div>
            </div>
          </div>

          {/* Crop Type Density */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              {lang === 'mr' ? 'पिकाचा प्रकार:' : lang === 'hi' ? 'फसल का प्रकार:' : 'Crop Canopy Type:'}
            </label>
            <div className="grid grid-cols-3 gap-2 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setSprayType('standard')}
                className={`p-2 rounded-xl border text-center ${
                  sprayType === 'standard'
                    ? 'bg-emerald-100/80 border-emerald-600 text-emerald-900 font-bold'
                    : 'bg-stone-50 border-stone-200 text-stone-600'
                }`}
              >
                {lang === 'mr' ? 'कापूस / सोयाबीन' : lang === 'hi' ? 'कपास / सोयाबीन' : 'Cotton / Soybean'}
              </button>
              <button
                type="button"
                onClick={() => setSprayType('dense')}
                className={`p-2 rounded-xl border text-center ${
                  sprayType === 'dense'
                    ? 'bg-emerald-100/80 border-emerald-600 text-emerald-900 font-bold'
                    : 'bg-stone-50 border-stone-200 text-stone-600'
                }`}
              >
                {lang === 'mr' ? 'टोमॅटो / भाजीपाला' : lang === 'hi' ? 'टमाटर / सब्जी' : 'Tomato / Veggies'}
              </button>
              <button
                type="button"
                onClick={() => setSprayType('orchard')}
                className={`p-2 rounded-xl border text-center ${
                  sprayType === 'orchard'
                    ? 'bg-emerald-100/80 border-emerald-600 text-emerald-900 font-bold'
                    : 'bg-stone-50 border-stone-200 text-stone-600'
                }`}
              >
                {lang === 'mr' ? 'संत्रा / फळबाग' : lang === 'hi' ? 'संतरा / बागवानी' : 'Citrus Orchard'}
              </button>
            </div>
          </div>

          {/* Calculation Summary Box */}
          <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-4 border border-amber-200/80 space-y-3">
            <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
              <span className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-sky-600" />
                {t.calculator.waterRequired}
              </span>
              <span className="text-base font-black text-emerald-900">
                {totalWater} {t.calculator.liters}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
              <span className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-emerald-600" />
                {t.calculator.pumpsRequired}
              </span>
              <div className="text-right">
                <span className="text-xl font-black text-emerald-700">
                  {totalPumps}
                </span>
                <span className="text-xs text-stone-500 ml-1">{t.calculator.pumps}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                {lang === 'mr' ? 'आवश्यक सिलिकॉन स्टिकर:' : lang === 'hi' ? 'सिलिकॉन स्टीकर:' : 'Silicone Sticker Needed:'}
              </span>
              <span className="text-sm font-bold text-amber-900">
                {stickerNeededMl} ml
              </span>
            </div>

            {defaultDosagePerPump && (
              <div className="bg-white/80 p-2.5 rounded-xl border border-amber-300 text-xs">
                <span className="font-bold text-stone-800 block">
                  {defaultChemicalName || (lang === 'mr' ? 'सल्ला दिलेले औषध:' : 'Recommended Medicine:')}
                </span>
                <span className="text-emerald-800 font-semibold">{defaultDosagePerPump}</span>
              </div>
            )}
          </div>

          {/* Practical Rural Tips */}
          <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 text-[11px] text-stone-600 space-y-1">
            <div className="font-bold text-stone-800 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-emerald-700" />
              {lang === 'mr' ? 'शेतकऱ्यांसाठी फवारणीच्या ५ सुवर्ण नियमावली:' : lang === 'hi' ? 'छिड़काव के ५ महत्वपूर्ण नियम:' : 'Key Spraying Rules:'}
            </div>
            <p>• {lang === 'mr' ? 'फवारणी नेहमी सकाळी ८ ते ११ किंवा दुपारी ४ नंतर करा.' : lang === 'hi' ? 'छिड़काव सुबह ८ से ११ या शाम ४ के बाद करें।' : 'Spray in early morning (8-11 AM) or after 4 PM.'}</p>
            <p>• {lang === 'mr' ? 'वाऱ्याच्या दिशेने फवारा मारा, तोंडावर रुमाल किंवा मास्क वापरा.' : lang === 'hi' ? 'हवा की दिशा में छिड़काव करें, मास्क लगाएं।' : 'Always spray in wind direction; wear protective cloth.'}</p>
            <p>• {lang === 'mr' ? 'सिलिकॉन स्टिकरचा वापर अवश्य करा म्हणजे पाऊस आल्यास औषध धुतले जाणार नाही.' : lang === 'hi' ? 'स्टीकर अवश्य मिलाएं।' : 'Always mix silicone spreader/sticker.'}</p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-2xl text-xs transition shadow-md"
          >
            {lang === 'mr' ? 'समजले (बंद करा)' : lang === 'hi' ? 'ठीक है (बंद करें)' : 'Got it (Close)'}
          </button>
        </div>
      </div>
    </div>
  );
};
