'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('order_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id',
      },
      order_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'order_id',
          references: {
            model: "orders", 
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
  });
  await queryInterface.addIndex('orders', ['id'], {
    name: 'orders_id_1idx'
  });
  await queryInterface.addIndex('basket_items', ['item_id'], {
    name: 'basket_idx'
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('order_items');
  }
};
