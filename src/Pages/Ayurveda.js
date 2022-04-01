import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Ayurveda.css";

const Ayurveda = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadDocsData();
  }, []);

  const loadDocsData = async () => {
    const response = await axios.get("");
    if (response.status === 200) {
      setData(response.data);
    } else {
      console.log("Something went wrong");
    }
  };

  const sortArray = (type) => {};

  return (
    <>
      <div className="ayurveda-container">
        <div className="search-filter-container">
          <div className="sort-container">
            <select
              className="sorting"
              onChange={(e) => sortArray(e.target.value)}
            >
              <option selected disabled>
                Sort By :
              </option>
              <option value="Popularity">Popularity</option>
              <option value="Experience : High to Low">
                Experience : High to Low
              </option>
              <option value="Experience : Low to High">
                Experience : Low to High
              </option>
              <option value="Total orders : High to Low">
                Total orders : High to Low
              </option>
              <option value="Total orders : Low to High">
                Total orders : Low to High
              </option>
              <option value="Price : High to Low">Price : High to Low</option>
              <option value="Price : Low to High">Price : Low to High</option>
              <option value="Rating : High to Low">Rating : High to Low</option>
            </select>
          </div>
          <div className="filter-container">
            {/* Button trigger modal */}
            <img src="./images/filter.png" alt="filter-icon" />
            <button
              type="button"
              class="btn btn-primary filter-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Filter
            </button>
          </div>
          <div className="search-container">
            <img src="./images/search.png" alt="search-icon" />
            <input
              type="text"
              placeholder="Search Doctor Name"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="doc-profile-container">
          {data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => (
              // card
              <div className="card">
                <div className="top">
                  <div className="left">
                    <div className="img-cont">
                      <img src="./images/expert.png" alt="image" />
                    </div>
                    <div className="rating">4.5</div>
                  </div>
                  <div className="right">
                    <h3>Name</h3>
                    <div className="skills">
                      <div>Skills</div>
                      <div>Skills</div>
                      <div>Skills</div>
                    </div>
                    <h4>English</h4>
                  </div>
                </div>
                <div className="bottom">
                  <div className="exp">Exp: 20 Yrs.</div>
                  <button className="call-btn">Call</button>
                </div>
              </div>
            ))}

          {/* card */}
          <div className="card">
            <div className="top">
              <div className="left">
                <div className="img-cont">
                  <img src="./images/expert.png" alt="image" />
                </div>
                <div className="rating">4.5</div>
              </div>
              <div className="right">
                <h3>Name</h3>
                <div className="skills">
                  <div>Skills</div>
                  <div>Skills</div>
                  <div>Skills</div>
                </div>
                <h4>English</h4>
              </div>
            </div>
            <div className="bottom">
              <div className="exp">Exp: 20 Yrs.</div>
              <button className="call-btn">Call</button>
            </div>
          </div>
          {/* card */}
          <div className="card">
            <div className="top">
              <div className="left">
                <div className="img-cont">
                  <img src="./images/expert.png" alt="image" />
                </div>
                <div className="rating">4.5</div>
              </div>
              <div className="right">
                <h3>Name</h3>
                <div className="skills">
                  <div>Skills</div>
                  <div>Skills</div>
                  <div>Skills</div>
                </div>
                <h4>English</h4>
              </div>
            </div>
            <div className="bottom">
              <div className="exp">Exp: 20 Yrs.</div>
              <button className="call-btn">Call</button>
            </div>
          </div>
          {/* card */}
          <div className="card">
            <div className="top">
              <div className="left">
                <div className="img-cont">
                  <img src="./images/expert.png" alt="image" />
                </div>
                <div className="rating">4.5</div>
              </div>
              <div className="right">
                <h3>Name</h3>
                <div className="skills">
                  <div>Skills</div>
                  <div>Skills</div>
                  <div>Skills</div>
                </div>
                <h4>English</h4>
              </div>
            </div>
            <div className="bottom">
              <div className="exp">Exp: 20 Yrs.</div>
              <button className="call-btn">Call</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ayurveda;
