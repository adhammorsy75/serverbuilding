const db = require('../db')
const { Post, User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {

    const user = await User.find()

const posts = [
    {
        username: user[0]._id,
        post : "does posting here posts"
    },

    {
        username: user[0]._id,
        post : "works"
    }

]

module.exports = posts;

await Post.insertMany(posts)
console.log("added posts")
}
const run = async () => {
await main()
db.close()
}

run()