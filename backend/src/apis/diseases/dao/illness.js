const Illness = require('../models/illness');

async function getAllIllness() {
	try {
		let result = await Illness.findAll();
		console.log(result);
		return result;
	} catch (error) {
		throw error;
	}
}

async function getIllnessByName(name) {
	try {
		let result = await Illness.findOne({attributes: ['id'], where: {illness_name: name}});
		return result;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getAllIllness,
	getIllnessByName
}