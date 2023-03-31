const diseases = require('../dao/illness');
const errorhandle = require('../../../config/dberrorHandle');

const getDiseaseNames = async function getDiseaseName() {
    try {
        const diseaseNames = await diseases.getAllDiseases();
        return diseaseNames;
    } catch (e) {
        console.log(JSON.stringify({event: 'diseases', method: 'getDiseaseNames', error: e.stack}));
        const errorResponse = errorhandle.handleDbError(e);
        return errorResponse;
    }
};

module.exports = {
    getDiseaseNames
}