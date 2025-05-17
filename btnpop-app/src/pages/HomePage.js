import React from 'react';
import heroImage from '../Content/Images/rari.jpg';
import './home.css';

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1 className='hero__title'>Main Headline</h1>
          <p className='hero__description'>
            BTN POP is a music and video event which brings together talents in the province of Bataan in a multi-media affair. <br /> <br />
            SONGS submitted by local songwriters interpreted by upcoming home-grown artists, featured in a MUSIC VIDEO directed by local filmmakers, will all lead up to an exciting LIVE EVENT!
          </p>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      <section className="home_news">
        <div className="home_news__container">
          <div className="home_news__preview">
            <div className="home_news__image-wrapper">
              <img src={newsImage} alt="News Preview" className="home_news__image" />
            </div>
            <div className="home_news__content">
              <div className="home_news__header">
                <span className="home_news__label">STAY UP TO DATE</span>
                <h2 className="home_news__title">OUR LATEST NEWS</h2>
              </div>
              <p className="home_news__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare ipsum sit amet urna feugiat, venenatis venenatis neque viverra.
              </p>
              <p className="home_news__text">
                Fusce nulla risus, tristique nec mollis consequat, blandit sed est. Sed vehicula nibh eu nunc tristique, quis feugiat quam hendrerit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="events">
        <h2 className="events__title">UPCOMING EVENTS AND IMPORTANT DATES</h2>
        <h3 className="events__subtitle">STAY TUNED!</h3>
        <div className="events__grid">
          <div className="events__card"></div>
          <div className="events__card"></div>
          <div className="events__card"></div>
        </div>
      </section>

      <section className="history">
        <h2 className="history__title">We're going to make history.</h2>
      </section>
    </>
  );
}

export default HomePage;