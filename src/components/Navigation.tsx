import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  Camera,
  MessageSquare,
  CloudSun,
  TrendingUp,
  FileText,
  Clock,
} from 'lucide-react';

export type TabType = 'scan' | 'chat' | 'weather' | 'mandi' | 'schemes' | 'history';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  lang: Language;
  historyCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  lang,
  historyCount,
}) => {
  const t = UI_TRANSLATIONS[lang];

  const navItems = [
    { id: 'scan' as TabType, label: t.tabs.scan, icon: Camera },
    { id: 'chat' as TabType, label: t.tabs.chat, icon: MessageSquare },
    { id: 'weather' as TabType, label: t.tabs.weather, icon: CloudSun },
    { id: 'mandi' as TabType, label: t.tabs.mandi, icon: TrendingUp },
    { id: 'schemes' as TabType, label: t.tabs.schemes, icon: FileText },
    { id: 'history' as TabType, label: t.tabs.history, icon: Clock, badge: historyCount },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-1 py-1.5 safe-area-bottom">
      <div className="max-w-2xl mx-auto grid grid-cols-6 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-0.5 rounded-xl transition-all relative ${
                isActive
                  ? 'text-emerald-800 font-extrabold bg-emerald-100/70 scale-102'
                  : 'text-stone-600 hover:text-emerald-700 hover:bg-stone-50 font-medium'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110 text-emerald-800 stroke-[2.5]' : 'stroke-2'
                  }`}
                />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1 -right-2 bg-amber-500 text-stone-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 leading-tight tracking-tight truncate max-w-full">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
