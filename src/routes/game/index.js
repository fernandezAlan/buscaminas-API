import express from 'express';
import { getOrCreateGame,saveGame } from '../../controllers/gameControllers.js';

const router = express.Router();

router.get('/:ID',getOrCreateGame)
router.post('/',saveGame)
export default router