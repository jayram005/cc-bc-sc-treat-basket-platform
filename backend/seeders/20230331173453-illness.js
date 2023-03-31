'use strict';
const illnessData = require('../masterPrerequisitData/illness.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('illnesses', illnessData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('illnesses', null, {});
  }
};
