import React from 'react'
import "./Footer.css";
import googl_logo from '../img/Vector (1).png'
import stars from '../img/star.png'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="googleback">
            <img src={googl_logo} alt="" className="googl_logo" />
            <div className="rating">
              <div className="rating_content">
                <p className="rating-value">5.0</p>
                <img src={stars} alt="" className="rating_stars" />
              </div>
            <p className='review'>Based on 106 reviews</p>
            </div>
        </div>
        <ul className="footer_list">
          <li className="footer_desk">Grow your career</li>
          <li className="footer_desk">Build a team</li>
        </ul>
        <ul className='footer_last'>
          <li className="footer_desk">Meet the founders</li>
          <li className="footer_desk">Mentorship</li>
          <li className="footer_desk">Say hello</li>
        </ul>
        </div>
    </div>
  )
}
 