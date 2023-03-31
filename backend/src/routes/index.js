const express = require('express'),
    router = express.Router()

router.use('/', require('./illness'));
router.use('/', require('./orders'));
module.exports = router;