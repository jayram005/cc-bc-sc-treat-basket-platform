'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      "illness_item_mappings",
      {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
              field: 'id',
          },
          illness_id: {
              type: Sequelize.SMALLINT,
              allowNull: false,
              field: 'illness_id',
              references: {
                  model: "illnesses", 
                  key: 'id', 
              }
          },
          item_id: {
              type: Sequelize.SMALLINT,
              allowNull: false,
              field: 'item_id',
              references: {
                  model: "basket_items", 
                  key: 'item_id',
              }
          }
      },
      { timestamps: false }
      ,{
          indexes: [
            {
              unique: true,
              fields: ['illness_id', 'item_id'] 
            }
          ]
      }
  );
  await queryInterface.addIndex('illnesses', ['id']);
  await queryInterface.addIndex('basket_items', ['item_id']);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('illness_item_mappings');
  }
};
