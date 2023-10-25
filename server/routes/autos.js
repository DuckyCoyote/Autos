const express = require('express');

const router = express.Router();

const AutoService = require('../services/auto.service.js');

const service = new AutoService();

router.get('/', async (req, res, next) => {
	try {
		const autos = await service.findAll();
		res.json(autos);
	} catch (error) {
		console.log(error)
	}
})

router.get('/:id', async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		const auto = await service.findOne(id);
		res.json(auto);
	} catch (error) {
		console.log(error)
	}
})

router.post('/', async (req, res, next) => {
	try {
		const data = req.body;
		const auto = await service.create(data);
		res.json(auto)
	} catch (error){
		console.error(error);
	}
})

router.patch('/:id', async (req, res, next) => {
	try {
		let { id } = req.params;
		id = parseInt(id);	
		const data = req.body;
		const auto = await service.update(id, data);
		res.json(auto)
	} catch (error){
		console.error(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		let { id } = req.params;
		id = parseInt(id);		 
		const auto = await service.delete(id);
		res.json(auto);
	} catch (error) {
		console.error(error);
	}
})

module.exports = router;
