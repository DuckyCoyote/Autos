const express = require("express");

const Autos = require("./autos.js");
const Servicio = require("./servicio.js");
const Inicio = require("./inicio.js");
const Login = require("./login.js");
const Logout = require("./logout.js");

function routerApi(app, sesion) {
	const router = express.Router();
	app.use(router);
	router.use("/", Inicio);
	router.use("/login", Login);
	router.use(sesion);
	router.use("/autos", Autos);
	router.use("/servicio", Servicio);
	router.use("/logout", Logout);
}

module.exports = routerApi;
