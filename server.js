const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
const app = express();

mongoose.connect('mongodb://localhost/auth_demo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Include your routes
app.use('/auth', authController);

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});


// Serve the login and signup HTML files
app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/login.html');
  });
  
  app.get('/signup.html', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
  });
  