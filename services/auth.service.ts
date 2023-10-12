import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../models'; // Adjust the import path to match your project structure
import bcrypt from 'bcrypt';
import generateToken  from '../helpers/generatetoken';


import User from '../models/user.model'; 

const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};

// Function to handle user login
const loginUser = async (email: string, password: string): Promise<{ user: User | null; token: string }> => {
  try {
    // Find the user by email
    const user = await getUserByEmail(email);

    if (!user) {
      throw new Error("User does not exist");
    }

    // Compare the provided password with the stored hashed password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid Credentials");
    }

    // Generate a JWT token
    const token = generateToken(user.id);

    // Return the user and token
    return { user, token };
  } catch (error) {
    throw error;
  }
};

const registerUser = async (
  userName: string,
  fullName: string,
  email: string,
  password: string
): Promise<{ user: User; token: string }> => {
  try {
    const user = await getUserByEmail(email);

    if (user) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = await User.create({
  
      userName,
      fullName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser.id);

    return { user: newUser, token };
  } catch (error) {
    throw error;
  }
};

export { loginUser, registerUser };