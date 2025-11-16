import { LayoutDashboard, BarChart3, FileText, Settings, HelpCircle, TrendingUp, Users, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  icon: any;
  label: string;
  active?: boolean;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface SidebarProps {
  isMinimized: boolean;
  onToggleMinimize: () => void;
}

export function Sidebar({ isMinimized, onToggleMinimize }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('Overview');

  const sections: NavSection[] = [
    {
      title: 'Main',
      items: [
        { icon: LayoutDashboard, label: 'Overview', active: true },
        { icon: BarChart3, label: 'Analytics' },
        { icon: TrendingUp, label: 'Reports', badge: '3' },
      ],
    },
    {
      title: 'Management',
      items: [
        { icon: Users, label: 'Users' },
        { icon: Activity, label: 'Activity Logs' },
        { icon: FileText, label: 'Documents' },
      ],
    },
    {
      title: 'System',
      items: [
        { icon: Settings, label: 'Settings' },
        { icon: HelpCircle, label: 'Help & Support' },
      ],
    },
  ];

  return (
    <nav className="py-6 relative overflow-hidden flex flex-col h-full">
      <div className="flex-1">
        {sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          {!isMinimized && (
            <h3 className="px-6 mb-3 text-xs font-bold text-charcoal-500 uppercase tracking-wider">
              {section.title}
            </h3>
          )}
          <ul className="space-y-1">
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;

              return (
                <li key={item.label}>
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={`w-full flex items-center ${isMinimized ? 'justify-center px-4' : 'justify-between px-6'} py-3 text-left transition-colors relative group ${
                      isActive
                        ? 'bg-strong-cyan-50 text-strong-cyan-700 border-r-4 border-strong-cyan-500'
                        : 'text-charcoal-600 hover:bg-vanilla-cream-50 hover:text-charcoal-900'
                    }`}
                    title={isMinimized ? item.label : ''}
                  >
                    <div className={`flex items-center ${isMinimized ? '' : 'gap-3'}`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-strong-cyan-600' : ''}`} />
                      {!isMinimized && <span className="font-medium">{item.label}</span>}
                    </div>
                    {!isMinimized && item.badge && (
                      <span className="px-2 py-1 text-xs font-bold bg-strong-cyan-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {isMinimized && item.badge && (
                      <span className="absolute top-2 right-2 w-2 h-2 bg-strong-cyan-500 rounded-full"></span>
                    )}
                    {isMinimized && (
                      <div className="absolute left-full ml-2 px-3 py-2 bg-charcoal-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                        {item.label}
                        {item.badge && <span className="ml-2 px-2 py-0.5 text-xs bg-strong-cyan-500 rounded-full">{item.badge}</span>}
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      </div>

      <div className="mt-auto pt-4 border-t border-graphite-200">
        <button
          onClick={onToggleMinimize}
          className={`w-full flex items-center ${isMinimized ? 'justify-center px-4' : 'justify-between px-6'} py-3 text-charcoal-600 hover:bg-vanilla-cream-50 hover:text-charcoal-900 transition-colors rounded-lg mx-auto ${isMinimized ? 'max-w-min' : ''}`}
          title={isMinimized ? 'Expand sidebar' : 'Minimize sidebar'}
        >
          <div className={`flex items-center ${isMinimized ? '' : 'gap-3'}`}>
            {isMinimized ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="font-medium">Minimize</span>
              </>
            )}
          </div>
        </button>
      </div>
    </nav>
  );
}
