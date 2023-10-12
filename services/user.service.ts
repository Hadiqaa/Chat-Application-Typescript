import User from '../models/user.model';
console.log("hello",User);
// Define the User model type
interface UserModel {
  id: number;
  userName: string;
  // Add other user properties as needed
}

// Function to get a user by ID
const getUserById = async (id: number): Promise<UserModel | any> => {
  return User.findByPk(id);
};

// Function to update a user's name
const updateName = async (userId: number, newUsername: string): Promise<UserModel | null> => {
  try {
    // Find the user by their ID
    const user = await getUserById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Update the username
    user.userName = newUsername;
    await user.save();

    return user;
  } catch (error) {
    throw error;
  }
};

// Function to get all users
const getAllUsers = async (): Promise< any []> => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
};

export { getAllUsers, updateName };
 