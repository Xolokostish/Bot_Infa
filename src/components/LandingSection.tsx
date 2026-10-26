import { useState } from 'react';

interface Props {
  onOpenChat: () => void;
}

export default function LandingSection({ onOpenChat }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Bot Avatar */}
        <div className="mb-8 inline-block">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-5xl shadow-2xl shadow-blue-500/30 mx-auto animate-bounce" style={{ animationDuration: '3s' }}>
            🤖
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-400 text-sm font-medium">Онлайн</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
          Daily Digest Bot
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-3">
          Твой персональный дайджест каждый день
        </p>
        
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Бот собирает самую интересную информацию из мира технологий, науки, космоса и не только. 
          Кратко, по делу, каждое утро.
        </p>

        {/* CTA Button */}
        <button
          onClick={onOpenChat}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-lg font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          <span className="relative flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.74 3.99-1.74 6.65-2.89 7.99-3.44 3.81-1.58 4.6-1.86 5.12-1.87.11 0 .37.03.53.17.14.12.18.28.2.45-.01.06.01.24 0 .38z"/>
            </svg>
            {isHovered ? 'Открыть чат' : 'Посмотреть демо'}
          </span>
        </button>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">12K+</div>
            <div className="text-sm text-gray-400">Подписчиков</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">365</div>
            <div className="text-sm text-gray-400">Дайджестов</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5 мин</div>
            <div className="text-sm text-gray-400">Чтения</div>
          </div>
        </div>
      </div>
    </section>
  );
}
