const Sequelize = require('sequelize');
require('dotenv').config();

const connetion = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_SERVICE
});

module.exports = connetion;