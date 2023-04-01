
const { Sequelize, DataTypes } = require('sequelize');
const database = require('../../../config/database');

const illness = require('../../diseases/models/illness');

const Order = database.config.define('order', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		unique: true,
		primaryKey: true,
		field: 'id'
	},
	name: {
		type: DataTypes.STRING(25),
		allowNull: false,
		field: 'name'
	},
	gender: {
		type: Sequelize.ENUM,
		values: ['Male', 'Female','Other'],
		allowNull: false,
		field: 'gender'
	},
	weight: {
		type: DataTypes.STRING(6),
		allowNull: true,
		field: 'weight'
	},
	date_of_birth: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		field: 'dateOfBirth'
	},
	guardian_name: {
		type: DataTypes.STRING(25),
		allowNull: false,
		field: 'guardianName'
	},
	relation: {
		type: DataTypes.ENUM,
		values: ['Father', 'Mother','Brother', 'Sister', 'Guardian'],
		allowNull: false,
		field: 'relation'
	},
	type_of_illness: {
		type: DataTypes.STRING(25),
		allowNull: false,
		field: 'typeOfIllness',
		references: {
			model: illness, 
			key: 'illness_name', 
		}
	},
	illness_since: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		field: 'illnessSince'
	},
	symptoms: {
		type: DataTypes.JSON,
		allowNull: true,
		field: 'symptoms'
	},
	allergies: {
		type: DataTypes.JSON,
		allowNull: true,
		field: 'allergies'
	},
	medication: {
		type: DataTypes.JSON,
		allowNull: false,
		field: 'medication'
	},
	phone_number: {
		type: DataTypes.STRING(12),
		allowNull: false,
		field: 'phoneNo'
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		},
		field: 'email'
	},
	delivery_address: {
		type: DataTypes.STRING(255),
		allowNull: false,
		field: 'delivery_address'
	},
	deivery_date: {
		type: DataTypes.DATE,
		allowNull: false,
		field: 'deivery_date'
	},
	latitude: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'latitude'
	},
	logitude: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'logitude'
	},
	city: {
		type: DataTypes.STRING(25),
		allowNull: false,
		field: 'city'
	},
	state: {
		type: DataTypes.STRING(25),
		allowNull: false,
		field: 'state'
	},
	postcode: {
		type: DataTypes.STRING(7),
		allowNull: false,
		field: 'postCode'
	}   
}, { timestamps: false }, {
	indexes: [
	  {
		unique: true,
		fields: ['name', 'date_of_birth', 'phone_number']
	  }
	]
  });

Order.belongsTo(illness,{
    foreignKey:"type_of_illness",
    targetKey:"illness_name",
    as:"illness"
})

module.exports = Order;