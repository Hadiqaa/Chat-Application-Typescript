import { Request, Response } from 'express';
// import AttachmentService from '../services/attachment.service';

// Function to create a new attachment
const createAttachment = async (req: Request, res: Response) => {
  try {
    const { fileUrl, fileName, messageId, creatorId } = req.body;
    const attachment = await AttachmentService.createAttachment(
      fileUrl,
      fileName,
      messageId,
      creatorId
    );

    res.status(201).json(attachment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get attachments by message ID
const getAttachmentsByMessageId = async (req: Request, res: Response) => {
  try {
    const { message_id } = req.params;
    const attachments = await AttachmentService.getAttachmentsByMessageId(
      message_id
    );

    res.status(200).json(attachments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createAttachment, getAttachmentsByMessageId };
