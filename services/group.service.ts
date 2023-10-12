import { Model, DataTypes, Sequelize } from 'sequelize';
import GroupMembers from '../models/groupmember.model';
import Users from '../models/user.model';
import { sequelize } from '../models'; // Adjust the import path to match your project structure
import Groups from '../models/group.model';
class Group extends Model {
  public id!: number;
  public group_Name!: string;
}

Group.init(
  {
    group_Name: {
      type: DataTypes.STRING, // Adjust the data type as needed
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Groups',
  }
);

class GroupMember extends Model {
  public id!: number;
  public user_id!: number;
  public group_id!: number;
}

GroupMember.init(
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

// Function to create a new group
const createGroup = async (group_Name: string, creator_id: number): Promise<Groups> => {
  try {
    const group = await Groups.create({
      creator_id,
      group_Name,
    });
    return group;
  } catch (error) {
    console.error('Error in Creating a group', error);
    throw new Error('Error in creating a group');
  }
};

// Function to get all the groups a user is part of, including private chats
const getUsersGroups = async (user_id: number): Promise<any[]> => {
  try {
    const userGroups = await GroupMembers.findAll({
      where: { user_id },
      include: [{ model: Groups,  }],
    });
    console.log("checking grouos", userGroups);
    return userGroups.map((entry) => entry.Groups);
  } catch (error) {
    console.error('Error in getting groups of the user', error);
    throw new Error('Error in getting groups of the user');
  }
};

// Function to delete a group along with its associated messages
const deleteGroupWithMessages = async (group_id: number): Promise<{ message: string }> => {
  try {
    const deleteGroup = await Groups.destroy({
      where: { id: group_id },
    });

    if (!deleteGroup) {
      throw new Error('Group not found');
    }

    return { message: 'Group and associated messages deleted successfully' };
  } catch (error) {
    console.error('Error in deleting group and group messages', error);
    throw new Error('Error in deleting group and group messages');
  }
};

export { createGroup, getUsersGroups, deleteGroupWithMessages };

