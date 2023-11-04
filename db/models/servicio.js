const { Sequelize, Model, DataTypes } = require("sequelize");
const { AUTO_TABLE } = require("./auto");

const SERVICIO_TABLE = "servicio";

const ServicioSchema = {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		unique: true,
		autoIncrement: true,
	},
	descripcion: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	idAuto: {
		field: "id_auto",
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: AUTO_TABLE,
			key: "id",
		},
	},
	fecha: {
		type: DataTypes.STRING,
		allowNull: false,
	},
};

class Servicio extends Model {
	static associate(models) {
		this.belongsTo(models.Auto, { foreignKey: "idAuto", as: "Auto" });
	}

	static config(sequelize) {
		return {
			sequelize,
			tableName: SERVICIO_TABLE,
			modelName: "Servicio",
			timestamps: false,
		};
	}
}

module.exports = { SERVICIO_TABLE, ServicioSchema, Servicio };
