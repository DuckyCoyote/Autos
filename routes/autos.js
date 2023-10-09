const express = require('express');

const router = express.Router();

const AutoService = require('../services/auto.service.js');

const service = new AutoService();

router.get('/', async (req, res, next) => {
	try {
		const autos = service.FindAll();
		res.json(autos);
	} catch (error) {
		console.log(error)
	}
})

module.exports = router;
