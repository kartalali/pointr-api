import { Router } from 'express';
import { createSite, getSite, deleteSite } from '../controllers/siteController';

const router = Router();

router.post('/', createSite);
router.get('/:id', getSite);
router.delete('/:id', deleteSite);

export default router;