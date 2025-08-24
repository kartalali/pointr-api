import { Router } from 'express';
import { importLevels } from '../controllers/levelsController';

const router = Router();

// Tekli veya çoklu level ekleme
router.post('/', importLevels);

export default router;