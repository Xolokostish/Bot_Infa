export default function FeaturesSection() {
  const features = [
    {
      icon: "📰",
      title: "Ежедневные дайджесты",
      description: "Каждое утро получай подборку из 5-7 самых интересных новостей за день"
    },
    {
      icon: "🎯",
      title: "Персонализация",
      description: "Выбирай темы, которые тебе интересны: технологии, наука, космос, финансы и другие"
    },
    {
      icon: "⚡",
      title: "Кратко и по делу",
      description: "Каждая новость — 2-3 предложения. Весь дайджест читается за 5 минут"
    },
    {
      icon: "🌍",
      title: "Проверенные источники",
      description: "Только надёжные источники: TechCrunch, NASA, Nature, Bloomberg и другие"
    },
    {
      icon: "🧠",
      title: "Факт дня",
      description: "В конце каждого дайджеста — интересный факт, который расширит твой кругозор"
    },
    {
      icon: "⏰",
      title: "Гибкое расписание",
      description: "Настрой время получения дайджеста под свой режим дня"
    }
  ];

  return (
    <section className="px-4 py-20 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          Почему тебе понравится
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Бот создан, чтобы экономить твоё время и давать только самое важное
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/5"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Example digest preview */}
      <div className="mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-lg mx-auto">
        <div className="text-center mb-6">
          <span className="text-sm text-cyan-400 font-medium">Пример дайджеста</span>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3 border-l-2 border-blue-500/50 pl-3">
            <span className="text-xl">🤖</span>
            <div>
              <h4 className="font-medium text-white text-sm">GPT-5 прошёл тесты на уровне PhD</h4>
              <p className="text-gray-400 text-xs mt-1">Новая модель OpenAI впервые показала результаты докторского уровня...</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 border-l-2 border-purple-500/50 pl-3">
            <span className="text-xl">🚀</span>
            <div>
              <h4 className="font-medium text-white text-sm">SpaceX посадила Starship</h4>
              <p className="text-gray-400 text-xs mt-1">Впервые выполнена полная программа посадки на Марс-симулятор...</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 border-l-2 border-green-500/50 pl-3">
            <span className="text-xl">🧬</span>
            <div>
              <h4 className="font-medium text-white text-sm">Самовосстанавливающийся материал</h4>
              <p className="text-gray-400 text-xs mt-1">Полимер из MIT восстанавливает структуру за 2 часа...</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs">...и ещё 4 новости + факт дня</p>
        </div>
      </div>
    </section>
  );
}
