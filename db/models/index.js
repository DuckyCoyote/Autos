const { Usuario, UsuarioSchema } = require('./usuario.js');
const { Auto, AutoSchema } = require('./auto.js');

const setupModels = (sequelize) => {
	Auto.init(AutoSchema, Auto.config(sequelize))
	Usuario.init(UsuarioSchema, Usuario.config(sequelize));
}

module.exports = setupModels;
