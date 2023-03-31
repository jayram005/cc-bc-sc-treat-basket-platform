'use strict';
const illness = require('../src/apis/diseases/models/illness');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('illness', {
      id: {
      type: Sequelize.INTEGER(10),
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
      illness_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: 'illness_name'
    },
  
  }, { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
