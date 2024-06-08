import './MedEquipment.css';
import BfrNavbar from './BfrNavbar';

function MedEquipment() {
  return (
    <>
      <BfrNavbar />
      <section className="header">
        <div className="wrapper">
          <div className="card">
            <div className="title">
              <h2>Medical Equipment Donation Form</h2>
            </div>
            <div className="form-content">
              <form method="post" action="submit_equipment.php" id="equipmentDonationForm">
                <div className="input_wrap">
                  <label htmlFor="equipmentName">Equipment Name</label>
                  <input type="text" name="equipmentName" id="equipmentName" placeholder="Enter the equipment name" required />
                </div>
                <div className="input_wrap">
                  <label htmlFor="quantity">Quantity</label>
                  <input type="number" name="quantity" id="quantity" placeholder="Enter the quantity" required />
                </div>
                <div className="input_wrap">
                  <label htmlFor="condition">Condition</label>
                  <input type="text" name="condition" id="condition" placeholder="Describe the condition" required />
                </div>
                <div className="input_wrap">
                  <label htmlFor="location">Location</label>
                  <input type="text" name="location" id="location" placeholder="Enter your location" required />
                </div>
                <div className="input_wrap">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="Enter your email" required />
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
