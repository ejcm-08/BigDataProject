import React from 'react';
import heroImage from '../Content/Images/rari.jpg';
import './home.css';

function HomePage() {
  return (
    <div className='container'>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className='hero-headline'>Main Headline</h1>
          <p className='hero-headline-sub'>
            BTN POP is a music and video event which brings together talents in the province of Bataan in a multi-media affair. <br /> <br /> 
            SONGS submitted by local songwriters interpreted by upcoming home-grown artists, featured in a MUSIC VIDEO directed by local filmmakers, will all lead up to an exciting LIVE EVENT!
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;