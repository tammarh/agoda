import { DepartmentRepository } from '../repositories/DepartmentRepository.js';
import { NewsRepository } from '../repositories/NewsRepository.js';
import { GalleryRepository } from '../repositories/GalleryRepository.js';
import { StoreRepository } from '../repositories/StoreRepository.js';
import { RightsRepository } from '../repositories/RightsRepository.js';
import type {
  Department,
  NewsUpdate,
  GalleryImage,
  StoreProduct,
  RightCategory,
} from '../types/index.js';

export class ContentService {
  static async getDepartments(): Promise<Department[]> {
    return DepartmentRepository.getAll();
  }

  static async getNews(limit?: number): Promise<NewsUpdate[]> {
    return NewsRepository.getRecent(limit);
  }

  static async getGalleryImages(): Promise<GalleryImage[]> {
    return GalleryRepository.getAll();
  }

  static async getStoreProducts(): Promise<StoreProduct[]> {
    return StoreRepository.getAll();
  }

  static async getInStockProducts(): Promise<StoreProduct[]> {
    return StoreRepository.getInStock();
  }

  static async getRightsCategories(): Promise<RightCategory[]> {
    return RightsRepository.getAll();
  }
}
