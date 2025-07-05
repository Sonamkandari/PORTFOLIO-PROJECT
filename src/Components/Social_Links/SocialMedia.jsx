import React from 'react';
import './SocialMedia.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import mysocial from '../../assets/mysocial';

function SocialMedia() {
  return (
    <section id="social" className="social-section">
      <div className="social-title">
        <h1>My Social Links</h1>
        <img src={theme_pattern} alt="decorative pattern" />
      </div>

      <div className="social-container">
        {mysocial.map(item => (
          <a
            key={item.w_no}
            href={item.w_url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
            aria-label={item.w_name}
          >
            <img src={item.w_img} alt={item.w_name} />
            <span>{item.w_name}</span>
          </a>
        ))}
      </div>

      <div className="social-show-more">
        <p>Show More</p>
        <img src={arrow_icon} alt="show more" />
      </div>
    </section>
  );
}

export default SocialMedia;
