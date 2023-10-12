import { Model, DataTypes, Sequelize, StringDataType, DateDataType } from 'sequelize';
import  User from './user.model'; // Import the User model (adjust the import path as needed)

interface GroupsModelAttributes {
  id?: string;
  group_Name: string;
  creator_id: number;
}

interface GroupsModelCreationAttributes extends GroupsModelAttributes {}

class Groups extends Model<GroupsModelAttributes, GroupsModelCreationAttributes> {
  public group_Name!: string;
  public creator_id!: number;

  // Define associations and other methods as needed

  public static associate(models: any): void {
    Groups.hasMany(models.Message, {
      foreignKey: 'group_id',
      as: 'messages',
    });

    Groups.belongsTo(models.User, {
      foreignKey: 'creator_id',
      as: 'user',
    });
  }
}

export function initGroupsModel(sequelize: Sequelize): void {
  Groups.init(
    {
      group_Name: DataTypes.STRING,
      creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Groups',
    }
  );
}

export default Groups;
