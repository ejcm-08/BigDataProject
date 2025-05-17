import React, { useEffect, useRef } from 'react';
import './newspage.css';
import rari from '../Content/Images/haha.jpg';

function NewsPage() {
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
      <section className="news_hero" ref={heroRef}>
        <div className="news_hero__content">
          <p className='news_hero__description'>
            BTN POP is a music and video event which brings together talents in the province of Bataan in a multi-media affair.
            SONGS submitted by local songwriters interpreted by upcoming home-grown artists, featured in a MUSIC VIDEO directed by local filmmakers, will all lead up to an exciting LIVE EVENT!
          </p>
        </div>
      </section>

      <main className="news">
        <div className="news__grid">
          <section className="feature">
            <h2 className="feature__title">Weekly Highlight</h2>
            <article className="feature__card">
              <img src={rari} alt="Weekly Highlight" className="feature__image" />
              <div className="feature__content">
                <h3 className="feature__heading">BTN Association, as represented by Sir Gabriel Jessie Guevarra, participated in the Balanga City's Creative Burst Workshop.</h3>
                <time className="feature__date">January 1 2025</time>
              </div>
            </article>
          </section>

          <section className="trending">
            <h2 className="trending__title">Trending News</h2>
            <div className="trending__list">
              {[1, 2, 3].map((item) => (
                <article key={item} className="trending__card">
                  <div className="trending__image-wrapper">
                    <img src={rari} alt={`Trending ${item}`} className="trending__image" />
                  </div>
                  <div className="trending__content">
                    <h4 className="trending__heading">BTN Association, as represented by Sir Gabriel Jessie Guevarra, participated in the Balanga City's Creative Burst Workshop.</h4>
                    <time className="trending__date">January 1 2025</time>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="latest">
          <h2 className="latest__title">Latest News</h2>
          <div className="latest__grid">
            {[1, 2, 3].map((item) => (
              <article key={item} className="latest__card">
                <img src={rari} alt={`News ${item}`} className="latest__image" />
                <div className="latest__content">
                  <h4 className="latest__heading">BTN Association, as represented by Sir Gabriel Jessie Guevarra, participated in the Balanga City's Creative Burst Workshop.</h4>
                  <time className="latest__date">January 1 2025</time>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default NewsPage;