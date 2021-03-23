import { Router } from 'express';

// controllers
import RepositoriesController from '../controllers/RepositoriesController.js';

const router = new Router();

router.get('/repositories', RepositoriesController.index);
router.get('/repositories/update', RepositoriesController.update);
router.get('/repositories/get-by-id/:id', RepositoriesController.showById);
router.get('/repositories/get-by-name/:name', RepositoriesController.showByName);
router.get('/repositories/delete', RepositoriesController.delete);

export default router;