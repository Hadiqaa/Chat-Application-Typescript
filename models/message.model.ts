import { Model, DataTypes, Sequelize } from 'sequelize';
import  User from './user.model'; // Import the User model (adjust the import path as needed)
import  Groups from './group.model'; // Import the Groups model (adjust the import path as needed)

interface MessageModelAttributes {
  text: string;
  sender_id: number;
  reciever_id: number;
  group_id: number;
}

interface MessageModelCreationAttributes extends MessageModelAttributes {}

class Message extends Model<MessageModelAttributes, MessageModelCreationAttributes> {
  public text!: string;
  public sender_id!: number;
  public reciever_id!: number;
  public group_id!: number;

  // Define associations and other methods as needed

  public static associate(models: any): void {
    Message.belongsTo(models.User, {
      foreignKey: 'sender_id',
      as: 'user',
    });

    Message.hasMany(models.Attachments, {
      foreignKey: 'message_id',
      as: 'attachments',
    });

    Message.belongsTo(models.Groups, {
      foreignKey: 'group_id',
      as: 'groups',
    });
  }
}

export function initMessageModel(sequelize: Sequelize): void {
  Message.init(
    {
      text: DataTypes.STRING,
      sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
      },
      reciever_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Groups,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Message',
    }
  );
}

export default Message;
