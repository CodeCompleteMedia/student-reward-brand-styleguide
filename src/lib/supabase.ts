import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DashboardMetric {
  id: string;
  title: string;
  value: number;
  change_percentage: number;
  change_direction: 'up' | 'down' | 'neutral';
  icon: string;
  created_at: string;
  updated_at: string;
}

export interface ActivityLog {
  id: string;
  user_id: string;
  action: string;
  action_type: 'create' | 'update' | 'delete' | 'view';
  entity_type: string;
  entity_id: string;
  metadata: Record<string, any>;
  created_at: string;
}

export interface AnalyticsData {
  id: string;
  date: string;
  visitors: number;
  page_views: number;
  revenue: number;
  conversions: number;
  created_at: string;
}

export interface UserProfile {
  id: string;
  full_name: string;
  avatar_url: string;
  role: 'admin' | 'manager' | 'user';
  department: string;
  preferences: Record<string, any>;
  created_at: string;
  updated_at: string;
}
