const db = require('../db')
const { Post, User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {

const users = [
    {
        username: "Snaptest1",
        password: "snap1"
    },

    {
        username: "Snaptest2",
        password: "snap2"
    }

]


module.exports = users;

await User.insertMany(users)
console.log("added users")
}
const run = async () => {
await main()
db.close()
}

run()