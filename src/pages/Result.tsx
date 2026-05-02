import { Link } from 'react-router-dom';
import { Menu, User, CheckCircle, Receipt, Lightbulb, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export default function Result() {
  const { t } = useTranslation();
  return (
    <div className="bg-background text-on-background font-sans min-h-screen flex flex-col antialiased">
      <header className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md shadow-none flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-primary hover:bg-slate-50 transition-colors p-2 rounded-full flex items-center justify-center -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <span className="text-lg font-bold tracking-tighter text-slate-900">BokiPrep</span>
        </div>
        <div className="flex items-center">
          <Link to="/settings" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant hover:bg-surface-variant transition-colors">
            <User className="w-5 h-5 text-secondary" />
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-16 px-4 md:px-6 max-w-3xl w-full mx-auto flex flex-col">
        <div className="flex flex-col items-center justify-center mt-8 mb-16 text-center">
          <CheckCircle className="w-20 h-20 text-primary mb-2 drop-shadow-sm" />
          <h1 className="text-3xl font-bold text-primary">{t('correct')}</h1>
          <p className="text-base text-secondary mt-1">{t('qLabel')}</p>
        </div>

        <div className="bg-surface-bright border border-outline-variant rounded-xl p-6 shadow-sm mb-8 transition-all hover:shadow-md">
          <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-2">
            <Receipt className="w-5 h-5 text-secondary" />
            <h2 className="text-xl font-semibold text-on-surface">{t('modelAnswer')}</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-0 border border-outline-variant rounded-lg overflow-hidden bg-surface-container-lowest">
            <div className="flex-1 border-b md:border-b-0 md:border-r border-outline-variant">
              <div className="bg-surface-container-low py-2 px-4 border-b border-outline-variant text-center">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{t('debit')} (Debit)</span>
              </div>
              <div className="flex justify-between items-center py-4 px-4 hover:bg-surface-container-low transition-colors">
                <span className="text-base text-on-surface">受取手形</span>
                <span className="text-base font-semibold text-on-surface">500,000</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-surface-container-low py-2 px-4 border-b border-outline-variant text-center">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{t('credit')} (Credit)</span>
              </div>
              <div className="flex justify-between items-center py-4 px-4 hover:bg-surface-container-low transition-colors">
                <span className="text-base text-on-surface">売掛金</span>
                <span className="text-base font-semibold text-on-surface">500,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container rounded-lg p-4 mb-16 border border-surface-container-highest">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-primary" />
            <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">{t('explanation')}</h3>
          </div>
          <p className="text-base text-secondary leading-relaxed">
            {t('explanationText')}<br />
            <span className="font-semibold text-error mt-2 block">{t('commonMistake')}</span>
          </p>
        </div>

        <div className="mt-auto md:mt-0 flex flex-col">
          <Link to="/practice" className="w-full md:w-auto md:self-end bg-primary text-white text-xl font-semibold py-4 px-8 rounded-lg shadow-sm hover:bg-primary-fixed-variant hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2">
            <span>{t('nextQuestion')}</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </main>
    </div>
  );
}
