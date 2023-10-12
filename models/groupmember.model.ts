import { Model, DataTypes, Sequelize } from 'sequelize';
import  Groups from './group.model'; // Import the Groups model (adjust the import path as needed)
import  User from './user.model'; // Import the User model (adjust the import path as needed)

interface GroupMembersModelAttributes {
  group_id: number;
  user_id: number;
}

interface GroupMembersModelCreationAttributes extends GroupMembersModelAttributes {}

class GroupMembers extends Model<GroupMembersModelAttributes, GroupMembersModelCreationAttributes> {
  [x: string]: any;
  public group_id!: number;
  public user_id!: number;

  // Define associations and other methods as needed

  public static associate(models: any): void {
    GroupMembers.belongsTo(models.Groups, {
      foreignKey: 'group_id',
      as: 'groups',
    });

    GroupMembers.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export function initGroupMembersModel(sequelize: Sequelize): void {
  GroupMembers.init(
    {
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Groups,
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'GroupMembers',
    }
  );
}

export default GroupMembers;
