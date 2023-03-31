const diseases = require('../models/illness');

async function getAllDiseases() {
	try {
		let result = await diseases.findAll();
		return result;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getAllDiseases
}