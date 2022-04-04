import express from 'express';
import game from './game/index.js'
const router = express.Router();

router.use("/game", game);

export default router