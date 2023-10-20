const { Schema } = require('mongoose')


const repliesSchema = new Schema({
  username: { type : Schema.Types.ObjectId, ref: 'users',},
  reply :{type : String }

});

module.exports = repliesSchema
