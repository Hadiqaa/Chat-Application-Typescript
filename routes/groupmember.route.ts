import express, { Router } from 'express';
import ParticipantsController from '../controllers/groupparticipants.controller';

const router: Router = express.Router();

router.post('/group-participants/add', ParticipantsController.addUserToGroup);
router.delete('/group-participants/remove', ParticipantsController.removeUserFromGroup);

export default router;
