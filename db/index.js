// setting up connection to our MySQL Workbench

const { Sequelize } = require ('sequelize');

module.exports = new Sequelize(process.env.JAWSDB_URL || process.env.LOCALDB_URL);

