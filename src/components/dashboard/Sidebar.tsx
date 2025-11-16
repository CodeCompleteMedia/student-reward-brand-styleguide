import { LayoutDashboard, BarChart3, FileText, Settings, HelpCircle, TrendingUp, Users, Activity } from 'lucide-react';
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

export function Sidebar() {
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
    <nav className="py-6">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="px-6 mb-3 text-xs font-bold text-charcoal-500 uppercase tracking-wider">
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;

              return (
                <li key={item.label}>
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={`w-full flex items-center justify-between px-6 py-3 text-left transition-colors ${
                      isActive
                        ? 'bg-strong-cyan-50 text-strong-cyan-700 border-r-4 border-strong-cyan-500'
                        : 'text-charcoal-600 hover:bg-vanilla-cream-50 hover:text-charcoal-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-strong-cyan-600' : ''}`} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-bold bg-strong-cyan-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className="mx-6 mt-8 p-4 bg-gradient-to-br from-vanilla-cream-100 to-strong-cyan-50 rounded-xl border border-vanilla-cream-200">
        <h4 className="font-headline font-bold text-charcoal-900 mb-2">Need Help?</h4>
        <p className="text-sm text-charcoal-600 mb-4">
          Check out our documentation and tutorials
        </p>
        <button className="w-full px-4 py-2 bg-signature-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </nav>
  );
}
