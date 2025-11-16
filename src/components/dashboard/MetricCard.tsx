import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import * as Icons from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  changeDirection: 'up' | 'down' | 'neutral';
  icon: string;
}

export function MetricCard({ title, value, change, changeDirection, icon }: MetricCardProps) {
  const IconComponent = (Icons as any)[icon] as LucideIcon || Icons.BarChart3;
  const isPositive = changeDirection === 'up';
  const isNegative = changeDirection === 'down';

  return (
    <div className="bg-white rounded-2xl border border-graphite-200 p-6 hover-lift">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-strong-cyan-50 rounded-xl">
            <IconComponent className="w-6 h-6 text-strong-cyan-600" />
          </div>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-sm font-semibold ${
          isPositive ? 'bg-green-50 text-green-700' :
          isNegative ? 'bg-red-50 text-red-700' :
          'bg-graphite-100 text-graphite-700'
        }`}>
          {isPositive && <TrendingUp className="w-4 h-4" />}
          {isNegative && <TrendingDown className="w-4 h-4" />}
          <span>{change > 0 ? '+' : ''}{change.toFixed(1)}%</span>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-charcoal-600 mb-1">{title}</h3>
        <p className="text-3xl font-headline font-bold text-charcoal-900">{value}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-graphite-100">
        <p className="text-xs text-charcoal-500">
          {isPositive && 'Increase from last period'}
          {isNegative && 'Decrease from last period'}
          {!isPositive && !isNegative && 'No change from last period'}
        </p>
      </div>
    </div>
  );
}
