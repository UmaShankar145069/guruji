import React from "react";
import RatingStars from "../components/RatingStars";
import "./Profile.css";
import { Helmet } from "react-helmet-async";
import Modal from "../components/Modal";

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Doctors Page</title>
        <meta
          name="description"
          content="XXX is an authentic ayurveda clinic having treatment from different naturalistic and holistic approaches. A lot of people ask me about Ayurvedic treatment and ayurveda doctors. I have therapy in India and follow Indian methodologies of medicine. I must say here, good doctors can be found ."
        />
        <link rel="canonical" href="/profile" />
      </Helmet>

      <div className="profile-section">
        <div className="top">
          <div className="left">
            <div className="img-cont">
              <img src="/images/expert.png" alt="image" />
            </div>
            <h1>Name</h1>
          </div>
          <div className="middle">
            <div className="follow">
              <p>Following</p>
              <strong>1.5K</strong>
            </div>
            <div className="served">
              <p>Served</p>
              <strong>300+</strong>
            </div>
          </div>
          <div className="right">
            <div className="skill">
              <h3>Skills: </h3>
              <div className="skill-cont">
                <div className="sk">ki</div>
                <div className="sk">lo</div>
                <div className="sk">kp</div>
                <div className="sk">ki</div>
                <div className="sk">lo</div>
                <div className="sk">kp</div>
                <div className="sk">ki</div>
                <div className="sk">lo</div>
                <div className="sk">kp</div>
                <div className="sk">ki</div>
                <div className="sk">lo</div>
                <div className="sk">kp</div>
              </div>
            </div>
            <div className="experience">
              <h3> Expereince:</h3>
            </div>
            <div className="lang">
              <h3>Languages:</h3>
              <div className="lang-cont">
                <div className="la">jkkiii</div>
                <div className="la">jkkiii</div>
                <div className="la">jkkiii</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="video-cont">
            <h3>Start Video</h3>
            <p>40 Rs/Min</p>
          </div>
          <div className="call-cont">
            <h3>Start Video</h3>
            <p>40 Rs/Min</p>
          </div>
        </div>
      </div>

      {/* Bio section */}
      <div className="bio-section">
        <hr></hr>
        <div className="bio-cont">
          <h3>Bio :</h3>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, Lorem ipsum dolor sit amet, consec tetur
            adipiscing elit. Nam condimentum tempus diam, Lorem ipsum dolor sit
            amet, consec tetur adipiscing elit. Nam condimentum tempus diam,
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, Lorem ipsum dolor sit amet, consec tetur
            adipiscing elit. Nam condimentum tempus diam.
          </p>
        </div>
      </div>

      {/* Images section */}
      <div className="images-section">
        <div className="cont">
          <h3>Images</h3>
          <div className="img-cont">
            <div className="img">
              <img src="/images/expert.png" alt="images" />
            </div>
            <div className="img">
              <img src="/images/expert.png" alt="images" />
            </div>
            <div className="img">
              <img src="/images/expert.png" alt="images" />
            </div>
            <div className="img">
              <img src="/images/expert.png" alt="images" />
            </div>
            <div className="img">
              <img src="/images/expert.webp" alt="images" />
            </div>
            <div className="img">
              <img src="/images/expert.webp" alt="images" />
            </div>
          </div>
          <hr />
        </div>
      </div>

      {/*Review section  */}
      <div className="reviews-container">
        <div className="user-reviews">
          <h3>Reviews</h3>
          {/* review card */}
          <div className="review">
            <div className="img-section">
              <div className="user-img">
                <img src="/images/expert.webp" />
              </div>
            </div>
            <div className="user-review">
              <div className="rating">
                <RatingStars />
              </div>
              <div className="review-date">DD/MM/YYYY</div>
              <div className="review-text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
                condimentum tempus diam.
              </div>
            </div>
          </div>
          {/* review card */}
          <div className="review">
            <div className="img-section">
              <div className="user-img">
                <img src="/images/expert.webp" />
              </div>
            </div>
            <div className="user-review">
              <div className="rating">
                <RatingStars />
              </div>
              <div className="review-date">DD/MM/YYYY</div>
              <div className="review-text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
                condimentum tempus diam.
              </div>
            </div>
          </div>
          {/* review card */}
          <div className="review">
            <div className="img-section">
              <div className="user-img">
                <img src="/images/expert.webp" />
              </div>
            </div>
            <div className="user-review">
              <div className="rating">
                <RatingStars />
              </div>
              <div className="review-date">DD/MM/YYYY</div>
              <div className="review-text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
                condimentum tempus diam.
              </div>
            </div>
          </div>
        </div>
        <div className="make-reviews">
          <div className="review-graph">
            <img src="/images/review-image.webp" alt="review-graph" />
          </div>
          {/* <button>Make Reviews</button> */}
          <Modal />
        </div>
      </div>
    </>
  );
};

export default Profile;
