import React from "react";
import { NavLink, link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="color">Free Shopping Over $100 & Free returns</p>
            </div>
            <div className="col-6">
              <p className="text">
                Hotline: <a href="tel:252 8978656">+252 8976676</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
