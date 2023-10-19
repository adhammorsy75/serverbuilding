const mongoose = require('mongoose');
const userSchema = require('./user');
const postSchema = require('./post');
const repliesSchema = require('./replies');


const Post = mongoose.model('Post', postSchema)
const Replies = mongoose.model('Replies', repliesSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
   Post,
   Replies,
   User
}