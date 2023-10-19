const { Schema } = require('mongoose')


const postSchema = new Schema({
  post: {type : String },
  content: {type : String },
  username: { type : Schema.Types.ObjectId, ref: 'users',}
});

module.exports = mongoose.model('post', postSchema);
