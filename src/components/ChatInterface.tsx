import { useState, useEffect, useRef } from 'react';
import { digests, botCommands, type DailyDigest, type DigestItem } from '../data/digests';

interface Props {
  onBack: () => void;
}

interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
  isTyping?: boolean;
  digest?: DailyDigest;
}

export default function ChatInterface({ onBack }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentDigestIndex, setCurrentDigestIndex] = useState(0);
  const [showCommands, setShowCommands] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial bot message
    const timer = setTimeout(() => {
      addBotMessage("👋 Привет! Я Daily Digest Bot.\n\nКаждый день я присылаю подборку самых интересных новостей из мира технологий, науки, космоса и многого другого.\n\nНажми /start чтобы начать!");
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const addBotMessage = (content: string, digest?: DailyDigest) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      messageIdRef.current += 1;
      setMessages(prev => [...prev, {
        id: messageIdRef.current,
        type: 'bot',
        content,
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        digest
      }]);
    }, 1200 + Math.random() * 800);
  };

  const addUserMessage = (content: string) => {
    messageIdRef.current += 1;
    setMessages(prev => [...prev, {
      id: messageIdRef.current,
      type: 'user',
      content,
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const command = inputValue.trim().toLowerCase();
    addUserMessage(inputValue);
    setInputValue('');
    setShowCommands(false);

    if (command === '/start' || command === '/digest') {
      const digest = digests[currentDigestIndex % digests.length];
      setCurrentDigestIndex(prev => prev + 1);
      addBotMessage(digest.greeting, digest);
    } else if (command === '/settings') {
      addBotMessage("⚙️ Настройки:\n\n📅 Время рассылки: 08:00\n📊 Тематика: Все темы\n🔔 Уведомления: Включены\n\nИспользуй /time и /topics для изменения.");
    } else if (command === '/topics') {
      addBotMessage("📋 Выбери интересные темы:\n\n✅ Технологии\n✅ Космос\n✅ Наука\n✅ Финансы\n✅ Гейминг\n⬜ Спорт\n⬜ Политика\n⬜ Кино\n\nНажми на тему чтобы переключить.");
    } else if (command === '/time') {
      addBotMessage("⏰ Текущее время рассылки: 08:00\n\nДоступные варианты:\n• 07:00 — Ранняя пташка 🐦\n• 08:00 — Оптимально ⭐\n• 09:00 — Для тех, кто любит поспать 😴\n• 12:00 — Обеденный перерыв 🍽️");
    } else if (command === '/help') {
      addBotMessage("📖 Команды бота:\n\n/start — Запустить бота\n/digest — Получить дайджест\n/settings — Настройки\n/topics — Выбрать темы\n/time — Время рассылки\n/help — Эта справка\n\n💡 Совет: можешь просто написать мне, и я постараюсь помочь!");
    } else {
      addBotMessage("Я пока не понимаю эту команду 😅\n\nПопробуй /help чтобы увидеть список доступных команд.");
    }
  };

  const handleCommandClick = (command: string) => {
    setInputValue(command);
    setShowCommands(false);
  };

  const formatDigestMessage = (digest: DailyDigest) => {
    return (
      <div className="space-y-3">
        <p className="text-[15px] leading-relaxed">{digest.greeting}</p>
        
        <div className="bg-white/5 rounded-xl p-3 space-y-3 border border-white/10">
          <div className="flex items-center gap-2 text-sm text-cyan-300 font-medium">
            <span>📅</span>
            <span>{digest.date}</span>
          </div>
          
          {digest.items.map((item, idx) => (
            <div key={idx} className="border-l-2 border-cyan-500/50 pl-3 py-1">
              <div className="flex items-start gap-2">
                <span className="text-lg">{item.emoji}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-gray-300 text-xs mt-1 leading-relaxed">{item.summary}</p>
                  <span className="text-[10px] text-gray-500 mt-1 inline-block">📎 {item.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-3 border border-purple-500/20">
          <p className="text-sm text-purple-200">{digest.funFact}</p>
        </div>

        <p className="text-[15px] text-gray-300">{digest.closing}</p>
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-[#1b1f3a]/90 backdrop-blur-lg border-b border-white/10 px-4 py-3 flex items-center gap-3 sticky top-0 z-20">
        <button
          onClick={onBack}
          className="text-gray-400 hover:text-white transition-colors p-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-xl">
          🤖
        </div>
        
        <div className="flex-1">
          <h2 className="font-semibold text-white text-sm">Daily Digest Bot</h2>
          <p className="text-xs text-green-400">
            {isTyping ? 'печатает...' : 'в сети'}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#0e1025]/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                msg.type === 'user'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
                  : 'bg-[#1e2340] text-gray-100 rounded-bl-md border border-white/5'
              }`}
            >
              {msg.digest ? (
                formatDigestMessage(msg.digest)
              ) : (
                <p className="text-[15px] leading-relaxed whitespace-pre-line">{msg.content}</p>
              )}
              <span className={`text-[10px] mt-1 block ${msg.type === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                {msg.timestamp}
                {msg.type === 'user' && ' ✓✓'}
              </span>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start animate-fadeIn">
            <div className="bg-[#1e2340] rounded-2xl rounded-bl-md px-4 py-3 border border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Commands panel */}
      {showCommands && (
        <div className="bg-[#1b1f3a] border-t border-white/10 px-4 py-2 max-h-48 overflow-y-auto">
          {botCommands.map((cmd) => (
            <button
              key={cmd.command}
              onClick={() => handleCommandClick(cmd.command)}
              className="w-full text-left px-3 py-2 hover:bg-white/5 rounded-lg transition-colors flex items-center gap-3"
            >
              <span className="text-cyan-400 font-mono text-sm">{cmd.command}</span>
              <span className="text-gray-400 text-sm">{cmd.description}</span>
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="bg-[#1b1f3a]/90 backdrop-blur-lg border-t border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCommands(!showCommands)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Сообщение..."
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all text-sm"
          />
          
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="p-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
