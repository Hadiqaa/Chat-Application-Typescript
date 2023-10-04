'use strict';

import { QueryInterface, DataTypes, Sequelize } from 'sequelize';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      group_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      creator_id : {
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
