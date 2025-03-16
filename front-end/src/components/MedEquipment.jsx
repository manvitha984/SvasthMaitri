import { useState } from 'react';
import './MedEquipment.css';

function MedEquipment() {
  const [equipmentName, setEquipmentName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/submit-equipment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        equipmentName,
        quantity,
        condition,
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
      <section className="header">
        <div className="wrapper">
          <div className="card">
            <div className="title">
              <h2>Medical Equipment Donation Form</h2>
            </div>
            <div className="form-content">
              <form onSubmit={handleSubmit} id="equipmentDonationForm">
                <div className="input_wrap">
                  <label htmlFor="equipmentName">Equipment Name</label>
                  <input type="text" name="equipmentName" id="equipmentName" placeholder="Enter the equipment name" required onChange={(e) => setEquipmentName(e.target.value)} />
                </div>
                <div className="input_wrap">
                  <label htmlFor="quantity">Quantity</label>
                  <input type="number" name="quantity" id="quantity" placeholder="Enter the quantity" required onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="input_wrap">
                  <label htmlFor="condition">Condition</label>
                  <input type="text" name="condition" id="condition" placeholder="Describe the condition" required onChange={(e) => setCondition(e.target.value)} />
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

export default MedEquipment;