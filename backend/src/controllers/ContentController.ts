import { Request, Response } from 'express';
import { ContentService } from '../services/ContentService.js';

export class ContentController {
  static async getDepartments(req: Request, res: Response) {
    try {
      const departments = await ContentService.getDepartments();

      return res.status(200).json({
        success: true,
        data: departments,
      });
    } catch (error) {
      console.error('Get departments error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  static async getNews(req: Request, res: Response) {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const news = await ContentService.getNews(limit);

      return res.status(200).json({
        success: true,
        data: news,
      });
    } catch (error) {
      console.error('Get news error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  static async getGalleryImages(req: Request, res: Response) {
    try {
      const images = await ContentService.getGalleryImages();

      return res.status(200).json({
        success: true,
        data: images,
      });
    } catch (error) {
      console.error('Get gallery images error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  static async getStoreProducts(req: Request, res: Response) {
    try {
      const inStockOnly = req.query.inStock === 'true';
      const products = inStockOnly
        ? await ContentService.getInStockProducts()
        : await ContentService.getStoreProducts();

      return res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      console.error('Get store products error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  static async getRightsCategories(req: Request, res: Response) {
    try {
      const categories = await ContentService.getRightsCategories();

      return res.status(200).json({
        success: true,
        data: categories,
      });
    } catch (error) {
      console.error('Get rights categories error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
}
