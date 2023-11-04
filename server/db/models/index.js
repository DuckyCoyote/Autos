const { Auto, AutoSchema } = require("./auto.js");
const { Servicio, ServicioSchema } = require("./servicio.js");
const { User, UserSchema } = require("./user.js");

const setupModels = (sequelize) => {
	Auto.init(AutoSchema, Auto.config(sequelize));
	Servicio.init(ServicioSchema, Servicio.config(sequelize));
	User.init(UserSchema, User.config(sequelize));

	Auto.associate(sequelize.models);
	Servicio.associate(sequelize.models);
};

module.exports = setupModels;
