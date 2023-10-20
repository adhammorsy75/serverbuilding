const db = require('../db'); // Import the database connection module (assuming '../db' contains your MongoDB connection setup)

const { Post, User } = require('../models'); // Import the Post and User models (assuming they are defined in '../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:')); // Handle MongoDB connection errors

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
    ];

    // The following line is incorrectly placed here; it should typically be at the top of your JavaScript file to export modules.
    module.exports = users;

    await User.insertMany(users); // Insert the 'users' array into the 'User' collection in MongoDB
    console.log("added users"); // Log a message indicating that users have been added
}

const run = async () => {
    await main(); // Call the 'main' function to add users
    db.close(); // Close the MongoDB connection when done
}

run(); // Call the 'run' function to start the process

// Note: The module.exports line should typically be placed at the top of your JavaScript file to export any modules you want to make available to other parts of your application.
