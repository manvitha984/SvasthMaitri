import './MedForm.css';
import BfrNavbar from './BfrNavbar';

function MedForm() {
  return (
    <>
      <BfrNavbar />
      <section className="header">
        <div className="wrapper">
          <div className="card">
            <div className="title">
              <h2>Medicines Donation Form</h2>
            </div>
            <div className="form-content">
              <form method="post" action="submit_medicine.php" id="donationForm">
                <div className="input_wrap">
                  <label htmlFor="medicineName">Medicine Name</label>
                  <input type="text" name="medicineName" id="medicineName" placeholder="Enter the medicine name" required />
                </div>
                <div className="input_wrap">
                  <label htmlFor="quantity">Quantity</label>
                  <input type="number" name="quantity" id="quantity" placeholder="Enter the quantity" required />
                </div>
                <div className="input_wrap">
                  <label htmlFor="location">Location</label>
                  <input type="text" name="location" id="location" placeholder="Enter your location" required />
                </div>
                <div className="input_wrap">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="input_wrap">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input type="date" name="expiryDate" id="expiryDate" required />
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

export default MedForm;
