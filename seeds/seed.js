const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://localhost/auth_demo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userData = [
  { username: 'admin', password: 'admin' },
  // Add more user data here
];

async function seedDB() {
  try {
    await User.insertMany(userData);
    console.log('Users inserted successfully.');
  } catch (err) {
    console.error(err);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

seedDB();
