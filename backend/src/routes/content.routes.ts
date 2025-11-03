import { Router } from 'express';
import { ContentController } from '../controllers/ContentController.js';

const router = Router();

router.get('/departments', ContentController.getDepartments);
router.get('/news', ContentController.getNews);
router.get('/gallery', ContentController.getGalleryImages);
router.get('/products', ContentController.getStoreProducts);
router.get('/rights', ContentController.getRightsCategories);

export default router;
