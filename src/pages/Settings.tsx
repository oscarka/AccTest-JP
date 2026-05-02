import { Globe, Bell, User, LogOut } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { Language } from '../locales/translations';

export default function Settings() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-6 pt-24 md:pt-16 pb-40 flex flex-col">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-2">{t('settings')}</h2>
        <p className="text-lg text-secondary">{t('settingsDesc')}</p>
      </div>

      <div className="flex flex-col gap-8 max-w-2xl">
        {/* Language Section */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="p-5 border-b border-outline-variant bg-surface-bright flex items-center gap-3">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-on-surface">{t('languageSettings')}</h3>
          </div>
          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-base text-on-surface font-medium">{t('selectLanguage')}</span>
              <div className="flex bg-surface-container rounded-lg p-1">
                {(['en', 'ja', 'zh'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      language === lang 
                        ? 'bg-white text-primary shadow-sm' 
                        : 'text-secondary hover:text-on-surface'
                    }`}
                  >
                    {lang === 'en' ? 'English' : lang === 'ja' ? '日本語' : '中文'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Notifications Section */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="p-5 border-b border-outline-variant bg-surface-bright flex items-center gap-3">
            <Bell className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-on-surface">{t('notifications')}</h3>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-base text-on-surface font-medium">{t('pushNotifications')}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </section>

        {/* Account Section */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="p-5 border-b border-outline-variant bg-surface-bright flex items-center gap-3">
            <User className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-on-surface">{t('account')}</h3>
          </div>
          <div className="p-5 flex flex-col gap-4">
            <button className="flex items-center gap-3 text-error hover:bg-error-container hover:text-on-error-container p-3 rounded-lg transition-colors w-full text-left font-medium">
              <LogOut className="w-5 h-5" />
              {t('logout')}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
