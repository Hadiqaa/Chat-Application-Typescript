'use strict';

import { QueryInterface, DataTypes, Sequelize } from 'sequelize';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.createTable('GroupMembers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      group_id : {
        type: DataTypes.INTEGER.UNSIGNED ,
        allowNull: false,
      },
  
      user_id : {
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
    await queryInterface.dropTable('Groups');
  }
};
