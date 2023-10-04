import express, { Router } from 'express';
import { Request, Response, NextFunction } from 'express';

const REACT_APP_API_VERSION: string = process.env.REACT_APP_API_VERSION || '/api/v1';
const router: Router = express.Router();

// Import route modules
import userRoute from './user.route';
import authRoute from './auth.route';
import attachmentRoute from './attachment.route';
import groupRoute from './group.route';
import messageRoute from './message.route';
import groupmemberRoute from './groupmember.route';

const routes = [
  userRoute,
  authRoute,
  attachmentRoute,
  groupRoute,
  messageRoute,
  groupmemberRoute,
];

routes.forEach((route) => {
  router.use(`${REACT_APP_API_VERSION}`, route);
});

export default router;
