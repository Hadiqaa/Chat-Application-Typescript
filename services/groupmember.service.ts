
import { Model, DataTypes, Sequelize } from 'sequelize';

// Import Sequelize instance (assuming it's defined in a different file)
import { sequelize } from '../models'; // Adjust the import path to match your project structure

class GroupMembers extends Model {
  public id!: number;
  public user_id!: number;
  public group_id!: number;
}

GroupMembers.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'GroupMembers',
  }
);

// Function to add a user to a group
const addUsertoGroup = async (user_id: number, group_id: number): Promise<GroupMembers> => {
  try {
    const groupMembers = await GroupMembers.create({
      user_id,
      group_id,
    });
    return groupMembers;
  } catch (error) {
    console.error('Error! could not add user to the group', error);
    throw new Error('Error! could not add user to the group');
  }
};

// Function to remove a user from a group
const removeUserFromGroup = async (user_id: number, group_id: number): Promise<void> => {
  try {
    await GroupMembers.destroy({
      where: { user_id, group_id },
    });
  } catch (error) {
    console.error('Error! could not remove user from the group', error);
    throw new Error('Error! could not remove user from the group');
  }
};

export { addUsertoGroup, removeUserFromGroup };
