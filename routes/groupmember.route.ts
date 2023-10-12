import express, { Router } from 'express';
import * as GroupMembers from '../controllers/groupmembers.controller';

const router: Router = express.Router();

router.post('/group-participants/add', GroupMembers.addUsertoGroup);
router.delete('/group-participants/remove', GroupMembers.removeUserFromGroup);

export default router;
