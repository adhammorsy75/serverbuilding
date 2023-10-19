const { Schema } = require('mongoose')


const postSchema = new Schema({
  username: { type : Schema.Types.ObjectId, ref: 'users',},
  reply :{type : String }

});

module.exports = mongoose.model('reply', replySchema);
