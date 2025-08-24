import { Router } from 'express';
import { createBuilding, getBuilding, deleteBuilding } from '../controllers/buildingController';

const router = Router();

// Yeni bina ekleme
router.post('/', createBuilding);

// Belirli bina bilgisi getirme
router.get('/:id', getBuilding);

// Bina silme
router.delete('/:id', deleteBuilding);

export default router;