import { Router } from 'express';
import authRoutes from './auth.routes.js';
import contentRoutes from './content.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/content', contentRoutes);

router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  });
});

export default router;
