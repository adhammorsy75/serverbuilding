const db = require('../db')
const { Post, User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {

  
    const user = await User.find()

const replies = [
    {
        username: user[0]._id,
        reply : "testing 123"
    },

    {
        username:  user[0]._id,
        reply : "testing works"
    }

]


module.exports = replies;

await User.insertMany(replies)
console.log("added replies")
}
const run = async () => {
await main()
db.close()
}

run()