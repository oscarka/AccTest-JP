import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, User, LayoutDashboard, BookOpen, Clock, Settings, Calendar, ClipboardList, BarChart2, X } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { nameKey: 'dashboard', path: '/dashboard', icon: LayoutDashboard },
    { nameKey: 'practice', path: '/practice', icon: BookOpen },
    { nameKey: 'history', path: '/history', icon: Clock },
    { nameKey: 'settings', path: '/settings', icon: Settings },
  ] as const;

  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen flex flex-col md:flex-row antialiased">
      {/* Mobile Header */}
      <header className="md:hidden bg-white/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-100 flex items-center justify-between px-6 h-16">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-secondary hover:bg-slate-50 p-2 -ml-2 rounded-full"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="text-lg font-bold tracking-tighter">BokiPrep</div>
        <Link to="/settings" className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant hover:bg-surface-variant transition-colors">
          <User className="w-5 h-5 text-secondary" />
        </Link>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Content */}
      <div className={`md:hidden fixed inset-y-0 left-0 w-64 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold tracking-tighter text-slate-900">BokiPrep</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-secondary hover:bg-slate-50 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant">
              <User className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-black text-lg tracking-tight leading-tight">Nissho Boki<br/>Level 2</span>
            </div>
          </div>

          <nav className="flex flex-col gap-1 flex-1">
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${location.pathname === '/dashboard' ? 'bg-slate-50 text-primary' : 'text-secondary hover:bg-slate-50'}`}>
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-medium text-sm">{t('dashboard')}</span>
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/practice" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${location.pathname === '/practice' ? 'bg-slate-50 text-primary' : 'text-secondary hover:bg-slate-50'}`}>
              <Calendar className="w-5 h-5" />
              <span className="font-medium text-sm">{t('studyPlan')}</span>
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/history" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${location.pathname === '/history' ? 'bg-slate-50 text-primary' : 'text-secondary hover:bg-slate-50'}`}>
              <Clock className="w-5 h-5" />
              <span className="font-medium text-sm">{t('history')}</span>
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/settings" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${location.pathname === '/settings' ? 'bg-slate-50 text-primary' : 'text-secondary hover:bg-slate-50'}`}>
              <Settings className="w-5 h-5" />
              <span className="font-medium text-sm">{t('settings')}</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex bg-white flex-col w-72 border-r border-slate-100 shadow-2xl p-6 fixed top-0 left-0 z-40 h-full">
        <div className="mb-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant">
            <User className="w-6 h-6 text-secondary" />
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-black text-lg tracking-tight">Nissho Boki Level 2</span>
            <span className="text-secondary opacity-80 text-xs">{t('examCountdown')}</span>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          <Link to="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${location.pathname === '/dashboard' ? 'bg-slate-50 text-primary' : 'text-secondary hover:bg-slate-50'}`}>
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium text-sm">{t('dashboard')}</span>
          </Link>
          <Link to="/practice" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${location.pathname === '/practice' ? 'bg-slate-50 text-primary' : 'text-secondary hover:bg-slate-50'}`}>
            <Calendar className="w-5 h-5" />
            <span className="font-medium text-sm">{t('studyPlan')}</span>
          </Link>
          <Link to="/history" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${location.pathname === '/history' ? 'bg-slate-50 text-primary' : 'text-secondary hover:bg-slate-50'}`}>
            <Clock className="w-5 h-5" />
            <span className="font-medium text-sm">{t('history')}</span>
          </Link>
          <Link to="/settings" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${location.pathname === '/settings' ? 'bg-slate-50 text-primary' : 'text-secondary hover:bg-slate-50'}`}>
            <Settings className="w-5 h-5" />
            <span className="font-medium text-sm">{t('settings')}</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 w-full md:ml-72 flex flex-col">
        <Outlet />
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden bg-white/95 backdrop-blur-md fixed bottom-0 w-full z-50 border-t border-slate-100 flex justify-around items-center h-16 pb-[env(safe-area-inset-bottom)] px-6 shadow-lg">
        {navItems.map(item => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link key={item.path} to={item.path} className={`flex flex-col items-center justify-center p-2 mb-2 transition-colors ${isActive ? 'text-primary' : 'text-outline hover:text-primary'}`}>
              <Icon className="w-[22px] h-[22px]" />
              <span className="text-[10px] mt-1 font-semibold tracking-tight uppercase truncate">{t(item.nameKey)}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
