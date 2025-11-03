/*
  # Initial Schema - Student Union Database

  1. New Tables
    - `profiles` - User profiles
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, unique, not null)
      - `full_name` (text)
      - `student_id` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `departments` - Union departments
      - `id` (uuid, primary key)
      - `name_he` (text, not null)
      - `description_he` (text, not null)
      - `icon` (text, not null)
      - `order_index` (integer, not null)
      - `created_at` (timestamptz)
    
    - `news_updates` - News and updates
      - `id` (uuid, primary key)
      - `title_he` (text, not null)
      - `content_he` (text, not null)
      - `image_url` (text)
      - `published_at` (timestamptz, not null)
      - `created_at` (timestamptz)
    
    - `gallery_images` - Gallery images
      - `id` (uuid, primary key)
      - `title_he` (text, not null)
      - `image_url` (text, not null)
      - `description_he` (text)
      - `event_date` (date, not null)
      - `created_at` (timestamptz)
    
    - `store_products` - Store products
      - `id` (uuid, primary key)
      - `name_he` (text, not null)
      - `description_he` (text, not null)
      - `price` (numeric, not null)
      - `image_url` (text, not null)
      - `in_stock` (boolean, default true)
      - `created_at` (timestamptz)
    
    - `rights_categories` - Student rights categories
      - `id` (uuid, primary key)
      - `title_he` (text, not null)
      - `description_he` (text, not null)
      - `order_index` (integer, not null)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on content tables
    - Add policies for authenticated users on profiles
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  student_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create departments table
CREATE TABLE IF NOT EXISTS departments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_he text NOT NULL,
  description_he text NOT NULL,
  icon text NOT NULL,
  order_index integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE departments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read departments"
  ON departments
  FOR SELECT
  TO public
  USING (true);

-- Create news_updates table
CREATE TABLE IF NOT EXISTS news_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_he text NOT NULL,
  content_he text NOT NULL,
  image_url text,
  published_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE news_updates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read news"
  ON news_updates
  FOR SELECT
  TO public
  USING (true);

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_he text NOT NULL,
  image_url text NOT NULL,
  description_he text,
  event_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read gallery"
  ON gallery_images
  FOR SELECT
  TO public
  USING (true);

-- Create store_products table
CREATE TABLE IF NOT EXISTS store_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_he text NOT NULL,
  description_he text NOT NULL,
  price numeric NOT NULL,
  image_url text NOT NULL,
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE store_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read products"
  ON store_products
  FOR SELECT
  TO public
  USING (true);

-- Create rights_categories table
CREATE TABLE IF NOT EXISTS rights_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_he text NOT NULL,
  description_he text NOT NULL,
  order_index integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rights_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read rights"
  ON rights_categories
  FOR SELECT
  TO public
  USING (true);
