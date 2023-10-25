const {Sequelize} = require("sequelize");
const setupModels = require('./models/index.js');

const USER = 'root';
const PASSWORD = '1234';
const HOST = 'localhost';
const DB = 'autos';
const PORT = '3306'

const URI = `mariadb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}`;

const sequelize = new Sequelize(URI, {
	logging: (msg) => console.log(msg)
});

setupModels(sequelize);

module.exports = sequelize;
