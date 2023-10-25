const { Auto, AutoSchema } = require('./auto.js');
const { Servicio, SERVCIO_TABLE, ServicioSchema } = require('./servicio.js')

const setupModels = (sequelize) => {
	Auto.init(AutoSchema, Auto.config(sequelize));
	Servicio.init(ServicioSchema, Servicio.config(sequelize));

	Auto.associate(sequelize.models);
	Servicio.associate(sequelize.models);
}

module.exports = setupModels;
