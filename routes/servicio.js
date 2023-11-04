const express = require('express');

const router = express.Router();

const ServicioService = require('../services/servicio.service.js');

const service = new ServicioService();

router.get('/', async (req, res, next) => {
	try {
		const servicio = await service.findAll();
		res.json(servicio);
	} catch (error) {
		console.log(error)
	}
})

router.get('/:id', async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		const servicio = await service.findOne(id);
		res.json(servicio);
	} catch (error) {
		console.log(error)
	}
})

router.post('/', async (req, res, next) => {
	try {
		const data = req.body;
		const servicio = await service.create(data);
		res.json(servicio)
	} catch (error){
		console.error(error);
	}
})

module.exports = router;
