import express from 'express';
import { getCounter, updateCounter } from '../controllers/counterController.js';
import { checkOrigin } from '../middleware/checkOrigin.js';

const router = express.Router();

router.get('/counter', checkOrigin, getCounter);
router.post('/counter', updateCounter);
export default router;