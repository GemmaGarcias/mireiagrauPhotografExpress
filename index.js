const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.Promise = global.Promise

require('dotenv').load()

const routes = require('./routes')
const app = express()

app.use(cors())
app.use(express.static('public'))

const DB_URL = process.env
mongoose.connect(DB_URL, { useMongoClient: true })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(process.env.PORT)
console.log('Listening on PORT 3001...');