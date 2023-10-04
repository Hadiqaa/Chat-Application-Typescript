import express, { Router } from 'express';
import AttachmentController from '../controllers/attachment.controller';

const router: Router = express.Router();

router.post('/attachments', AttachmentController.createAttachment);
router.get('/attachments/message/:message_id', AttachmentController.getAttachmentsByMessageId);

export default router;
