'use strict';

import { QueryInterface, DataTypes, Sequelize } from 'sequelize';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, sequelize: Sequelize) {
      await queryInterface.createTable('Attachments', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        file_Url: {
          allowNull: false,
          type: DataTypes.STRING
        },
        file_Name: {
          type: DataTypes.STRING
        },
        creator_id : {
          type: DataTypes.INTEGER.UNSIGNED ,
          allowNull: false,
        },
        message_id : {
          type: DataTypes.INTEGER.UNSIGNED ,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
      });
  },

  async down (queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.dropTable('Attachments');
  }
};
