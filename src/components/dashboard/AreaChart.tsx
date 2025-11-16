import { useMemo } from 'react';

interface DataPoint {
  date: string;
  value: number;
}

interface AreaChartProps {
  data: DataPoint[];
  height?: number;
  color?: string;
}

export function AreaChart({ data, height = 300, color = '#42b7bd' }: AreaChartProps) {
  const { path, area, points, maxValue } = useMemo(() => {
    if (data.length === 0) {
      return { path: '', area: '', points: [], maxValue: 0 };
    }

    const values = data.map(d => d.value);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;

    const padding = 40;
    const chartHeight = height - padding * 2;
    const chartWidth = 800;
    const stepX = chartWidth / (data.length - 1 || 1);

    const pts = data.map((d, i) => {
      const x = i * stepX;
      const y = chartHeight - ((d.value - min) / range) * chartHeight + padding;
      return { x, y, value: d.value };
    });

    const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    const areaD = `${pathD} L ${pts[pts.length - 1].x} ${height} L 0 ${height} Z`;

    return { path: pathD, area: areaD, points: pts, maxValue: max };
  }, [data, height]);

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-charcoal-400">
        No data available
      </div>
    );
  }

  return (
    <div className="relative">
      <svg width="100%" height={height} viewBox={`0 0 800 ${height}`} preserveAspectRatio="none" className="overflow-visible">
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <path
          d={area}
          fill="url(#areaGradient)"
        />

        <path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((point, i) => (
          <g key={i}>
            <circle
              cx={point.x}
              cy={point.y}
              r="4"
              fill="white"
              stroke={color}
              strokeWidth="2"
              className="cursor-pointer hover:r-6 transition-all"
            />
          </g>
        ))}
      </svg>

      <div className="flex justify-between mt-4 px-4 text-xs text-charcoal-500">
        {data.slice(0, 7).map((d, i) => {
          if (i % Math.ceil(data.length / 7) !== 0 && i !== data.length - 1) return null;
          return (
            <span key={i}>
              {new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          );
        })}
      </div>
    </div>
  );
}
