import express, { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import Auth from '../middlewares/authentication.middleware';
import Validate from '../validations/user.validation';

const router: Router = express.Router();

router.post('/login', Validate.validateLogin, AuthController.login);
router.post('/register', Validate.validateRegistration, AuthController.register);

export default router;
