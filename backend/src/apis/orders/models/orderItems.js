const { Sequelize, DataTypes } = require('sequelize');
const order = require('./order');
const basketItem = require('../../basketItems/models/basketItem')
const database = require('../../../config/database');

const orderItems = database.config.define('order_items', {
    order_id: {
		type: DataTypes.INTEGER,
        allowNull: false,
		field: 'order_id',
        references: {
			model: order, 
			key: 'id', 
		}
	},
	item_id: {
		type: DataTypes.SMALLINT,
		allowNull: false,
		field: 'item_id',
        references: {
			model: basketItem, 
			key: 'item_id', 
		}
	}
}, { timestamps: false });

orderItems.belongsTo(order,{
    foreignKey:"order_id",
    targetKey:"id",
    as:"order"
})

orderItems.belongsTo(basketItem,{
    foreignKey:"item_id",
    targetKey:"item_id",
    as:"basket_items"
})
module.exports = orderItems;