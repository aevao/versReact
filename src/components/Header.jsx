import React from "react";
import "./Header.css";
import photo from "../img/IMAGE.png"
import photo2 from "../img/IMAGE (1).png"
import monzo from "../img/monzo.png"
import delivero from "../img/delivero.png"
import zoopla from "../img/zoopla.png"
import mooopig from "../img/moonping.png"
import depop from "../img/depop.png"
import buble from "../img/bumble.png"

export const Header = () => {
  return (
    <div>
      <header>
        <div className="block_right">

        <h1 className="header_title">Discover, nurture, bloom</h1>

        <p className="header_info">Product & Engineering Recruitment</p>
        <p className="header_info">
          va va bloom, with a human touch and a dash of
        </p>
        </div>
        <div className="block_left">
          <img src={photo2} alt="" className="photo2" />
          <img src={photo} alt="" className="photo1" />
        </div>
      </header>
      <ul className="header_list">
        <li className="header__desk"><img src={monzo} alt="" className="information" /></li>
        <li className="header__desk"><img src={delivero} alt="" className="information" /></li>
        <li className="header__desk"><img src={zoopla} alt="" className="information" /></li>
        <li className="header__desk"><img src={mooopig} alt="" className="information" /></li>
        <li className="header__desk"><img src={depop} alt="" className="information" /></li>
        <li className="header__desk"><img src={buble} alt="" className="information" /></li>
      </ul>
    </div>
  );
};
