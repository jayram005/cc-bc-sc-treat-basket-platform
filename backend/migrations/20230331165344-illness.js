'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('illnesses', {
      id: {
      type: Sequelize.SMALLINT,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
      illness_name: {
      type: Sequelize.STRING(25),
      allowNull: false,
      field: 'illness_name',
      unique: true
    },
  
  }, { timestamps: false });
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('illnesses');
  }
};
