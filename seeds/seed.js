// const express = require('express');
// const User = require('../models/user');
// const router = express.Router();

// // Handle signup logic
// router.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.create({ username, password });
//     console.log('User registered:', user);
//     res.redirect('/login.html'); // Redirect to the login page
//   } catch (error) {
//     console.error(error);
//     res.redirect('/signup.html'); // Redirect back to the signup page on error
//   }
// });

// // Handle login logic
// router.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Replace the following with your login logic
//   // Check if the username and password match a user in your database
//   // If the login is successful, redirect to the dashboard or protected route
//   // If it fails, consider showing an error message or redirecting back to the login page
//   // Example code:
//   if (username === 'exampleUser' && password === 'examplePassword') {
//     res.redirect('/dashboard.html'); // Redirect to the new index file (dashboard.html)
//   } else {
//     res.redirect('/login.html'); // Redirect back to the login page on login failure
//   }
// });

// module.exports = router;