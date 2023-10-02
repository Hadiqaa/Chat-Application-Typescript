import { Model, DataTypes, Sequelize } from 'sequelize';
import  User from './user.model'; // Import the User model (adjust the import path as needed)
import  Message from './message.model'; // Import the Message model (adjust the import path as needed)

interface AttachmentsModelAttributes {
  file_Url: string;
  file_Name: string;
  message_id: number;
  creator_id: number;
}

interface AttachmentsModelCreationAttributes extends AttachmentsModelAttributes {}

class Attachments extends Model<AttachmentsModelAttributes, AttachmentsModelCreationAttributes> {
  public file_Url!: string;
  public file_Name!: string;
  public message_id!: number;
  public creator_id!: number;

  // Define associations and other methods as needed

  public static associate(models: any): void {
    Attachments.belongsTo(models.User, {
      foreignKey: 'creator_id',
      as: 'user',
    });

    Attachments.belongsTo(models.Message, {
      foreignKey: 'message_id',
      as: 'message',
    });
  }
}

export function initAttachmentsModel(sequelize: Sequelize): void {
  Attachments.init(
    {
      file_Url: DataTypes.STRING,
      file_Name: DataTypes.STRING,
      message_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Message,
          key: 'id',
        },
      },
      creator_id: {
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
      modelName: 'Attachments',
    }
  );
}

export default Attachments;
