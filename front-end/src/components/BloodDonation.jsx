import { useState } from 'react';
import './BloodDonation.css';
import BfrNavbar from './BfrNavbar';

function BloodDonation() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/submit-blood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        age,
        bloodType,
        location,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <BfrNavbar />
      <section className="header">
        <div className="wrapper">
          <div className="card">
            <div className="title">
              <h2>Blood Donation Form</h2>
            </div>
            <div className="form-content">
              <form onSubmit={handleSubmit} id="bloodDonationForm">
                <div className="input_wrap">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" name="fullName" id="fullName" placeholder="Enter your full name" required onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="input_wrap">
                  <label htmlFor="age">Age</label>
                  <input type="number" name="age" id="age" placeholder="Enter your age" required onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="input_wrap">
                  <label htmlFor="bloodType">Blood Type</label>
                  <input type="text" name="bloodType" id="bloodType" placeholder="Enter your blood type" required onChange={(e) => setBloodType(e.target.value)} />
                </div>
                <div className="input_wrap">
                  <label htmlFor="location">Location</label>
                  <input type="text" name="location" id="location" placeholder="Enter your location" required onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="input_wrap">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <input type="submit" className="button" value="Donate Now" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BloodDonation;