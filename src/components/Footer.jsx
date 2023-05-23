import React from 'react'
import googl_logo from '../img/Vector (1).png'
import stars from '../img/star.png'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="googleback">
            <img src={googl_logo} alt="" className="googl_logo" />
            <div className="rating">
                <p className="rating-value">5.0</p>
                <img src={stars} alt="" className="rating_stars" />
            </div>
        </div>
    </div>
  )
}
 