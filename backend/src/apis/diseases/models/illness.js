const { Sequelize, DataTypes } = require('sequelize');
const database = require('../../../config/database');

const illness = database.config.define('illness', {
    id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		field: 'id'
	},
    illness_name: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'illness_name'
	},

}, { timestamps: false });

illness.sync().then();

module.exports = illness;