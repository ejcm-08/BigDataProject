import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import heroImage from './Content/Images/rari.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />

      <div className="hero-section">
        <div className="hero-content">
          <h1>MUSIC ✕ VIDEO FEST</h1>
          <p>
            BTN POP is a music and video event which brings together talents in the province of Bataan in a multi-media affair.
          </p>
          <p>
            SONGS submitted by local songwriters interpreted by upcoming home-grown artists, featured in a MUSIC VIDEO directed by local filmmakers, will all lead up to an exciting LIVE EVENT!
          </p>
          <button className="hero-button">WATCH INTRO</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>

      {/* For Users to Click On */}
      <div className="cards-container">
        <div className="card">
          <h3>Songwriters</h3>
          <p>Be part of the first batch of songwriters for BTN POP</p>
        </div>
        <div className="card">
          <h3>Artists</h3>
          <p>Be part of the BTN POP Album comprised of original songs chosen from the BTN POP Songwriting Competition</p>
        </div>
        <div className="card">
          <h3>Directors</h3>
          <p>Be part of history as you visualize the songs taken from the forthcoming BTN POP Album</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;