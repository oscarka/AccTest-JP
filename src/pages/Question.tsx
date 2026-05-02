import { Link } from 'react-router-dom';
import { X, Plus } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export default function Question() {
  const { t } = useTranslation();
  return (
    <div className="bg-surface text-on-surface font-sans antialiased min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      <header className="w-full bg-surface z-50 sticky top-0">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-[1200px] mx-auto">
          <Link to="/dashboard" aria-label="Close quiz" className="text-secondary hover:text-on-surface transition-colors focus:outline-none">
            <X className="w-6 h-6" />
          </Link>
          <div className="text-xs font-semibold text-secondary tracking-widest uppercase">
            {t('qNumber')}
          </div>
          <div className="w-6"></div>
        </div>
        <div className="w-full h-1 bg-surface-variant">
          <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: '30%' }}></div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-6 pt-8 pb-32">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 md:p-12 mb-16 shadow-xl">
          <h1 className="text-2xl font-semibold text-on-background mb-4">
            {t('qText')}
          </h1>
          <p className="text-base text-secondary">
            {t('qInstruction')}
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 gap-6 mb-4 border-b border-outline-variant pb-2">
            <div className="flex flex-col">
              <span className="text-primary font-bold text-sm">{t('debit')}</span>
              <span className="text-[10px] opacity-70 text-secondary">DEBIT</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-sm">{t('credit')}</span>
              <span className="text-[10px] opacity-70 text-secondary">CREDIT</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="flex items-center gap-2 bg-white border-2 border-outline-variant rounded-xl p-3 focus-within:border-primary focus-within:shadow-[0_0_0_1px_rgba(0,65,200,1)] transition-all duration-200">
              <input className="w-1/2 border-none bg-transparent focus:ring-0 text-base text-on-surface p-0 placeholder:text-outline-variant outline-none" placeholder={t('accountTitle')} type="text" defaultValue="売掛金" />
              <div className="h-6 w-[1px] bg-outline-variant"></div>
              <input className="w-1/2 border-none bg-transparent focus:ring-0 text-right text-base text-on-surface p-0 placeholder:text-outline-variant outline-none font-medium" placeholder={t('amount')} type="text" defaultValue="500,000" />
            </div>

            <div className="flex items-center gap-2 bg-white border-2 border-outline-variant rounded-xl p-3 focus-within:border-primary focus-within:shadow-[0_0_0_1px_rgba(0,65,200,1)] transition-all duration-200">
              <input className="w-1/2 border-none bg-transparent focus:ring-0 text-base text-on-surface p-0 placeholder:text-outline-variant outline-none" placeholder={t('accountTitle')} type="text" defaultValue="売上" />
              <div className="h-6 w-[1px] bg-outline-variant"></div>
              <input className="w-1/2 border-none bg-transparent focus:ring-0 text-right text-base text-on-surface p-0 placeholder:text-outline-variant outline-none font-medium" placeholder={t('amount')} type="text" defaultValue="500,000" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4 opacity-40 focus-within:opacity-100 transition-opacity duration-200">
            <div className="flex items-center gap-2 bg-surface-container-low border-2 border-outline-variant border-dashed rounded-xl p-3 focus-within:border-solid focus-within:border-primary focus-within:bg-white focus-within:shadow-[0_0_0_1px_rgba(0,65,200,1)] hover:bg-white transition-colors">
              <input className="w-1/2 border-none bg-transparent focus:ring-0 text-base text-on-surface p-0 placeholder:text-outline outline-none" placeholder={t('accountTitle')} type="text" />
              <div className="h-6 w-[1px] bg-outline-variant opacity-50"></div>
              <input className="w-1/2 border-none bg-transparent focus:ring-0 text-right text-base text-on-surface p-0 placeholder:text-outline outline-none font-medium" placeholder={t('amount')} type="text" />
            </div>

            <div className="flex items-center gap-2 bg-surface-container-low border-2 border-outline-variant border-dashed rounded-xl p-3 focus-within:border-solid focus-within:border-primary focus-within:bg-white focus-within:shadow-[0_0_0_1px_rgba(0,65,200,1)] hover:bg-white transition-colors">
              <input className="w-1/2 border-none bg-transparent focus:ring-0 text-base text-on-surface p-0 placeholder:text-outline outline-none" placeholder={t('accountTitle')} type="text" />
              <div className="h-6 w-[1px] bg-outline-variant opacity-50"></div>
              <input className="w-1/2 border-none bg-transparent focus:ring-0 text-right text-base text-on-surface p-0 placeholder:text-outline outline-none font-medium" placeholder={t('amount')} type="text" />
            </div>
          </div>

          <button className="mt-4 text-primary text-xs font-semibold tracking-widest uppercase flex items-center gap-1 hover:text-primary-fixed-variant transition-colors group">
            <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {t('addRow')}
          </button>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-outline-variant p-4 md:p-6 z-40 flex justify-center shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.02)]">
        <Link to="/result" className="w-full max-w-md bg-primary text-white py-5 px-8 rounded-xl font-bold text-lg tracking-wider uppercase hover:bg-primary-fixed-variant active:scale-[0.98] transition-all shadow-lg text-center">
          {t('submit')}
        </Link>
      </div>
    </div>
  );
}
