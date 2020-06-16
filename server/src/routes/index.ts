import { Router } from 'express';
import { apiRoutes } from './api';

const router = Router();

export default router.use('/api', apiRoutes);
