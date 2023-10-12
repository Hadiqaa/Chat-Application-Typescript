import { Model, DataTypes, Sequelize } from 'sequelize';

interface UserModelAttributes {

  userName: string;
  fullName: string;
  email: string;
  password: string;
}

interface UserModelCreationAttributes extends UserModelAttributes {
  // Add any optional attributes here
}

class User extends Model<UserModelAttributes, UserModelCreationAttributes> {
  public id!: number;
  public userName!: string;
  public fullName!: string;
  public email!: string;
  public password!: string;

  public static associate(models: any): void {
    User.hasMany(models.Message, {
      foreignKey: 'sender_id',
      as: 'messages',
    });

    User.hasMany(models.Groups, {
      foreignKey: 'creator_id',
      as: 'groups',
    });

    User.hasMany(models.Attachments, {
      foreignKey: 'creator_id',
      as: 'attachments',
    });

    User.hasMany(models.Group_participants, {
      foreignKey: 'user_id',
      as: 'group_participants',
    });
  }
}

export function initUserModel(sequelize: Sequelize): void {
  User.init(
    {

      userName: DataTypes.STRING,
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
}

export default User;
