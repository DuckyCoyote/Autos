const express = require('express');

const Autos = require('./autos.js');
const Servicio = require('./servicio.js');

function routerApi(app) {
	const router = express.Router();
	app.use('/api/v1', router);
	router.use('/autos', Autos);
	router.use('/servicio', Servicio)
}

module.exports = routerApi;
