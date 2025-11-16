-- Dashboard Schema Setup
-- 
-- 1. New Tables
--    - dashboard_metrics: Store KPI metrics with change tracking
--    - activity_logs: Track user activities and actions
--    - analytics_data: Store time-series analytics data
--    - user_profiles: Extended user profile information
--
-- 2. Security
--    - Enable RLS on all tables
--    - Policies for authenticated users to access data
--
-- 3. Indexes
--    - Performance indexes on frequently queried columns

-- Create dashboard_metrics table
CREATE TABLE IF NOT EXISTS dashboard_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  value numeric NOT NULL DEFAULT 0,
  change_percentage numeric DEFAULT 0,
  change_direction text DEFAULT 'neutral' CHECK (change_direction IN ('up', 'down', 'neutral')),
  icon text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE dashboard_metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view dashboard metrics"
  ON dashboard_metrics
  FOR SELECT
  TO authenticated
  USING (true);

-- Create activity_logs table
CREATE TABLE IF NOT EXISTS activity_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  action text NOT NULL,
  action_type text NOT NULL CHECK (action_type IN ('create', 'update', 'delete', 'view')),
  entity_type text,
  entity_id uuid,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own activity logs"
  ON activity_logs
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own activity logs"
  ON activity_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create analytics_data table
CREATE TABLE IF NOT EXISTS analytics_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL UNIQUE,
  visitors integer DEFAULT 0,
  page_views integer DEFAULT 0,
  revenue numeric DEFAULT 0,
  conversions integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE analytics_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view analytics"
  ON analytics_data
  FOR SELECT
  TO authenticated
  USING (true);

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL DEFAULT '',
  avatar_url text DEFAULT '',
  role text DEFAULT 'user' CHECK (role IN ('admin', 'manager', 'user')),
  department text DEFAULT '',
  preferences jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_activity_logs_user_created 
  ON activity_logs(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_analytics_data_date 
  ON analytics_data(date DESC);

CREATE INDEX IF NOT EXISTS idx_activity_logs_entity 
  ON activity_logs(entity_type, entity_id);

-- Insert sample dashboard metrics
INSERT INTO dashboard_metrics (title, value, change_percentage, change_direction, icon)
VALUES 
  ('Total Revenue', 45231.89, 20.1, 'up', 'DollarSign'),
  ('Active Users', 2350, 180.1, 'up', 'Users'),
  ('Page Views', 12234, 19, 'up', 'Eye'),
  ('Conversion Rate', 3.42, -4.3, 'down', 'TrendingUp')
ON CONFLICT DO NOTHING;

-- Insert sample analytics data for the past 30 days
INSERT INTO analytics_data (date, visitors, page_views, revenue, conversions)
SELECT 
  CURRENT_DATE - (n || ' days')::interval,
  floor(random() * 1000 + 500)::integer,
  floor(random() * 5000 + 2000)::integer,
  (random() * 2000 + 1000)::numeric(10,2),
  floor(random() * 50 + 10)::integer
FROM generate_series(0, 29) AS n
ON CONFLICT (date) DO NOTHING;