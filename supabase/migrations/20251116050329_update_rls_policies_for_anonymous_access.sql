/*
  # Update RLS Policies for Anonymous Access

  1. Changes
    - Drop existing restrictive RLS policies on dashboard_metrics and analytics_data
    - Create new policies that allow anonymous (unauthenticated) users to view data
    - Maintain security while allowing public dashboard access

  2. Security
    - Read-only access for anonymous users
    - No write permissions for anonymous users
    - Data remains protected from modifications

  3. Affected Tables
    - `dashboard_metrics`: Allow anonymous SELECT
    - `analytics_data`: Allow anonymous SELECT
*/

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Anyone can view dashboard metrics" ON dashboard_metrics;
DROP POLICY IF EXISTS "Authenticated users can view analytics" ON analytics_data;

-- Create new policies for anonymous access to dashboard_metrics
CREATE POLICY "Public read access to dashboard metrics"
  ON dashboard_metrics
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create new policies for anonymous access to analytics_data
CREATE POLICY "Public read access to analytics data"
  ON analytics_data
  FOR SELECT
  TO anon, authenticated
  USING (true);
