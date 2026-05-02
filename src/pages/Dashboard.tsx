import { Link } from 'react-router-dom';
import { Activity, Calculator, ListTodo, PlayCircle, ClipboardCheck } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export default function Dashboard() {
  const { t } = useTranslation();
  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 pt-24 pb-32 md:pt-16 md:px-12 md:pb-16 flex flex-col gap-16 relative">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-on-surface">{t('overview')}</h1>
        <p className="text-secondary">{t('overviewDesc')}</p>
      </header>

      <section className="flex flex-col gap-4">
        <div className="bg-surface-container-lowest rounded-xl border border-primary/10 p-6 md:p-8 shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xs font-semibold text-secondary uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-[18px] h-[18px] text-primary" />
              {t('forecastedPassRate')}
            </h2>
            <div className="bg-surface-container px-3 py-1 rounded-full border border-outline-variant/50">
              <span className="text-xs font-semibold text-primary">Level 2</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-6 cursor-default group">
            <span className="text-[72px] font-black leading-none text-on-surface group-hover:text-primary transition-colors duration-300 tracking-tighter">72</span>
            <span className="text-2xl font-semibold text-secondary">%</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-3 bg-surface-variant rounded-full overflow-hidden border border-outline-variant/20">
              <div 
                className="h-full rounded-full" 
                style={{ width: '72%', background: 'linear-gradient(90deg, #facc15 0%, #22c55e 100%)' }} 
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="text-xs font-medium text-secondary">0%</span>
              <span className="text-xs font-medium text-primary">{t('target')}: 80%</span>
              <span className="text-xs font-medium text-secondary">100%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-on-surface mb-2">{t('todayTasks')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-slate-100 rounded-xl p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors cursor-pointer shadow-sm">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-lg font-medium text-on-surface">{t('costAccounting')}</span>
              <span className="text-sm text-secondary">{t('indBookkeeping')}</span>
            </div>
            <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-md text-sm font-medium border border-secondary/10">
              {t('qCount', { count: 10 })}
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-slate-100 rounded-xl p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors cursor-pointer shadow-sm">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
              <ListTodo className="w-6 h-6" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-lg font-medium text-on-surface">{t('journalEntries')}</span>
              <span className="text-sm text-secondary">{t('comBookkeeping')}</span>
            </div>
            <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-md text-sm font-medium border border-secondary/10">
              {t('qCount', { count: 5 })}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 flex flex-col md:flex-row gap-4">
        <Link to="/question" className="flex-1 bg-primary text-white py-4 px-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wide text-xs font-semibold">
          <PlayCircle className="w-5 h-5" />
          {t('startPractice')}
        </Link>
        <button className="flex-1 bg-transparent border border-outline text-primary py-4 px-6 rounded-lg hover:bg-surface-container-low transition-colors duration-200 flex items-center justify-center gap-2 uppercase tracking-wide text-xs font-semibold">
          <ClipboardCheck className="w-5 h-5" />
          {t('mockExam')}
        </button>
      </section>
    </main>
  );
}
