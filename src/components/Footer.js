import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3E604E",
          marginTop: "0",
        }}
      >
        <div className="footer-cont">
          <div className="footer-logo">
            <div className="logo-cont">
              <img src="/images/logo.webp" />
            </div>
            <div className="title">Guruji Veda</div>
          </div>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>How it work</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>Skin</li>
            <li>Hair</li>
            <li>Men Care</li>
            <li>Women Care</li>
            <li>Diabetes</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
