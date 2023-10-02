import { Model, DataTypes, Sequelize } from 'sequelize';
import  Group from './group.model'; // Import the Groups model (adjust the import path as needed)
import  User from './user.model'; // Import the User model (adjust the import path as needed)

interface GroupParticipantsModelAttributes {
  group_id: number;
  user_id: number;
}

interface GroupParticipantsModelCreationAttributes extends GroupParticipantsModelAttributes {}

class GroupParticipants extends Model<GroupParticipantsModelAttributes, GroupParticipantsModelCreationAttributes> {
  public group_id!: number;
  public user_id!: number;

  // Define associations and other methods as needed

  public static associate(models: any): void {
    GroupParticipants.belongsTo(models.Groups, {
      foreignKey: 'group_id',
      as: 'groups',
    });

    GroupParticipants.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export function initGroupParticipantsModel(sequelize: Sequelize): void {
  GroupParticipants.init(
    {
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Group,
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
      modelName: 'Group_participants',
    }
  );
}

export default GroupParticipants;
