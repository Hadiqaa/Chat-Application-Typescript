import express, { Router } from 'express';
import Auth from '../middlewares/authentication.middleware';
import UserController from '../controllers/user.controller';

const router: Router = express.Router();

router.get('/user', UserController.getUsers);
router.put('/updatename', UserController.updateUsername);

export default router;
