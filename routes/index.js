const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const uploadFolderPath = path.join( global.__base, process.env.UPLOAD_FOLDER )
const upload = multer({
  dest: uploadFolderPath
})

// ---------------SESSIONS API
const uploadCloudinary = require('./handlers/uploadCloudinary')

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

router.post('/upload', upload.single('file'), uploadCloudinary, (req, res) => {
	const {imageLink} =req
	res.status(200).json({imageLink})
})

// -----------------MESSAGE API

const addMessage = require('./handlersMessage/addMessage')
const getMessages =require('./handlersMessage/getMessages')

router.post('/newmessage', addMessage)

router.get('/getmessages', getMessages)

module.exports = router