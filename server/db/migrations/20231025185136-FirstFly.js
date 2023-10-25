'use strict';

const { AutoSchema, AUTO_TABLE } = require('../models/auto.js');
const { ServicioSchema, SERVICIO_TABLE } = require('../models/servicio.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(AUTO_TABLE, AutoSchema);
    await queryInterface.createTable(SERVICIO_TABLE, ServicioSchema);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(AUTO_TABLE);
    await queryInterface.dropTable(SERVICIO_TABLEr);
  }
}
