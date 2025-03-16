import React from 'react';
import { Link } from 'react-router-dom';
import './Donate.css';

function Donate() {
  return (
    <>
      <section className="dheader">
        <div className="dtext-box">
          <h1>
            Fostering Hope: Join Us in Making a Difference Through Donation
          </h1>
        </div>
      </section>
      <section id="donations" className="donations">
        <div className="dcontainer">
          <div className="row mb-10">
            <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up">
              <div className="dcard flex-row">
                <div className="dcard-body flex-grow-1">
                  <h5 className="dcard-title">Medicine Donation</h5>
                  <p className="dcard-text">
                    Help make a difference in someone's life by donating unused medicines. Your donation can provide vital support to those in need, improving access to healthcare and saving lives.
                    <br /><br />
                    <strong>What can you donate?</strong>
                    <ul>
                      <li>Pain relievers (e.g., ibuprofen, acetaminophen)</li>
                      <li>Antibiotics</li>
                      <li>Antihistamines</li>
                      <li>Vitamins and supplements</li>
                      <li>Prescription medications</li>
                      <li>Over-the-counter medications</li>
                    </ul>
                    <br /><br />
                    <strong>Conditions for Donation:</strong>
                    <ul>
                      <li><strong>Unexpired:</strong> Ensure that the medicines have not expired. We can only accept donations of medicines that have a valid shelf life.</li>
                      <li><strong>Sealed Packaging:</strong> Medicines should be in their original, sealed packaging to ensure safety and efficacy.</li>
                      <li><strong>Quantity:</strong> While every donation counts, we encourage donations of full unopened packages or bottles to maximize impact.</li>
                      <li><strong>Prescription Medications:</strong> Prescription medications should be donated with the original prescription label intact.</li>
                      <li><strong>Storage Conditions:</strong> Medicines should have been stored properly according to their packaging instructions.</li>
                      <li><strong>Safety:</strong> Please ensure that donated medicines are safe for use, and avoid donating any medications that have been tampered with or are otherwise compromised.</li>
                    </ul>
                  </p>
                  <Link to ="/MedForm" className="btn btn-primary">Donate Now</Link>
                </div>
                <img src="../imgs/meddon.jpg" className="dcard-img-right" alt="Medicine Donation" style={{ width: '50%', objectFit: 'cover' }}/>
              </div>
            </div>
          </div>
          <div className="row mb-4">
           <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
             <div className="dcard flex-row">
               <div className="dcard-body flex-grow-1">
                 <h5 className="dcard-title">Medical Equipment Donation</h5>
                 <p className="dcard-text">
                   Support healthcare facilities and accessibility by donating medical equipment such as wheelchairs, nebulizers, etc. Your donation can make a significant difference in improving healthcare services.
                   <br /><br />
                   <strong>What can you donate?</strong>
                   <ul>
                     <li>Wheelchairs</li>
                     <li>Crutches</li>
                     <li>Nebulizers</li>
                     <li>Hospital beds</li>
                     <li>Medical monitors</li>
                     <li>Walking aids (e.g., canes, walkers)</li>
                   </ul>
                   <br /><br />
                   <strong>Conditions for Donation:</strong>
                   <ul>
                     <li><strong>Functional:</strong> Ensure that the equipment is in working condition and suitable for use.</li>
                     <li><strong>Clean and Sanitized:</strong> Thoroughly clean and sanitize the equipment before donation to maintain hygiene standards.</li>
                     <li><strong>Complete:</strong> Donate equipment with all necessary accessories and components.</li>
                     <li><strong>Good Condition:</strong> Donate equipment that is in good condition without significant damage or wear.</li>
                     <li><strong>Safe:</strong> Ensure that donated equipment meets safety standards and does not pose any hazards to users.</li>
                   </ul>
                 </p>
                 <Link to ="/MedEquipment" className="btn btn-primary">Donate Now</Link>
               </div>
               <img src="../imgs/medequip.jpg" className="dcard-img-right" alt="Medical Equipment Donation" style={{ height: '20%', objectFit: 'cover' }}/>
             </div>
           </div>
         </div>
         <div className="row mb-4">
           <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up">
             <div className="dcard flex-row">
               <div className="dcard-body flex-grow-1">
                 <h5 className="dcard-title">Blood Donation</h5>
                 <p className="dcard-text">
                   Make a life-saving difference by donating blood. Your blood donation can provide critical support to patients in need, particularly those undergoing surgeries, facing medical emergencies, or living with chronic conditions.
                   <br /><br />
                   <strong>Why donate blood?</strong>
                   <ul>
                     <li><strong>Saves Lives:</strong> Your blood donation can help save the lives of accident victims, surgical patients, and individuals with medical conditions that require blood transfusions.</li>
                     <li><strong>Supports Healthcare:</strong> Blood donations are essential for maintaining an adequate supply of blood for hospitals and healthcare facilities.</li>
                     <li><strong>Community Impact:</strong> By donating blood, you're directly contributing to the well-being of your community and helping ensure that blood is available when needed most.</li>
                   </ul>
                   <br /><br />
                   <strong>Conditions for Donation:</strong>
                   <ul>
                     <li><strong>Health Status:</strong> Donors should be in good health and free from any illnesses or infections at the time of donation.</li>
                     <li><strong>Age:</strong> Donors must typically be between the ages of 18 and 65, although age requirements may vary by location.</li>
                     <li><strong>Weight:</strong> Donors must meet minimum weight requirements, usually around 110 pounds or 50 kilograms.</li>
                     <li><strong>LifeStyle Factors:</strong> Certain lifestyle factors, such as recent travel to specific regions or high-risk behaviors, may affect eligibility to donate blood.</li>
                     <li><strong>Identification:</strong> Donors are typically required to provide a valid form of identification</li>
                   </ul>
                   By donating blood, you're making a tangible difference in the lives of others and contributing to the health and well-being of your community. Schedule your blood donation today and help save lives.                 </p>
                   <Link to ="/BloodDonation" className="btn btn-primary">Donate Now</Link>
               </div>
               <img src="../imgs/blooddon.jpg" className="dcard-img-right" alt="Blood Donation" style={{ width: '50%', objectFit: 'cover' }}/>
             </div>
           </div>
         </div>
       </div>
     </section>
    </>
   )
}
export default Donate;

