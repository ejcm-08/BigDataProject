import React from 'react';
import heroImage from '../Content/Images/rari.jpg';
import newsImage from '../Content/Images/haha.jpg';
import './home.css';

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className='hero-headline-main'>Main Headline</h1>
          <p className='hero-headline subtitle'>
            BTN POP is a music and video event which brings together talents in the province of Bataan in a multi-media affair. <br /> <br />
            SONGS submitted by local songwriters interpreted by upcoming home-grown artists, featured in a MUSIC VIDEO directed by local filmmakers, will all lead up to an exciting LIVE EVENT!
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      <section className="news-section">
        <div className="news-content">
          <div className="news-preview">
            <div className="news-preview-image">
              <img src={newsImage} alt="News Preview" />
            </div>
            <div className="news-preview-text">
              <div className="news-header">
                <span className="stay-updated">STAY UP TO DATE</span>
                <h2 className="news-title">OUR LATEST NEWS</h2>
              </div>
              <p className="news-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare ipsum sit amet urna feugiat, venenatis venenatis neque viverra.
              </p>
              <p className="news-subtitle">
                Fusce nulla risus, tristique nec mollis consequat, blandit sed est. Sed vehicula nibh eu nunc tristique, quis feugiat quam hendrerit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="events-section">
        <h2>UPCOMING EVENTS AND IMPORTANT DATES</h2>
        <h3>STAY TUNED!</h3>
        <div className="events-cards">
          <div className="event-card"></div>
          <div className="event-card"></div>
          <div className="event-card"></div>
        </div>
      </section>

      <section className="history-section">
        <h2>We're going to make history.</h2>
      </section>
    </>
  );
}

export default HomePage;