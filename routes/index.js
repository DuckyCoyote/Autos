const express = require('express');

const Inicio = require('./inicio.js');
const Autos = require('./autos.js');

function routerApi(app) {
	const router = express.Router();
	app.use('/v1/api', router);
	router.use('/', Inicio);
	router.use('/autos', Autos);
}

module.exports = routerApi;
