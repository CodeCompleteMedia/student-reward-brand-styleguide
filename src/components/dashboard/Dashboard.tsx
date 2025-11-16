import { DashboardLayout } from './DashboardLayout';
import { Sidebar } from './Sidebar';
import { MetricCard } from './MetricCard';
import { AreaChart } from './AreaChart';
import { DataTable } from './DataTable';
import { useDashboardMetrics, useAnalyticsData } from '../../hooks/useDashboardData';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

export function Dashboard() {
  const { metrics, loading: metricsLoading } = useDashboardMetrics();
  const { data: analyticsData, loading: analyticsLoading } = useAnalyticsData(30);

  const chartData = analyticsData.map(d => ({
    date: d.date,
    value: d.visitors
  }));

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Created new report', timestamp: '2 minutes ago', status: 'completed' },
    { id: 2, user: 'Jane Smith', action: 'Updated dashboard settings', timestamp: '15 minutes ago', status: 'completed' },
    { id: 3, user: 'Bob Johnson', action: 'Exported analytics data', timestamp: '1 hour ago', status: 'completed' },
    { id: 4, user: 'Alice Williams', action: 'Failed to process payment', timestamp: '2 hours ago', status: 'failed' },
    { id: 5, user: 'Charlie Brown', action: 'Scheduled maintenance task', timestamp: '3 hours ago', status: 'pending' },
  ];

  const tableColumns = [
    { key: 'user', label: 'User', sortable: true },
    {
      key: 'action',
      label: 'Action',
      sortable: true,
    },
    { key: 'timestamp', label: 'Time', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <div className="flex items-center gap-2">
          {value === 'completed' && (
            <>
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="px-2 py-1 text-xs font-semibold bg-green-50 text-green-700 rounded-lg">Completed</span>
            </>
          )}
          {value === 'failed' && (
            <>
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="px-2 py-1 text-xs font-semibold bg-red-50 text-red-700 rounded-lg">Failed</span>
            </>
          )}
          {value === 'pending' && (
            <>
              <Clock className="w-4 h-4 text-yellow-500" />
              <span className="px-2 py-1 text-xs font-semibold bg-yellow-50 text-yellow-700 rounded-lg">Pending</span>
            </>
          )}
        </div>
      )
    },
  ];

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-headline font-bold text-charcoal-900 mb-2">Dashboard Overview</h1>
          <p className="text-charcoal-600">Welcome back! Here's what's happening with your business today.</p>
        </div>

        {metricsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-graphite-200 p-6 animate-pulse">
                <div className="h-20 bg-graphite-100 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map(metric => (
              <MetricCard
                key={metric.id}
                title={metric.title}
                value={typeof metric.value === 'number' && metric.title.includes('Revenue')
                  ? `$${metric.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  : typeof metric.value === 'number' && metric.title.includes('Rate')
                  ? `${metric.value.toFixed(2)}%`
                  : metric.value.toLocaleString()
                }
                change={metric.change_percentage}
                changeDirection={metric.change_direction}
                icon={metric.icon}
              />
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-graphite-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-headline font-bold text-charcoal-900 mb-1">Visitor Trends</h2>
                <p className="text-sm text-charcoal-600">Daily visitors over the last 30 days</p>
              </div>
              <select className="px-4 py-2 bg-vanilla-cream-50 border border-graphite-200 rounded-lg text-sm text-charcoal-700 focus:outline-none focus:ring-2 focus:ring-strong-cyan-500">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 90 days</option>
              </select>
            </div>

            {analyticsLoading ? (
              <div className="h-64 bg-graphite-50 rounded-lg animate-pulse"></div>
            ) : (
              <AreaChart data={chartData} height={280} color="#42b7bd" />
            )}
          </div>

          <div className="bg-white rounded-2xl border border-graphite-200 p-6">
            <h2 className="text-2xl font-headline font-bold text-charcoal-900 mb-6">Quick Stats</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-vanilla-cream-50 to-strong-cyan-50 rounded-xl">
                <div className="text-3xl font-headline font-bold text-charcoal-900 mb-1">
                  {analyticsData.reduce((sum, d) => sum + d.page_views, 0).toLocaleString()}
                </div>
                <div className="text-sm text-charcoal-600">Total Page Views</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-strong-cyan-50 to-vanilla-cream-50 rounded-xl">
                <div className="text-3xl font-headline font-bold text-charcoal-900 mb-1">
                  ${analyticsData.reduce((sum, d) => sum + d.revenue, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-sm text-charcoal-600">Total Revenue</div>
              </div>
              <div className="p-4 bg-graphite-50 rounded-xl">
                <div className="text-3xl font-headline font-bold text-charcoal-900 mb-1">
                  {analyticsData.reduce((sum, d) => sum + d.conversions, 0).toLocaleString()}
                </div>
                <div className="text-sm text-charcoal-600">Total Conversions</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-headline font-bold text-charcoal-900 mb-1">Recent Activity</h2>
              <p className="text-sm text-charcoal-600">Latest actions and events from your team</p>
            </div>
            <button className="px-4 py-2 text-sm font-semibold text-strong-cyan-600 hover:text-strong-cyan-700 hover:bg-strong-cyan-50 rounded-lg transition-colors">
              View All
            </button>
          </div>
          <DataTable columns={tableColumns} data={recentActivities} itemsPerPage={5} />
        </div>
      </div>
    </DashboardLayout>
  );
}
