const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/SnapDatabase')
    // Connect to the MongoDB database with the specified connection URL.
    .then(() => {
        console.log('Successfully connected to MongoDB.');
        // If the connection is successful, log a success message.
    })
    .catch(e => {
        console.error('Connection error', e.message);
        // If there's an error during the connection attempt, log an error message with the details.
    });

const db = mongoose.connection;

module.exports = db;
// Export the database connection object for use in other parts of your application.
