import { Request, Response } from 'express';
import * as GroupMembers from '../services/groupmember.service';

 const addUsertoGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user_id, group_id } = req.body;
    await GroupMembers.addUsertoGroup(user_id, group_id);
    res.status(201).json({ message: 'User added to the group' });
  } catch (error :any) {
    res.status(500).json({ error: error.message });
  }
};

 const removeUserFromGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user_id, group_id } = req.body;
    await GroupMembers.removeUserFromGroup(user_id, group_id);
    res.status(200).json({ message: 'User removed from the group' });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
export { addUsertoGroup, removeUserFromGroup };