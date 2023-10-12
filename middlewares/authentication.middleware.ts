// import { Request, Response, NextFunction } from 'express';
// import jwt, { Secret } from 'jsonwebtoken';
// import  User from '../models/user.model'; // Make sure to import the User model from the correct location


// const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   let token: string | undefined;

//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       token = req.headers.authorization.split(' ')[1];

//       const decoded: any = jwt.verify(token, process.env.JWT_SECRET as Secret); // Adjust the type of 'decoded' based on your JWT payload structure
//       req.user = await User.findById(decoded.id).select('password');
//       next();
//     } catch (error) {
//       res.status(401);
//       throw new Error('Not authorized, token has failed');
//     }
//   }

//   if (!token) {
//     res.status(401);
//     throw new Error('Not authorized, no token');
//   }
// };

// export { protect };
