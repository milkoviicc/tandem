import express from 'express';

import { loginUser, registerUser, getUserId } from '../controllers/userController';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getUserId', getUserId);

export default router;