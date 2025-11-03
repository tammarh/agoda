import { supabase } from '../utils/supabase.js';
import type { StoreProduct } from '../types/index.js';

export class StoreRepository {
  static async getAll(): Promise<StoreProduct[]> {
    const { data, error } = await supabase
      .from('store_products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      return [];
    }

    return data || [];
  }

  static async getInStock(): Promise<StoreProduct[]> {
    const { data, error } = await supabase
      .from('store_products')
      .select('*')
      .eq('in_stock', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching in-stock products:', error);
      return [];
    }

    return data || [];
  }

  static async getById(id: string): Promise<StoreProduct | null> {
    const { data, error } = await supabase
      .from('store_products')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching product:', error);
      return null;
    }

    return data;
  }
}
