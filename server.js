const express = require('express');
const logger = require('morgan')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser')
const db = require('./db');
const uController = require("./controllers/usersController")
const rController = require("./controllers/repliesController")
const pController = require("./controllers/postsController")

app.use(express.urlencoded( { extended: true}))

app.use(cors())

app.use(logger('dev'))

app.use(bodyParser.json())

app.get('/post', pController.viewPosts)

app.get('/replies', rController.viewReplies)

app.get('/user', uController.viewUsers)

app.post('/post', pController.post)

app.post('/replies', rController.reply)

app.post('/user', uController.user)

app.delete('/post/:id', pController.deletePost)

app.delete('/replies/:id', rController.deleteReply)

app.delete('/user/:id', uController.deleteUser)

app.put('/post/:id', pController.editPost)

app.put('/replies/:id', rController.editReply)

app.put('/users/:id', uController.editUser)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))