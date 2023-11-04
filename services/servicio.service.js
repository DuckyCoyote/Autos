const express = require('express');
const {models} = require('../db/sequelize.js');

class ServicioService {
	async findAll(){
		const servicio = await models.Servicio.findAll({
			include: [
        {
          association: "Auto",
          attributes: ["placas"]
        } 
      ],
      order: [['fecha', 'DESC']],
    });
		return servicio;
	}
	
	async findOne(id) {
		const servicio = await models.Servicio.findByPk(id);
		return servicio;
	}

	async create(data) {
		const servicio = await models.Servicio.create(data);
		return servicio;
	}

	async update(id, data) {
		const servicio = await this.findOne(id)
		const servicioPatched = await auto.update(data);
		return servicioPatched;
	}

	async delete(id) {
		const servicio = await this.findOne(id);
		const servicioDeleted = await auto.destroy();
	}
}

module.exports = ServicioService;
