import React, { useState, useRef, useEffect } from 'react';
import { Language, ChatMessage } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { askKrishiChat } from '../services/api';
import {
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Bot,
  User,
  Sparkles,
  Sprout,
  HelpCircle,
} from 'lucide-react';

interface ChatViewProps {
  lang: Language;
  isSpeaking: boolean;
  onSpeak: (text: string) => void;
  onStopSpeaking: () => void;
}

export const ChatView: React.FC<ChatViewProps> = ({
  lang,
  isSpeaking,
  onSpeak,
  onStopSpeaking,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialGreeting: Record<Language, string> = {
    mr: "राम राम शेतकरी दादा! मी तुमचा 'कृषी मित्र' आहे. पिकावरील कीड, रोगाचे उपाय, १०-२६-२६ किंवा १९-१९-१९ खत नियोजन अथवा फवारणीबद्दल कोणताही प्रश्न मराठीत विचारा किंवा माईक दाबून बोला.",
    hi: "राम राम किसान भाई! मैं आपका 'कृषि मित्र' हूँ। फसल में कीट, रोग निवारण, खाद या छिड़काव से जुड़ा कोई भी सवाल अपनी भाषा में पूछें या बोलें।",
    en: "Greetings farmer friend! I am 'Krishi Mitra' AI. Ask me any question regarding pest management, fertilizer scheduling, or sprays in Marathi, Hindi, or English."
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: initialGreeting[lang],
      timestamp: '१०:०० AM',
    },
  ]);

  const [inputText, setInputText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const recognitionRef = useRef<any>(null);

  // Initialize SpeechRecognition if available
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-US';

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [lang]);

  // Update initial greeting when language changes if only 1 message
  useEffect(() => {
    if (messages.length === 1) {
      setMessages([
        {
          id: '1',
          sender: 'bot',
          text: initialGreeting[lang],
          timestamp: '१०:०० AM',
        },
      ]);
    }
  }, [lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert(lang === 'mr' ? 'तुमच्या ब्राउझरमध्ये व्हॉईस इनपुट उपलब्ध नाही.' : 'Voice recognition not supported in this browser.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.lang = lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-US';
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error('Speech start error:', err);
        setIsListening(false);
      }
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    onStopSpeaking();
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    try {
      const reply = await askKrishiChat(query, lang, messages);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-stone-200 flex flex-col h-[78vh] overflow-hidden">
      {/* Chat Header */}
      <div className="bg-emerald-900 text-white p-3.5 flex items-center justify-between border-b border-emerald-800">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center font-bold shadow-xs">
            <Bot className="w-5 h-5 text-emerald-950" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm leading-tight text-white flex items-center gap-1.5">
              {t.chat.title}
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
            </h3>
            <p className="text-[10px] text-emerald-200">
              {t.chat.subtitle}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            const lastBotMsg = [...messages].reverse().find((m) => m.sender === 'bot');
            if (lastBotMsg) {
              if (isSpeaking) onStopSpeaking();
              else onSpeak(lastBotMsg.text);
            }
          }}
          className={`p-2 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
            isSpeaking ? 'bg-rose-500 text-white animate-pulse' : 'bg-emerald-800 hover:bg-emerald-700 text-amber-300'
          }`}
          title={isSpeaking ? t.stopAudio : t.listenBtn}
        >
          {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          <span className="text-[10px] hidden sm:inline">{lang === 'mr' ? 'उत्तर ऐका' : 'Listen'}</span>
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-stone-50/60">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-xs ${
                  isUser ? 'bg-amber-400 text-stone-900' : 'bg-emerald-800 text-amber-300'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Sprout className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-xs ${
                  isUser
                    ? 'bg-emerald-700 text-white rounded-tr-none'
                    : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none font-medium'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>
                <div
                  className={`text-[9px] mt-1 text-right ${
                    isUser ? 'text-emerald-200' : 'text-stone-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-center gap-2 text-stone-500 text-xs italic bg-white p-2.5 rounded-xl border border-stone-200 w-max shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{t.chat.botTyping}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions Chips */}
      <div className="bg-white border-t border-stone-200 p-2 overflow-x-auto flex gap-1.5 scrollbar-none">
        <button
          onClick={() => handleSendMessage(t.chat.suggest1)}
          className="whitespace-nowrap bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-[11px] font-semibold px-2.5 py-1 rounded-full transition"
        >
          🐛 {t.chat.suggest1}
        </button>
        <button
          onClick={() => handleSendMessage(t.chat.suggest2)}
          className="whitespace-nowrap bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-[11px] font-semibold px-2.5 py-1 rounded-full transition"
        >
          🍂 {t.chat.suggest2}
        </button>
        <button
          onClick={() => handleSendMessage(t.chat.suggest3)}
          className="whitespace-nowrap bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-[11px] font-semibold px-2.5 py-1 rounded-full transition"
        >
          🍅 {t.chat.suggest3}
        </button>
        <button
          onClick={() => handleSendMessage(t.chat.suggest4)}
          className="whitespace-nowrap bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-[11px] font-semibold px-2.5 py-1 rounded-full transition"
        >
          🌿 {t.chat.suggest4}
        </button>
        <button
          onClick={() => handleSendMessage(t.chat.suggest5)}
          className="whitespace-nowrap bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-[11px] font-semibold px-2.5 py-1 rounded-full transition"
        >
          🍊 {t.chat.suggest5}
        </button>
      </div>

      {/* Input Form Bar with Voice Mic */}
      <div className="p-2.5 bg-stone-50 border-t border-stone-200 flex items-center gap-2">
        {/* Voice Dictation button */}
        <button
          type="button"
          onClick={toggleVoiceInput}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition shadow-xs flex-shrink-0 ${
            isListening
              ? 'bg-rose-500 text-white animate-pulse'
              : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-100'
          }`}
          title={isListening ? t.chat.voiceInputStop : t.chat.voiceInputStart}
        >
          {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5 text-emerald-700" />}
        </button>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder={isListening ? (lang === 'mr' ? 'ऐकत आहे... बोला' : 'Listening... Speak now') : t.chat.placeholder}
          className="flex-1 bg-white border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent shadow-inner"
        />

        <button
          type="button"
          onClick={() => handleSendMessage()}
          disabled={!inputText.trim()}
          className="w-10 h-10 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 disabled:hover:bg-emerald-700 text-white rounded-xl flex items-center justify-center transition flex-shrink-0 shadow-sm"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
