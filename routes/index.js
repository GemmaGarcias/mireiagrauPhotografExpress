const express = require('express')
const router = express.Router()

const getSessions = require('./handlers/getSessions')

const addSession = require('./handlers/addSession')
const getSessionById = require('./handlers/getSessionById')
const removeSessionById = require('./handlers/removeSessionById')

router.get('/gallery', getSessions)

router.post('/new', addSession)
router.get('/gallery/:id', getSessionById)
router.delete('/session/:id', removeSessionById)

//router.get('/gallery/:gallery', getSessionsCommercial)

module.exports = router