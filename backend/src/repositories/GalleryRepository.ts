import { supabase } from '../utils/supabase.js';
import type { GalleryImage } from '../types/index.js';

export class GalleryRepository {
  static async getAll(): Promise<GalleryImage[]> {
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .order('event_date', { ascending: false });

    if (error) {
      console.error('Error fetching gallery images:', error);
      return [];
    }

    return data || [];
  }

  static async getById(id: string): Promise<GalleryImage | null> {
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching gallery image:', error);
      return null;
    }

    return data;
  }
}
