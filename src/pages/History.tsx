import { ClipboardList, Calendar, CheckCircle2, XCircle } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export default function History() {
  const { t } = useTranslation();

  const mockHistory = [
    { id: 1, type: t('randomPractice'), date: '2023-11-01', score: 80, total: 10 },
    { id: 2, type: t('weaknessFocus'), date: '2023-10-30', score: 60, total: 10 },
    { id: 3, type: t('topicPractice'), date: '2023-10-28', score: 100, total: 10 },
  ];

  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-6 pt-24 md:pt-16 pb-40 flex flex-col">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-2">{t('learningHistory')}</h2>
        <p className="text-lg text-secondary">{t('historyDesc')}</p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-on-surface mb-2">{t('recentActivity')}</h3>
        
        {mockHistory.map((item) => (
          <div key={item.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 flex items-center justify-between hover:bg-surface-bright transition-colors shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.score >= 80 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {item.score >= 80 ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-medium text-on-surface">{item.type}</span>
                <div className="flex items-center gap-1 text-sm text-secondary">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">{t('score')}</span>
              <span className={`text-2xl font-bold ${item.score >= 80 ? 'text-green-600' : 'text-red-600'}`}>
                {item.score}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
