const Illness = require('../models/illness');

async function getAllIllness() {
	try {
		let result = await Illness.findAll();
		return result;
	} catch (error) {
		throw error;
	}
}

async function getIllnessByName(name, res) {
	try {
		let result = await Illness.findOne({attributes: ['id'], where: {illness_name: name}});
		if(!result || result === null){
			const errorMsg = `${name} Illness not eligible`;
			throw res.status(400).json({ status: 400, type: "error", message: errorMsg });
		}
		return result;
	} catch (error) {
		const errorMsg = `Error in fetching the illnesses`;
		throw res.status(500).json({ status: 500, type: "error", message: errorMsg });
	}
}

module.exports = {
	getAllIllness,
	getIllnessByName
}