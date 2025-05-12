import React from 'react';
import './newspage.css';

function NewsPage() {
  return (
    <div className="news-container">
      <section className="weekly-highlight">
        <h2 className="section-title">Weekly Highlight</h2>
        <div className="highlight-card">
          <div className="highlight-image">
            <img src="https://via.placeholder.com/600x400" alt="Weekly Highlight" />
          </div>
          <div className="highlight-content">
            <h3>BTN Association, as represented by Sir Gabriel Jessie Guevarra, participated in the Balanga City's Creative Burst Workshop.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare ipsum sit amet urna feugiat, venenatis venenatis neque viverra.</p>
            <p>Fusce nulla risus, tristique nec mollis consequat, blandit sed est. Sed vehicula nibh eu nunc tristique, quis feugiat quam hendrerit.</p>
            <span className="date">Date: January 1 2025</span>
          </div>
        </div>
      </section>

      <section className="latest-news">
        <h2 className="section-title">Latest News</h2>
        <div className="news-grid">
          <div className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News 1" />
            <h4>BTN Association, as represented by Sir Gabriel Jessie Guevarra, participated in the Balanga City's Creative Burst Workshop.</h4>
            <span className="date">Date: January 1 2025</span>
          </div>
          <div className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News 2" />
            <h4>BTN Association, as represented by Sir Gabriel Jessie Guevarra, participated in the Balanga City's Creative Burst Workshop.</h4>
            <span className="date">Date: January 1 2025</span>
          </div>
          <div className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News 3" />
            <h4>BTN Association, as represented by Sir Gabriel Jessie Guevarra, participated in the Balanga City's Creative Burst Workshop.</h4>
            <span className="date">Date: January 1 2025</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsPage;