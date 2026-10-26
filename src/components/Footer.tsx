export default function Footer() {
  return (
    <footer className="px-4 py-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🤖</span>
          <span className="font-bold text-white">Daily Digest Bot</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
          Подписывайся на бота в Telegram и получай ежедневные дайджесты 
          самой интересной информации со всего мира.
        </p>

        <a
          href="https://t.me/DailyDigestBot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.74 3.99-1.74 6.65-2.89 7.99-3.44 3.81-1.58 4.6-1.86 5.12-1.87.11 0 .37.03.53.17.14.12.18.28.2.45-.01.06.01.24 0 .38z"/>
          </svg>
          Подписаться в Telegram
        </a>

        <div className="mt-10 pt-6 border-t border-white/5">
          <p className="text-gray-500 text-xs">
            © 2026 Daily Digest Bot. Создано с ❤️ для любознательных людей.
          </p>
        </div>
      </div>
    </footer>
  );
}
