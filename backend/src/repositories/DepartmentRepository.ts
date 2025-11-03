import { supabase } from '../utils/supabase.js';
import type { Department } from '../types/index.js';

export class DepartmentRepository {
  static async getAll(): Promise<Department[]> {
    const { data, error } = await supabase
      .from('departments')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) {
      console.error('Error fetching departments:', error);
      return [];
    }

    return data || [];
  }

  static async getById(id: string): Promise<Department | null> {
    const { data, error } = await supabase
      .from('departments')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching department:', error);
      return null;
    }

    return data;
  }
}
