import { Request, Response } from 'express';
import  * as AuthService from '../services/auth.service';

const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const { user, token } = await AuthService.loginUser(email, password);
    res.status(200).json({ user, token, status: 200 });
  } catch (error :any ) {
    res.status(400).json({ error: error.message });
  }
};

const register = async (req: Request, res: Response): Promise<void> => {
  const { userName, fullName, email, password } = req.body;

  try {
    const { user, token } = await AuthService.registerUser(
      userName,
      fullName,
      email,
      password
    );

    res.status(201).json({ user, token, status: 201 });
  } catch (error :any) {
    res.status(400).json({ error: error.message });
  }
};

export { login, register };