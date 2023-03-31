'use strict';

/** @type {import('sequelize-cli').Migration} */
const basketItems = require('../masterPrerequisitData/illness_item_mapping.json');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('illness_item_mappings', basketItems);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('illness_item_mappings', null, {});
  }
};
