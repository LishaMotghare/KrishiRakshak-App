import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS, MANDI_RATES } from '../data/translations';
import { TrendingUp, TrendingDown, Minus, Search, Store } from 'lucide-react';

interface MandiViewProps {
  lang: Language;
}

export const MandiView: React.FC<MandiViewProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRates = MANDI_RATES.filter((rate) => {
    const crop = rate.cropName[lang].toLowerCase();
    const market = rate.market[lang].toLowerCase();
    const query = searchTerm.toLowerCase();
    return crop.includes(query) || market.includes(query);
  });

  return (
    <div className="space-y-4 pb-6">
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-stone-200 space-y-3">
        <div>
          <h2 className="text-lg font-black text-stone-900 leading-tight flex items-center gap-1.5">
            <Store className="w-5 h-5 text-emerald-700" />
            {t.mandi.title}
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            {t.mandi.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={lang === 'mr' ? 'पीक किंवा बाजारपेठ शोधा...' : 'Search crop or mandi...'}
            className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
      </div>

      {/* Rates Cards */}
      <div className="space-y-2.5">
        {filteredRates.map((rate, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200 hover:border-emerald-400 transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-extrabold text-sm text-stone-900">
                  {rate.cropName[lang]}
                </h3>
                <span className="text-[11px] text-stone-500 font-medium">
                  📍 {rate.market[lang]}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {rate.trend === 'up' && (
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" />
                    +तेजी
                  </span>
                )}
                {rate.trend === 'down' && (
                  <span className="bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <TrendingDown className="w-3 h-3" />
                    -मंदी
                  </span>
                )}
                {rate.trend === 'stable' && (
                  <span className="bg-stone-100 text-stone-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <Minus className="w-3 h-3" />
                    स्थिर
                  </span>
                )}
              </div>
            </div>

            {/* Price breakdown */}
            <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-stone-100 text-center">
              <div className="bg-stone-50 p-2 rounded-xl">
                <span className="text-[10px] text-stone-500 block">
                  {t.mandi.minPrice}
                </span>
                <span className="text-xs font-bold text-stone-800">
                  ₹{rate.minPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="bg-emerald-50/80 p-2 rounded-xl border border-emerald-200">
                <span className="text-[10px] text-emerald-800 font-bold block">
                  {t.mandi.modalPrice}
                </span>
                <span className="text-sm font-black text-emerald-900">
                  ₹{rate.modalPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="bg-stone-50 p-2 rounded-xl">
                <span className="text-[10px] text-stone-500 block">
                  {t.mandi.maxPrice}
                </span>
                <span className="text-xs font-bold text-stone-800">
                  ₹{rate.maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
