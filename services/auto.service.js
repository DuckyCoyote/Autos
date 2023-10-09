const express = require('express');
const {models} = require('../db/sequelize.js');

class AutoService {
	async FindAll(){
		const autos = models.Auto.findAll();
		return autos;
	}
}

module.exports = AutoService;
