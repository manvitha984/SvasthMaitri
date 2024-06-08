import "./Articlespage.css";
import BfrNavbar from './BfrNavbar.jsx';
import Footer from './Footer.jsx';
function Article(){
   return(
    <>
    <BfrNavbar></BfrNavbar>
    <section class="header">
    <div class="text-box">
            <h1 style={{paddingTop: '20px' ,fontSize :'50px'}}>Explore the latest insights, tips in our articles section.</h1>
        </div>
        </section>
    <div class="article">
        <div class="article">
            <h2 style={{fontSize:' 30px'}}>Career</h2>
            <div class="images">
                <a href="worklife.html">
                    <img src="../imgs/medicinedonation.jpg" alt="Image 1"/>
                    <div class="description">Impact of Medicines Donation</div>
                </a>
                <a href="tips.html">
                    <img src="../imgs/medicalequipment.jpg" alt="Image 2"/>
                    <div class="description">Donating Medical Equipment</div>
                </a>
            </div>
        </div>
    
        <div class="article">
            <h2 style={{fontSize: '30px'}}>Health</h2>
            <div class="images">
                <a href="mh.html">
                    <img src="../imgs/blood donation.jpg" alt="Image 3"/>
                    <div class="description">Maximizing the Impact of Blood Donation</div>
                </a>
                <a href="anx.html">
                    <img src="../imgs/community.jpg" alt="Image 4"/>
                    <div class="description">The Role of Community Support </div>
                </a>
            </div>
        </div>
    </div>
    <Footer/>
   </>
   )
}
export default Article;