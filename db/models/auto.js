const { Model, Sequelize, DataTypes } = require('sequelize');

const AUTO_TABLE = 'auto';

const AutoSchema = {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true
	}
}

class Auto extends Model {
	static associate(models) { }

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
