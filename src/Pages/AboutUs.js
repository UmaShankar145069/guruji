import React from "react";
import "./AboutUs.css";
import SwiperCard from "../components/SwiperCard";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>GurujiVeda</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/about" />
      </Helmet>

      {/* banner */}
      <div className="about-banner">
        <div className="left">
          <div className="top">
            <img src="" alt="image" />
          </div>
          <div className="top">
            <img src="" alt="image" />
          </div>
          <div>
            <img src="" alt="image" />
          </div>
          <div>
            <img src="" alt="image" />
          </div>
        </div>
        <div className="right">
          <img src="" alt="image" />
        </div>
      </div>

      {/* about us */}
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
          condimentum tempus diam, Lorem ipsum dolor sit amet, consec tetur
          adipiscing elit. Nam condimentum tempus diam, Lorem ipsum dolor sit
          amet, consec tetur adipiscing elit. Nam condimentum tempus diam, Lorem
          ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum
          tempus diam, Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
          Nam condimentum tempus diam.
        </p>
      </div>
      <hr />

      {/*why choose section*/}
      <div className="about-choose">
        <h2>Why Choose GurujiVeda</h2>
        <div className="img-container">
          <div className="cont top">
            <div className="img-cont">
              <img src="" alt="image" />
            </div>
            <h3>1. Consultancy </h3>
          </div>
          <div className="cont top">
            <div className="img-cont">
              <img src="" alt="image" />
            </div>
            <h3>1. Consultancy </h3>
          </div>
          <div className="cont">
            <div className="img-cont">
              <img src="" alt="image" />
            </div>
            <h3>1. Consultancy </h3>
          </div>
          <div className="cont">
            <div className="img-cont">
              <img src="" alt="image" />
            </div>
            <h3>1. Consultancy </h3>
          </div>
        </div>
      </div>

      {/* what user says */}
      <div className="user-review-cont">
        <h2>What Users Say</h2>
        <div className="review-cards-cont">
          <div className="review-cards">
            <SwiperCard />
          </div>
          <div className="review-text">Write your review</div>
        </div>
      </div>

      {/* video */}
      <div className="about-us-video">
        <div className="video-container">
          <video style={{ width: 100 }}></video>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
