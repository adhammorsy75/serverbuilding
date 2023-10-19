const { Schema } = require('mongoose')


const postSchema = new Schema({
  username: { type : Schema.Types.ObjectId, ref: 'users',},
  reply :{type : String }

});

module.exports = postSchema
