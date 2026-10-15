import React from 'react';
import { Language, CropDiagnosis } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Clock, Trash2, ChevronRight, Eye, Sprout } from 'lucide-react';

interface HistoryViewProps {
  history: CropDiagnosis[];
  lang: Language;
  onSelectDiagnosis: (diagnosis: CropDiagnosis) => void;
  onClearHistory: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  history,
  lang,
  onSelectDiagnosis,
  onClearHistory,
}) => {
  const t = UI_TRANSLATIONS[lang];

  const getSeverityBadge = (severity: string) => {
    const s = severity.toLowerCase();
    if (s.includes('high') || s.includes('गंभीर') || s.includes('अधिक')) {
      return 'bg-rose-500 text-white';
    }
    if (s.includes('med') || s.includes('मध्यम')) {
      return 'bg-amber-500 text-stone-950 font-bold';
    }
    return 'bg-emerald-600 text-white';
  };

  return (
    <div className="space-y-4 pb-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-stone-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-emerald-800" />
          <h2 className="text-lg font-black text-stone-900 leading-tight">
            {t.history.title}
          </h2>
        </div>

        {history.length > 0 && (
          <button
            onClick={onClearHistory}
            className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 p-1.5 rounded-lg hover:bg-rose-50 transition"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.history.clearBtn}</span>
          </button>
        )}
      </div>

      {/* History Items or Empty State */}
      {history.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 text-center border-2 border-dashed border-stone-200 space-y-3">
          <div className="w-14 h-14 mx-auto rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
            <Sprout className="w-8 h-8" />
          </div>
          <p className="text-xs text-stone-500 max-w-xs mx-auto">
            {t.history.empty}
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {history.map((item, index) => (
            <div
              key={item.id || index}
              onClick={() => onSelectDiagnosis(item)}
              className="bg-white rounded-2xl p-3.5 shadow-sm border border-stone-200 hover:border-emerald-400 transition cursor-pointer flex items-center gap-3 group"
            >
              {/* Thumbnail */}
              <div className="w-16 h-16 rounded-xl bg-stone-100 overflow-hidden flex-shrink-0 relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.cropName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-2xl">
                    🌱
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] text-stone-400 font-semibold">
                    {item.date || 'आज'}
                  </span>
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-full font-black ${getSeverityBadge(
                      item.severity
                    )}`}
                  >
                    {item.severity}
                  </span>
                </div>

                <h3 className="font-extrabold text-stone-900 text-sm truncate mt-0.5 group-hover:text-emerald-800 transition">
                  {item.diseaseName}
                </h3>
                <p className="text-xs text-stone-500 truncate">
                  🌱 {item.cropName}
                </p>
              </div>

              <div className="text-stone-300 group-hover:text-emerald-700 transition">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
