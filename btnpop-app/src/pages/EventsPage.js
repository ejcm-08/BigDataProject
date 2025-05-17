import React, { useEffect, useRef } from 'react';
import './eventspage.css';
import eventImage from '../Content/Images/haha.jpg';

function EventsPage() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = hero.getBoundingClientRect();
      
      const xPos = (clientX - left) / width;
      const yPos = (clientY - top) / height;
      
      hero.style.setProperty('--mouse-x', xPos);
      hero.style.setProperty('--mouse-y', yPos);
    };

    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      <section className="events_hero" ref={heroRef}>
        <div className="events_hero__content">
          <span className="events_hero__label">UPCOMING EVENTS</span>
          <h1 className="events_hero__title">CATCH OUR EVENTS</h1>
          <p className="events_hero__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare ipsum sit amet urna feugiat, venenatis venenatis neque viverra.
          </p>
        </div>
      </section>

      <section className="upcoming-event">
        <div className="upcoming-event__container">
          <span className="upcoming-event__label">UP NEXT</span>
          <div className="upcoming-event__wrapper">
            <div className="upcoming-event__image">
              <img src={eventImage} alt="Next Event" />
              <div className="upcoming-event__overlay"></div>
            </div>
            <div className="upcoming-event__content">
              <h2 className="upcoming-event__title">EVENT A: EVENT TITLE A</h2>
              <time className="upcoming-event__date">MONTH, YEAR</time>
              <p className="upcoming-event__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare ipsum sit amet urna feugiat.
              </p>
              <button className="upcoming-event__button">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    
      <section className="more-events">
        <div className="more-events__container">
          <span className="more-events__label">More to come...</span>
          <div className="more-events__grid">
            {[1, 2, 3].map((item) => (
              <article key={item} className="event-card">
                <div className="event-card__image-wrapper">
                  <img src={eventImage} alt={`Event ${item}`} className="event-card__image" />
                  <div className="event-card__overlay">
                    <button className="event-card__button">View Details</button>
                  </div>
                </div>
                <div className="event-card__content">
                  <h4 className="event-card__title">Event {item}</h4>
                  <time className="event-card__date">Coming Soon</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsPage;