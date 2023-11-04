const express = require("express");
const { models } = require("../db/sequelize.js");

class UserService {
  async findAll() {
    const user = await models.User.findAll();
    return user;
  }

  async findByEmail(email) {
    const user = await models.User.findOne(email);
    return user;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    return user;
  }

  async create(data) {
    const user = await models.User.create(data);
    return user;
  }

  async update(id, data) {
    const user = await this.findOne(id);
    const userPatched = await user.update(data);
    return userPatched;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return user;
  }
}

module.exports = UserService;
