const router = require('express').Router()
const diseases = require('../apis/diseases/api/illness');
const {contentTypeJSON, reponseData} = require('../common/common');

router.get('/illness', getAllDisease)

async function getAllDisease(req, res) {
    try {
        const diseasesInfo = await diseases.getAllDiseaseName(req, res);
        console.log(`diseasesInfo ${JSON.stringify(diseasesInfo)}`);
        return res.status(200).json(diseasesInfo);
        //return reponseData(200, contentTypeJSON, diseasesInfo);
    } catch (error) {
        console.log(error);
    }
}
module.exports = router;