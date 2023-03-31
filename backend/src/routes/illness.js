const router = require('express').Router()
const illness = require('../apis/diseases/api/illness');
const {contentTypeJSON, reponseData} = require('../common/common');

router.get('/illness', getAllDisease)

async function getAllDisease(req, res) {
    try {
        const diseasesInfo = await illness.getAllIllnessName(req, res);
        return reponseData(res, 200, contentTypeJSON, diseasesInfo);
    } catch (error) {
        console.log(error);
    }
}
module.exports = router;