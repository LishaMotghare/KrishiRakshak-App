import React, { useState } from 'react';
import { Language, WeatherData } from '../types';
import { UI_TRANSLATIONS, WEATHER_STATIONS } from '../data/translations';
import {
  CloudSun,
  CloudRain,
  Sun,
  Wind,
  Droplets,
  AlertOctagon,
  CheckCircle2,
  AlertTriangle,
  Volume2,
  VolumeX,
  MapPin,
} from 'lucide-react';

interface WeatherViewProps {
  lang: Language;
  isSpeaking: boolean;
  onSpeak: (text: string) => void;
  onStopSpeaking: () => void;
}

export const WeatherView: React.FC<WeatherViewProps> = ({
  lang,
  isSpeaking,
  onSpeak,
  onStopSpeaking,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const [selectedStationKey, setSelectedStationKey] = useState<string>('junnar');

  const currentStation =
    WEATHER_STATIONS.find((w) => w.cityKey === selectedStationKey) || WEATHER_STATIONS[0];

  const handleSpeakWeather = () => {
    if (isSpeaking) {
      onStopSpeaking();
      return;
    }

    const city = currentStation.cityName[lang];
    const statusText =
      currentStation.sprayStatus === 'safe'
        ? t.weather.spraySafe
        : currentStation.sprayStatus === 'caution'
        ? t.weather.sprayCaution
        : t.weather.sprayUnsafe;

    const weatherText =
      lang === 'mr'
        ? `${city} येथील हवामान. तापमान ${currentStation.temp} अंश, आर्द्रता ${currentStation.humidity} टक्के, वाऱ्याचा वेग ${currentStation.windSpeed} किलोमीटर प्रति तास. पावसाची शक्यता ${currentStation.rainChance} टक्के. फवारणी सल्ला: ${statusText}. ${currentStation.sprayAdvice[lang]}`
        : lang === 'hi'
        ? `${city} का मौसम। तापमान ${currentStation.temp} डिग्री, नमी ${currentStation.humidity} प्रतिशत, हवा की गति ${currentStation.windSpeed} किमी/घंटा। बारिश की संभावना ${currentStation.rainChance} प्रतिशत। छिड़काव सलाह: ${statusText}. ${currentStation.sprayAdvice[lang]}`
        : `Weather for ${city}. Temperature ${currentStation.temp} degrees, humidity ${currentStation.humidity} percent, wind speed ${currentStation.windSpeed} km/h, rain chance ${currentStation.rainChance} percent. Spray advice: ${statusText}. ${currentStation.sprayAdvice[lang]}`;

    onSpeak(weatherText);
  };

  const getSprayBadge = (status: 'safe' | 'caution' | 'unsafe') => {
    switch (status) {
      case 'safe':
        return {
          title: t.weather.spraySafe,
          icon: CheckCircle2,
          bg: 'bg-emerald-50 border-emerald-300 text-emerald-900',
          iconColor: 'text-emerald-600',
          badge: 'bg-emerald-600 text-white',
        };
      case 'caution':
        return {
          title: t.weather.sprayCaution,
          icon: AlertTriangle,
          bg: 'bg-amber-50 border-amber-300 text-amber-950',
          iconColor: 'text-amber-600',
          badge: 'bg-amber-500 text-stone-950 font-bold',
        };
      case 'unsafe':
        return {
          title: t.weather.sprayUnsafe,
          icon: AlertOctagon,
          bg: 'bg-rose-50 border-rose-300 text-rose-950',
          iconColor: 'text-rose-600',
          badge: 'bg-rose-600 text-white',
        };
    }
  };

  const sprayInfo = getSprayBadge(currentStation.sprayStatus);
  const SprayIcon = sprayInfo.icon;

  return (
    <div className="space-y-4 pb-6">
      {/* Title */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-stone-200">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-black text-stone-900 leading-tight">
              {t.weather.title}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              {t.weather.subtitle}
            </p>
          </div>
          <button
            onClick={handleSpeakWeather}
            className={`p-2 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
              isSpeaking
                ? 'bg-rose-500 text-white animate-pulse'
                : 'bg-amber-400 hover:bg-amber-300 text-stone-950 shadow-xs'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="text-[10px] hidden sm:inline">{lang === 'mr' ? 'ऐका' : 'Listen'}</span>
          </button>
        </div>

        {/* Location selector horizontal scroll pills */}
        <div className="mt-3.5 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {WEATHER_STATIONS.map((station) => (
            <button
              key={station.cityKey}
              onClick={() => {
                setSelectedStationKey(station.cityKey);
                onStopSpeaking();
              }}
              className={`px-3 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition flex items-center gap-1.5 border ${
                selectedStationKey === station.cityKey
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{station.cityName[lang]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Station Weather Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-stone-200 p-5 space-y-4">
        {/* City and current condition */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <div>
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
              {currentStation.region[lang]}
            </span>
            <h3 className="text-2xl font-black text-stone-900 mt-0.5">
              {currentStation.cityName[lang]}
            </h3>
            <p className="text-xs text-stone-500">
              {lang === 'mr' ? 'स्थानिक हवामान अंदाज केंद्र' : 'Regional Agrometeorology Center'}
            </p>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-sky-100 flex items-center justify-center text-4xl shadow-inner">
            {currentStation.condition === 'rainy' ? (
              <CloudRain className="w-10 h-10 text-sky-600 animate-bounce" />
            ) : currentStation.condition === 'partlyCloudy' ? (
              <CloudSun className="w-10 h-10 text-amber-500" />
            ) : (
              <Sun className="w-10 h-10 text-amber-500 animate-spin" />
            )}
          </div>
        </div>

        {/* 4 Key Met Gauges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 text-center">
            <span className="text-[10px] font-bold text-stone-500 block uppercase">
              {t.weather.temp}
            </span>
            <div className="text-2xl font-black text-stone-900 mt-1">
              {currentStation.temp}°<span className="text-sm font-semibold text-stone-500">C</span>
            </div>
          </div>

          <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 text-center">
            <span className="text-[10px] font-bold text-stone-500 block uppercase">
              {t.weather.humidity}
            </span>
            <div className="text-2xl font-black text-sky-700 mt-1">
              {currentStation.humidity}%
            </div>
          </div>

          <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 text-center">
            <span className="text-[10px] font-bold text-stone-500 block uppercase">
              {t.weather.wind}
            </span>
            <div className="text-2xl font-black text-teal-700 mt-1">
              {currentStation.windSpeed} <span className="text-xs font-normal text-stone-500">km/h</span>
            </div>
          </div>

          <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 text-center">
            <span className="text-[10px] font-bold text-stone-500 block uppercase">
              {t.weather.rainProb}
            </span>
            <div className="text-2xl font-black text-indigo-700 mt-1">
              {currentStation.rainChance}%
            </div>
          </div>
        </div>

        {/* Dynamic Spray Window Advisory Banner */}
        <div className={`p-4 rounded-2xl border-2 ${sprayInfo.bg} space-y-2`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SprayIcon className={`w-6 h-6 ${sprayInfo.iconColor}`} />
              <h4 className="font-black text-sm tracking-tight">
                {sprayInfo.title}
              </h4>
            </div>
            <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold shadow-xs ${sprayInfo.badge}`}>
              {currentStation.sprayStatus === 'safe'
                ? (lang === 'mr' ? 'अनुकूल' : 'Safe')
                : currentStation.sprayStatus === 'caution'
                ? (lang === 'mr' ? 'सावध' : 'Caution')
                : (lang === 'mr' ? 'धोकादायक' : 'Unsafe')}
            </span>
          </div>

          <p className="text-xs leading-relaxed font-semibold">
            {currentStation.sprayAdvice[lang]}
          </p>
        </div>
      </div>
    </div>
  );
};
