const express = require('express')
const router = express.Router()
const controllers  = require('./controller/index')

router.get('/home', controllers.getHistory)
router.post('/newQuote', controllers.upsertQuote)


module.exports = router