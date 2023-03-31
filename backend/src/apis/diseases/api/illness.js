const diseaseName = require('../service/helper')

module.exports.getAllDiseaseName = async (event, context) => {
	try {	
		const response = await diseaseName.getDiseaseNames();
        return 	response;
	} catch (err) {
		console.log(err);
	}
};