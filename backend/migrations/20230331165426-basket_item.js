'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      "basket_items",
      {
          item_id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.SMALLINT,
              field: 'item_id'
          },
          item_name: {
              type: Sequelize.STRING(25),
              allowNull: false,
              field: 'item_name'
          },
          item_description: {
              type: Sequelize.STRING(200),
              allowNull: false,
              field: 'item_description'
          },
          age_group: {
              type: Sequelize.ENUM("0-5","6-10","11-16"),
              allowNull: false,
              field: 'age_group'
          }
      },
      { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('basket_items');
  }
};
