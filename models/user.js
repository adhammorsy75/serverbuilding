const { Schema } = require('mongoose')


const postSchema = new Schema({
  username:{type : String },
  password:{type : String }
});

module.exports = mongoose.model('User', userSchema);
