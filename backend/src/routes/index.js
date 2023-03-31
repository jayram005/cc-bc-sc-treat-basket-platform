const express = require('express'),
    router = express.Router()

router.use('/', require('./illness'));
module.exports = router;