const express = require('express');
const {models} = require('../db/sequelize.js');

class AutoService {
	async findAll(){
		const autos = await models.Auto.findAll();
		return autos;
	}

	async findOne(id) {
		const auto = await models.Auto.findByPk(id);
		return auto;
	}

	async create(data) {
		const auto = await models.Auto.create(data);
		return auto;
	}

	async update(id, data) {
		const auto = await this.findOne(id)
		const autoPatched = await auto.update(data);
		return autoPatched;
	}

	async delete(id) {
		const auto = await this.findOne(id);
		const autoDeleted = await auto.destroy();
	}
}

module.exports = AutoService;
