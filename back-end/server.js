const express = require('express');
const firebaseAdmin = require('firebase-admin');
const cors = require('cors'); 

const app = express();

const serviceAccount = require('./svasthmaitri-firebase-adminsdk.json');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://svasthmaitri-default-rtdb.firebaseio.com/'
});

app.use(express.json());

app.use(cors());

app.post('/submit-medicine', (req, res) => {
  const { medicineName, quantity, location, email, expiryDate } = req.body;

  const db = firebaseAdmin.database();
  const medicineDonationsRef = db.ref('medicineDonations');

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

app.post('/submit-blood', (req, res) => {
  const { fullName, age, bloodType, location, email } = req.body;

  const db = firebaseAdmin.database();
  const bloodDonationsRef = db.ref('bloodDonations');

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

app.post('/submit-equipment', (req, res) => {
  const { equipmentName, quantity, condition, location, email } = req.body;

  const db = firebaseAdmin.database();
  const equipmentDonationsRef = db.ref('equipmentDonations');

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

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
