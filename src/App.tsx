import React, { useState, useEffect, useRef } from 'react';
import { Language, CropDiagnosis } from './types';
import { Header } from './components/Header';
import { Navigation, TabType } from './components/Navigation';
import { ScanView } from './components/ScanView';
import { ChatView } from './components/ChatView';
import { WeatherView } from './components/WeatherView';
import { MandiView } from './components/MandiView';
import { SchemesView } from './components/SchemesView';
import { HistoryView } from './components/HistoryView';

export default function App() {
  const [lang, setLang] = useState<Language>('mr'); // Default to Marathi for Maharashtra farmers
  const [activeTab, setActiveTab] = useState<TabType>('scan');
  const [history, setHistory] = useState<CropDiagnosis[]>([]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Load history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('krishi_rakshak_history');
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load history from localStorage', e);
    }
  }, []);

  const handleSaveToHistory = (diagnosis: CropDiagnosis) => {
    setHistory((prev) => {
      const filtered = prev.filter((item) => item.diseaseName !== diagnosis.diseaseName || item.date !== diagnosis.date);
      const updated = [diagnosis, ...filtered].slice(0, 20);
      try {
        localStorage.setItem('krishi_rakshak_history', JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save to localStorage', e);
      }
      return updated;
    });
  };

  const handleClearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem('krishi_rakshak_history');
    } catch (e) {
      console.warn(e);
    }
  };

  // Text-To-Speech (TTS) using Web Speech API
  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (lang === 'mr') {
      utterance.lang = 'mr-IN';
    } else if (lang === 'hi') {
      utterance.lang = 'hi-IN';
    } else {
      utterance.lang = 'en-IN';
    }

    utterance.rate = 0.88; // Slower, clearer cadence for rural clarity
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      console.warn('TTS error:', e);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Stop speaking whenever tab or language changes
  const handleLanguageChange = (newLang: Language) => {
    handleStopSpeaking();
    setLang(newLang);
  };

  const handleTabChange = (newTab: TabType) => {
    handleStopSpeaking();
    setActiveTab(newTab);
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans pb-20 selection:bg-amber-300">
      {/* Top App Header */}
      <Header
        lang={lang}
        onLanguageChange={handleLanguageChange}
        isSpeaking={isSpeaking}
        onStopSpeaking={handleStopSpeaking}
      />

      {/* Main View Container */}
      <main className="max-w-2xl mx-auto px-3.5 pt-3.5">
        {activeTab === 'scan' && (
          <ScanView
            lang={lang}
            onSaveToHistory={handleSaveToHistory}
            isSpeaking={isSpeaking}
            onSpeak={handleSpeak}
            onStopSpeaking={handleStopSpeaking}
          />
        )}

        {activeTab === 'chat' && (
          <ChatView
            lang={lang}
            isSpeaking={isSpeaking}
            onSpeak={handleSpeak}
            onStopSpeaking={handleStopSpeaking}
          />
        )}

        {activeTab === 'weather' && (
          <WeatherView
            lang={lang}
            isSpeaking={isSpeaking}
            onSpeak={handleSpeak}
            onStopSpeaking={handleStopSpeaking}
          />
        )}

        {activeTab === 'mandi' && (
          <MandiView lang={lang} />
        )}

        {activeTab === 'schemes' && (
          <SchemesView
            lang={lang}
            isSpeaking={isSpeaking}
            onSpeak={handleSpeak}
            onStopSpeaking={handleStopSpeaking}
          />
        )}

        {activeTab === 'history' && (
          <HistoryView
            history={history}
            lang={lang}
            onSelectDiagnosis={(diag) => {
              // Switch to scan tab and show
              setActiveTab('scan');
            }}
            onClearHistory={handleClearHistory}
          />
        )}
      </main>

      {/* Bottom Mobile Navigation Dock */}
      <Navigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
        lang={lang}
        historyCount={history.length}
      />
    </div>
  );
}
