import React from 'react';
import { Language, SchemeInfo } from '../types';
import { UI_TRANSLATIONS, SCHEMES_DATA } from '../data/translations';
import {
  FileText,
  ExternalLink,
  Volume2,
  VolumeX,
  CheckCircle2,
  HelpCircle,
  Landmark,
} from 'lucide-react';

interface SchemesViewProps {
  lang: Language;
  isSpeaking: boolean;
  onSpeak: (text: string) => void;
  onStopSpeaking: () => void;
}

export const SchemesView: React.FC<SchemesViewProps> = ({
  lang,
  isSpeaking,
  onSpeak,
  onStopSpeaking,
}) => {
  const t = UI_TRANSLATIONS[lang];

  const handleSpeakScheme = (scheme: SchemeInfo) => {
    if (isSpeaking) {
      onStopSpeaking();
      return;
    }

    const title = scheme.title[lang];
    const subsidy = scheme.subsidy[lang];
    const eligibility = scheme.eligibility[lang];
    const documents = scheme.documents[lang].join(', ');

    const schemeVoiceText =
      lang === 'mr'
        ? `योजनेचे नाव: ${title}. शासकीय लाभ व अनुदान: ${subsidy}. पात्रता: ${eligibility}. आवश्यक कागदपत्रे: ${documents}. अर्ज करण्यासाठी महाडीबीटी पोर्टलला भेट द्या.`
        : lang === 'hi'
        ? `योजना: ${title}. सरकारी लाभ: ${subsidy}. पात्रता: ${eligibility}. जरूरी दस्तावेज: ${documents}.`
        : `Scheme: ${title}. Benefit: ${subsidy}. Eligibility: ${eligibility}. Documents: ${documents}.`;

    onSpeak(schemeVoiceText);
  };

  return (
    <div className="space-y-4 pb-6">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-stone-200">
        <div className="flex items-center gap-2 mb-1">
          <Landmark className="w-5 h-5 text-emerald-800" />
          <h2 className="text-lg font-black text-stone-900 leading-tight">
            {t.schemes.title}
          </h2>
        </div>
        <p className="text-xs text-stone-500">
          {t.schemes.subtitle}
        </p>
      </div>

      {/* Schemes List */}
      <div className="space-y-3.5">
        {SCHEMES_DATA.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white rounded-3xl p-5 shadow-sm border border-stone-200 hover:border-emerald-300 transition space-y-3"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="bg-amber-400 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  {scheme.badge[lang]}
                </span>
                <h3 className="font-black text-base text-emerald-950 mt-1 leading-snug">
                  {scheme.title[lang]}
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  {scheme.subtitle[lang]}
                </p>
              </div>

              <button
                onClick={() => handleSpeakScheme(scheme)}
                className={`p-2 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                  isSpeaking
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                }`}
                title={t.schemes.guidanceBtn}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-700" />}
              </button>
            </div>

            {/* Subsidy Highlight */}
            <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-200 text-xs">
              <span className="font-extrabold text-emerald-950 block mb-0.5">
                💰 {t.schemes.subsidyLabel}
              </span>
              <p className="text-emerald-900 font-semibold leading-relaxed">
                {scheme.subsidy[lang]}
              </p>
            </div>

            {/* Eligibility */}
            <div className="text-xs space-y-1">
              <span className="font-bold text-stone-700 block">
                ✅ {t.schemes.eligibilityLabel}
              </span>
              <p className="text-stone-600 leading-relaxed pl-1">
                {scheme.eligibility[lang]}
              </p>
            </div>

            {/* Required Documents */}
            <div className="text-xs space-y-1.5 pt-1 border-t border-stone-100">
              <span className="font-bold text-stone-700 block">
                📄 {t.schemes.documentsLabel}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {scheme.documents[lang].map((doc, idx) => (
                  <span
                    key={idx}
                    className="bg-stone-100 text-stone-700 text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-stone-200"
                  >
                    • {doc}
                  </span>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <div className="pt-2">
              <a
                href={scheme.link}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
              >
                <span>{t.schemes.applyBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
