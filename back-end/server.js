// Import necessary modules
const express = require('express');
const firebaseAdmin = require('firebase-admin');
const cors = require('cors'); // Import the CORS middleware

// Initialize Express app
const app = express();

// Initialize Firebase Admin SDK
const serviceAccount = require('./svasthmaitri-firebase-adminsdk.json');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://svasthmaitri-default-rtdb.firebaseio.com/'
});

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware to enable cross-origin requests
app.use(cors());

// Define route to handle medicine form submissions
app.post('/submit-medicine', (req, res) => {
  // Extract form data from request body
  const { medicineName, quantity, location, email, expiryDate } = req.body;

  // Create a reference to the Firebase Realtime Database
  const db = firebaseAdmin.database();
  const medicineDonationsRef = db.ref('medicineDonations');

  // Push form data to the database
  medicineDonationsRef.push({
    medicineName,
    quantity,
    location,
    email,
    expiryDate
  })
    .then(() => {
      res.status(201).json({ message: 'Donation submitted successfully.' });
    })
    .catch(error => {
      console.error('Error submitting donation:', error);
      res.status(500).json({ error: 'Failed to submit donation.' });
    });
});

// Define route to handle blood donation form submissions
app.post('/submit-blood', (req, res) => {
  // Extract form data from request body
  const { fullName, age, bloodType, location, email } = req.body;

  // Create a reference to the Firebase Realtime Database
  const db = firebaseAdmin.database();
  const bloodDonationsRef = db.ref('bloodDonations');

  // Push form data to the database
  bloodDonationsRef.push({
    fullName,
    age,
    bloodType,
    location,
    email
  })
    .then(() => {
      res.status(201).json({ message: 'Donation submitted successfully.' });
    })
    .catch(error => {
      console.error('Error submitting donation:', error);
      res.status(500).json({ error: 'Failed to submit donation.' });
    });
});

// Define route to handle medical equipment form submissions
app.post('/submit-equipment', (req, res) => {
  // Extract form data from request body
  const { equipmentName, quantity, condition, location, email } = req.body;

  // Create a reference to the Firebase Realtime Database
  const db = firebaseAdmin.database();
  const equipmentDonationsRef = db.ref('equipmentDonations');

  // Push form data to the database
  equipmentDonationsRef.push({
    equipmentName,
    quantity,
    condition,
    location,
    email
  })
    .then(() => {
      res.status(201).json({ message: 'Donation submitted successfully.' });
    })
    .catch(error => {
      console.error('Error submitting donation:', error);
      res.status(500).json({ error: 'Failed to submit donation.' });
    });
});

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});