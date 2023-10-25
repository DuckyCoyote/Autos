const { Model, Sequelize, DataTypes } = require('sequelize');

const AUTO_TABLE = 'auto';

const AutoSchema = {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	placas: {
		type: DataTypes.STRING,
		unique: true
	},
	marca: {
		type: DataTypes.STRING,
	},
	año: {
		type: DataTypes.STRING
	},
	modelo: {
		type: DataTypes.STRING,
	},
}

class Auto extends Model {
	static associate(models) {
		this.hasMany(models.Servicio, { foreignKey: 'idAuto', as: 'Auto' })
	}

	static config(sequelize) {
		return {
			sequelize,
			tableName: AUTO_TABLE,
			modelName: 'Auto',
			timestamps: false
		}
	}
}

module.exports = { Auto, AutoSchema, AUTO_TABLE }
