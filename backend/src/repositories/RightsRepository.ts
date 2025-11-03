import { supabase } from '../utils/supabase.js';
import type { RightCategory } from '../types/index.js';

export class RightsRepository {
  static async getAll(): Promise<RightCategory[]> {
    const { data, error } = await supabase
      .from('rights_categories')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) {
      console.error('Error fetching rights categories:', error);
      return [];
    }

    return data || [];
  }

  static async getById(id: string): Promise<RightCategory | null> {
    const { data, error } = await supabase
      .from('rights_categories')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching rights category:', error);
      return null;
    }

    return data;
  }
}
