const database = require('../../src/mysql/database');

module.exports = async function () {
	  database.config.close();
}

