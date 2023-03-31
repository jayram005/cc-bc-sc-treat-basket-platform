
function reponseData(statusCode, headers, body) {
    const response = {
    };
    if (statusCode) {
      response.statusCode = statusCode;
    }
    if (headers) {
      response.headers = headers;
    }
    response.headers['Access-Control-Allow-Origin'] = '*'; // Required for CORS support to work
    response.headers['Access-Control-Allow-Credentials'] = true; // Required for cookies, authorization headers with HTTPS
  
    if (body) {
      response.body = JSON.stringify(body);
    }
    return response;
}

const contentTypeJSON = { 'content-type': 'application/json' };

module.exports = {
    contentTypeJSON,
    reponseData
};