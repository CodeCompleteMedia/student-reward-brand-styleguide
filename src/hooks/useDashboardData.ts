import { useState, useEffect } from 'react';
import { supabase, DashboardMetric, AnalyticsData, ActivityLog } from '../lib/supabase';

export function useDashboardMetrics() {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const { data, error } = await supabase
          .from('dashboard_metrics')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;
        setMetrics(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch metrics');
      } finally {
        setLoading(false);
      }
    }

    fetchMetrics();
  }, []);

  return { metrics, loading, error };
}

export function useAnalyticsData(days: number = 30) {
  const [data, setData] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const { data, error } = await supabase
          .from('analytics_data')
          .select('*')
          .order('date', { ascending: true })
          .limit(days);

        if (error) throw error;
        setData(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch analytics');
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, [days]);

  return { data, loading, error };
}

export function useActivityLogs(limit: number = 10) {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLogs() {
      try {
        const { data, error } = await supabase
          .from('activity_logs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(limit);

        if (error) throw error;
        setLogs(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch activity logs');
      } finally {
        setLoading(false);
      }
    }

    fetchLogs();
  }, [limit]);

  return { logs, loading, error };
}
