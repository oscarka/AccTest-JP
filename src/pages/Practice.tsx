import { Link } from 'react-router-dom';
import { Shuffle, Dumbbell, BookOpen } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export default function Practice() {
  const { t } = useTranslation();
  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-6 pt-24 md:pt-16 pb-40 flex flex-col">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-2">{t('practiceMode')}</h2>
        <p className="text-lg text-secondary">{t('practiceModeDesc')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 content-start">
        <button className="group relative text-left bg-surface border border-outline-variant rounded-xl p-8 hover:shadow-sm hover:border-outline hover:bg-surface-bright transition-all duration-300 flex flex-col gap-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
          <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
            <Shuffle className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-on-surface mb-2">{t('randomPractice')}</h3>
            <p className="text-secondary line-clamp-2">{t('randomPracticeDesc')}</p>
          </div>
          <div className="absolute inset-0 border-2 border-transparent rounded-xl group-focus:border-primary pointer-events-none"></div>
        </button>

        <button className="group relative text-left bg-surface border border-outline-variant rounded-xl p-8 hover:shadow-sm hover:border-outline hover:bg-surface-bright transition-all duration-300 flex flex-col gap-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
          <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
            <Dumbbell className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-on-surface mb-2">{t('weaknessFocus')}</h3>
            <p className="text-secondary line-clamp-2">{t('weaknessFocusDesc')}</p>
          </div>
          <div className="absolute inset-0 border-2 border-transparent rounded-xl group-focus:border-primary pointer-events-none"></div>
        </button>

        <button className="group relative text-left bg-surface border border-outline-variant rounded-xl p-8 hover:shadow-sm hover:border-outline hover:bg-surface-bright transition-all duration-300 flex flex-col gap-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
          <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-on-surface mb-2">{t('topicPractice')}</h3>
            <p className="text-secondary line-clamp-2">{t('topicPracticeDesc')}</p>
          </div>
          <div className="absolute inset-0 border-2 border-transparent rounded-xl group-focus:border-primary pointer-events-none"></div>
        </button>
      </div>

      <div className="fixed bottom-[100px] md:bottom-12 left-0 md:left-72 right-0 px-4 md:px-6 flex justify-center pointer-events-none z-30">
        <Link to="/question" className="pointer-events-auto w-full max-w-sm bg-primary text-white py-4 px-8 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg hover:bg-primary-fixed-variant hover:-translate-y-0.5 transition-all duration-200 active:scale-95 text-center">
          {t('start')}
        </Link>
      </div>
    </main>
  );
}
