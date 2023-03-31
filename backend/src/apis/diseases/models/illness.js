const { Sequelize, DataTypes } = require('sequelize');
const database = require('../../../config/database');

const illness = database.config.define('illness', {
    id: {
		type: DataTypes.SMALLINT,
		autoIncrement: true,
		primaryKey: true,
		field: 'id'
	},
    illness_name: {
		type: DataTypes.STRING(25),
		allowNull: false,
		field: 'illness_name',
		unique: true
	},

}, { timestamps: false });

illness.sync().then();

module.exports = illness;