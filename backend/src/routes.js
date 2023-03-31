const express = require('express')
, router = express.Router()

router.use('/', require('./routes/index'))

module.exports = router