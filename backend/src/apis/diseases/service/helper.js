const illness = require('../dao/illness');
const errorhandle = require('../../../config/dberrorHandle');

const getIllnessNames = async function getIllnessNames(req, res) {
    try {
        const illnessNames = await illness.getAllIllness();
        if(illnessNames.length === 0){
            const errorMsg = "No illness found";
			throw res.status(404).json({ status: 404, type: "error", message: errorMsg });
        }
        return illnessNames;
    } catch (e) {
        console.log(JSON.stringify({event: 'illness', method: 'getIllnessNames', error: e.stack}));
        const errorResponse = errorhandle.handleDbError(e);
        return errorResponse;
    }
};

module.exports = {
    getIllnessNames
}