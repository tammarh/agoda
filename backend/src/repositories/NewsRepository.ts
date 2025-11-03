import { supabase } from '../utils/supabase.js';
import type { NewsUpdate } from '../types/index.js';

export class NewsRepository {
  static async getRecent(limit: number = 10): Promise<NewsUpdate[]> {
    const { data, error } = await supabase
      .from('news_updates')
      .select('*')
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching news:', error);
      return [];
    }

    return data || [];
  }

  static async getById(id: string): Promise<NewsUpdate | null> {
    const { data, error } = await supabase
      .from('news_updates')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching news item:', error);
      return null;
    }

    return data;
  }
}
