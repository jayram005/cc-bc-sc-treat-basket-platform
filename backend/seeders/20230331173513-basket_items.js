'use strict';
const basketItems = require('../masterPrerequisitData/basket_Item.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('basket_items', basketItems);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('basket_items', null, {});
  }
};
