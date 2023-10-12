import express, { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
// import Auth from '../middlewares/authentication.middleware';
// import Validate from '../validations/user.validation';

const router: Router = express.Router();

router.post('/login',  AuthController.login);
router.post('/register', AuthController.register);

export default router;
