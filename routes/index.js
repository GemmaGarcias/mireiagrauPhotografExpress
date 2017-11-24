const express = require('express')
const router = express.Router()

const getSessions = require('./handlers/getSessions')

const addSession = require('./handlers/addSession')
const getSessionById = require('./handlers/getSessionById')
const removeSessionById = require('./handlers/removeSessionById')
const putImages = require('./handlers/putImages')

router.get('/gallery', getSessions)

router.post('/new', addSession)
router.get('/gallery/:id', getSessionById)
router.put('/gallery/newimages/:id', putImages)
router.delete('/session/:id', removeSessionById)


module.exports = router