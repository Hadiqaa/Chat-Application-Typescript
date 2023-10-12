import { Request, Response } from 'express';
import  User from '../models';
import { updateName, getAllUsers } from '../services/user.service';

const updateUsername = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, newUsername } = req.body;
    const updatedUser = await updateName(id, newUsername);

    res.status(200).json(updatedUser);
  } catch (error :any) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.json(users); // Send the users as JSON response
  } catch (error :any) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { updateUsername, getUsers };
