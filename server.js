const express = require('express');
const logger = require('morgan')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser')
const db = require('./db');


app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.urlencoded( { extended: true}))



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))