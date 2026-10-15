import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Volume2, VolumeX, ShieldCheck, Sprout } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  isSpeaking: boolean;
  onStopSpeaking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  isSpeaking,
  onStopSpeaking,
}) => {
  const t = UI_TRANSLATIONS[lang];

  return (
    <header className="sticky top-0 z-40 bg-emerald-900 text-white shadow-md border-b border-emerald-800">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-emerald-500 p-0.5 shadow-md flex items-center justify-center text-stone-900">
              <div className="w-full h-full bg-emerald-900 rounded-[14px] flex items-center justify-center">
                <Sprout className="w-6 h-6 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg font-black tracking-tight leading-none text-white">
                  {t.appName}
                </h1>
                <span className="bg-amber-400 text-stone-950 text-[10px] font-black px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-xs">
                  <ShieldCheck className="w-3 h-3" />
                  AI
                </span>
              </div>
              <p className="text-[11px] text-emerald-200 font-medium truncate mt-0.5 max-w-[190px] sm:max-w-xs">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Right Action Bar: Voice Indicator & Language Selector */}
          <div className="flex items-center gap-2">
            {isSpeaking && (
              <button
                onClick={onStopSpeaking}
                className="bg-rose-500 hover:bg-rose-600 text-white text-xs px-2.5 py-1.5 rounded-xl font-bold flex items-center gap-1 animate-pulse shadow-sm"
                title={t.stopAudio}
              >
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline text-[11px]">{t.stopAudio}</span>
              </button>
            )}

            {/* Language Switcher: 3 buttons */}
            <div className="bg-emerald-950/80 p-1 rounded-xl flex items-center border border-emerald-700/60 shadow-inner">
              <button
                onClick={() => onLanguageChange('mr')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'mr'
                    ? 'bg-amber-400 text-stone-950 shadow-sm scale-102'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                मराठी
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'hi'
                    ? 'bg-amber-400 text-stone-950 shadow-sm scale-102'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-amber-400 text-stone-950 shadow-sm scale-102'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
