import { useState, ReactNode } from 'react';
import { Menu, X, Bell, Search, User } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  sidebar: (props: { isMinimized: boolean; onToggleMinimize: () => void }) => ReactNode;
}

export function DashboardLayout({ children, sidebar }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="min-h-screen bg-vanilla-cream-50">
      <div className={`fixed inset-0 bg-charcoal-900/50 z-40 lg:hidden transition-opacity ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)}></div>

      <aside className={`fixed top-0 left-0 z-50 h-full bg-white border-r border-graphite-200 transform transition-all duration-300 ${
        isMinimized ? 'w-20' : 'w-64'
      } ${sidebarOpen ? 'translate-x-0 lg:translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className={`flex items-center ${isMinimized ? 'justify-center' : 'justify-between'} p-6 border-b border-graphite-200`}>
          {!isMinimized && (
            <>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-signature-gradient rounded-lg"></div>
                <span className="text-xl font-headline font-bold text-charcoal-900">Dashboard</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-charcoal-600 hover:text-charcoal-900">
                <X className="w-6 h-6" />
              </button>
            </>
          )}
          {isMinimized && (
            <div className="w-10 h-10 bg-signature-gradient rounded-lg"></div>
          )}
        </div>
        <div className="overflow-y-auto h-[calc(100vh-88px)]">
          {sidebar({ isMinimized, onToggleMinimize: () => setIsMinimized(!isMinimized) })}
        </div>
      </aside>

      <div className={`transition-all duration-300 min-h-screen ${isMinimized ? 'pl-20' : 'pl-64'}`}>
        <header className="sticky top-0 z-30 bg-white border-b border-graphite-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-charcoal-600 hover:text-charcoal-900">
                <Menu className="w-6 h-6" />
              </button>

              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-80 bg-vanilla-cream-50 border border-graphite-200 rounded-lg text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-strong-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-charcoal-600 hover:text-charcoal-900 hover:bg-vanilla-cream-50 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-strong-cyan-500 rounded-full"></span>
              </button>

              <button className="flex items-center gap-3 p-2 hover:bg-vanilla-cream-50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-signature-gradient rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-semibold text-charcoal-900">Admin User</div>
                  <div className="text-xs text-charcoal-500">admin@example.com</div>
                </div>
              </button>
            </div>
          </div>
        </header>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
