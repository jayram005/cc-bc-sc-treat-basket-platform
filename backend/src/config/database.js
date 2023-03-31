const dotenv = require('dotenv');
const Sequelize = require('sequelize');

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("@  Couldn't find .env file  @");
}

const dbConfig = {
    host: process.env.SERVER_NAME,
    port: 5432,
    dialect: 'postgres',
    logging: false,
}

const config = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, dbConfig);

module.exports.config = config;