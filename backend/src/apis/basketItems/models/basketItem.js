"use strict";
const { Sequelize, DataTypes } = require('sequelize');
const database = require('../../../config/database');

const BasketItem = database.config.define(
    "basket_item",
    {
        item_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.SMALLINT,
            field: 'item_id'
        },
        item_name: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true,
            field: 'item_name'
        },
        item_description: {
            type: DataTypes.STRING(200),
            allowNull: false,
            field: 'item_description'
        },
        age_group: {
            type: DataTypes.ENUM("0-5","6-10","11-16"),
            allowNull: false,
            field: 'age_group'
        }
    },
    { timestamps: false }
);
BasketItem.sync().then();
module.exports = BasketItem;