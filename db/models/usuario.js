const {Sequelize, DataTypes, Model} = require('sequelize');

const USUARIO_TABLE = 'usuario';

const UsuarioSchema = {
	id : {
		type : DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
		unique: true
	},
	nombre: {
		type : DataTypes.STRING,
		allowNull: false,		
	},
	apellido: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
}

class Usuario extends Model {
	static associate(models) {	}

	static config(sequelize){
		return {
			sequelize,
			tableName: USUARIO_TABLE,
			modelName: 'Usuario',
			timestamps: false
		}
	}
}

module.exports = { Usuario, UsuarioSchema, USUARIO_TABLE};
