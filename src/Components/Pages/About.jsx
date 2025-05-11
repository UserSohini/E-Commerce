import React from 'react';
import './About.css'; // Importing the CSS file
import truck from '../Assets/delivery.jpg'
import secure from '../Assets/privacy.jpg'
import back from '../Assets/returns.jpg'
import Polo from '../Assets/polo.png'
import canvas from '../Assets/canva.png'
import levis from '../Assets/levi.png'
import vog from '../Assets/vogue.jpg'
import sign from '../Assets/signox.jpg'
import Footer from './Footer/Footer';

const AboutPage = () => {
  return (
    <div className="cast">
     <div className="about-container">

      <section className="about-section">
        <h2 className="section-heading">Welcome to <img src="/logo.jpg" alt="Logo" className="logo" />   
        <span className='Title'>Logify</span> </h2>
        <p>
          At <span className='Title'>Logify</span>, we support creativity and passion. Since our founding ,
          we’ve made it our mission to bring you high-quality products at competitive prices, all from the comfort of your home.We wish to help you make your brand known to the world. What began as a small startup has grown into a trusted
          online destination for thousands of businesses . You inspire us, we inspire you.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-heading">Why Shop With Us?</h2>
        <div className="promises">
           <img src={truck} alt="T" className='benefits' />
           <img src={secure} alt="P" className='benefits'/>
           <img src={back} alt="R" className='benefits' />
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-heading">Trusted Partners</h2>
        <div className="image-row">
          <img src={Polo} alt="Image 1" className="image-icon" />
          <img src={levis} alt="Image 2" className="image-icon" />
          <img src={canvas} alt="Image 3" className="image-icon" />
          <img src={vog} alt="Image 1" className="image-icon" />
          <img src={sign} alt="Image 1" className="image-icon" />
        </div>
      </section>
     </div>
     <Footer/>
    </div>
  );
};

export default AboutPage;
