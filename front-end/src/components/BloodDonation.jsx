BloodDonation.jsx

import './BloodDonation.css';
import BfrNavbar from './BfrNavbar';
function BloodDonation(){
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
                  <form method="post" action="submit_blood.php" id="bloodDonationForm">
                    <div className="input_wrap">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" name="fullName" id="fullName" placeholder="Enter your full name" required />
                    </div>
                    <div className="input_wrap">
                      <label htmlFor="age">Age</label>
                      <input type="number" name="age" id="age" placeholder="Enter your age" required />
                    </div>
                    <div className="input_wrap">
                      <label htmlFor="bloodType">Blood Type</label>
                      <input type="text" name="bloodType" id="bloodType" placeholder="Enter your blood type" required />
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
export default BloodDonation;
