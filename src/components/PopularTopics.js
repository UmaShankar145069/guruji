import axios from "axios";
import React, { useState, useEffect } from "react";
import astro from "../components/images/astro.png";
import { Link } from "react-router-dom";

const PopularTopics = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const response = await axios.get(
      "https://3l41sc9lla.execute-api.ap-south-1.amazonaws.com/production/blogs/popularity"
    );
    if (response.status === 200) {
      setPopular(response.data);
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      <div className="popular-topic-cont">
        <h3>Popular topics</h3>
        {popular.length <= 3 &&
          popular.map((elem, i) => (
            <Link to={`/topic/${popular[i]._id}`} style={{ color: "black" }}>
              <div className="pop-card">
                <div className="pop-left">
                  <h4>
                    Title: <span className="text">{popular[i].title}</span>
                  </h4>
                  <h5>
                    Date:
                    <span className="text">
                      {new Date(popular[i].createdAt).toLocaleDateString()}
                    </span>
                  </h5>
                </div>
                <div className="pop-right">
                  <img src={popular[i].image} />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default PopularTopics;
