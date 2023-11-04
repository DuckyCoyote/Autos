"use strict";

const { AutoSchema, AUTO_TABLE } = require("../models/auto.js");
const { ServicioSchema, SERVICIO_TABLE } = require("../models/servicio.js");
const { UserSchema, USER_TABLE } = require("../models/user.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(AUTO_TABLE, AutoSchema);
    await queryInterface.createTable(SERVICIO_TABLE, ServicioSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(AUTO_TABLE);
    await queryInterface.dropTable(SERVICIO_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  },
};
