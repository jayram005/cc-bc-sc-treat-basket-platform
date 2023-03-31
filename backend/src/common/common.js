
function reponseData(res, statusCode, headers, body) {
    res.status(statusCode).json(body)
    return res;
}

const contentTypeJSON = { 'content-type': 'application/json' };

module.exports = {
    contentTypeJSON,
    reponseData
};