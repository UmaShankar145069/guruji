import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Ayurveda.css";
import { Helmet } from "react-helmet-async";

const Ayurveda = () => {
  const [style, setStyle] = useState({ display: "none" });
  const [filter, setFilter] = useState({ display: "none" });
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadDocsData();
    sortArray();
  }, []);

  const loadDocsData = async () => {
    const response = await axios.get("");
    if (response.status === 200) {
      setData(response.data);
    } else {
      console.log("Something went wrong");
    }
  };

  // sort dropdown handler
  const sortDropdown = () => {
    if (style.display === "none") {
      setStyle({ display: "block" });
    } else {
      setStyle({ display: "none" });
    }
  };

  // filter dropdown handler
  const filterDropdown = () => {
    if (filter.display === "none") {
      setFilter({ display: "block" });
    } else {
      setFilter({ display: "none" });
    }
  };

  const sortArray = async (type) => {
    // const types = {
    //   popularity: "",
    //   e_high_to_low: "",
    //   e_low_to_high: "",
    //   o_high_to_low: "",
    //   o_low_to_high: "",
    //   p_high_to_low: "",
    //   p_low_to_high: "",
    //   r_high_to_low: "",
    // };
    // const sortProperty = types[type];

    const response = await axios.get("");
    if (response.status === 200) {
      setData(response.data);
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      <Helmet>
        <title>Ayurveda</title>
        <meta
          name="description"
          content="Ayurveda is a set of Indian traditional medicine, which is deeply rooted in Vedic tradition and Indian philosophy. Ayurvedic blogs which have a collection of articles on ayurveda, ayurvedic home remedies, ayurveda massages, ayurvedic beauty tips, diet, yoga and the benefits of yoga and spiritual healing alternatives"
        />
        <link rel="canonical" href="/ayurveda" />
      </Helmet>

      <div className="ayurveda-container">
        {/* <img
          className="banner-img"
          src="./images/doctors-profile-banner.png"
          alt="doctors-profile-banner"
        /> */}
        <div className="banner-img"></div>
        <div className="search-filter-container">
          <div className="container">
            <div className="sort-container">
              <button
                type="button"
                className="sort-btn"
                onMouseEnter={(e) => setStyle({ display: "block" })}
                onMouseLeave={(e) => setStyle({ display: "none" })}
                onClick={sortDropdown}
              >
                Sort By
              </button>
              <div
                className="sort-items-container"
                style={style}
                onMouseEnter={(e) => setStyle({ display: "block" })}
              >
                <h3>Sort By</h3>
                <hr />
                <ul className="sort-items">
                  <li>
                    <input
                      type="checkbox"
                      name="popular"
                      value="Popularity"
                      id="popular"
                    />
                    <label for="popular">Popularity</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="exp-h_t_l"
                      id="exp-h_t_l"
                      value="Experience : High to Low"
                    />
                    <label for="exp-h_t_l">Experience : High to Low</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="exp-l_t_h"
                      id="exp-l_t_h"
                      value="Experience : Low to High"
                    />
                    <label for="exp-l_t_h">Experience : Low to High</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="ord-h_t_l"
                      id="ord-h_t_l"
                      value="Total Orders : High to Low"
                    />
                    <label for="ord-h_t_l">Total Orders : High to Low</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="ord-l_t_h"
                      id="ord-l_t_h"
                      value="Total Orders : Low to High"
                    />
                    <label for="ord-l_t_h">Total Orders : Low to High</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="price-h_t_l"
                      id="price-h_t_l"
                      value="Price : High to Low"
                    />
                    <label for="price-h_t_l">Price : High to Low</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="price-l_t_h"
                      id="price-l_t_h"
                      value="Price : Low to High"
                    />
                    <label for="price-l_t_h">Price : Low to High</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="rating-h_t_l"
                      id="rating-h_t_l"
                      value="Rating : High to Low"
                    />
                    <label for="rating-h_t_l">Rating : High to Low</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="filter-container">
              {/* Button trigger modal */}
              {/* <img src="./images/filter.png" alt="filter-icon" /> */}
              <button
                type="button"
                className="filter-btn"
                onMouseEnter={(e) => setFilter({ display: "block" })}
                onMouseLeave={(e) => setFilter({ display: "none" })}
                onClick={filterDropdown}
              >
                Filter
              </button>
              <div
                className="filter-items-container"
                style={filter}
                onMouseEnter={(e) => setStyle({ display: "block" })}
              >
                <h3>Filter</h3>
                <hr />
                <ul className="sort-items">
                  <li>
                    <input
                      type="checkbox"
                      name="popular"
                      value="Popularity"
                      id="popular"
                    />
                    <label for="popular">Popularity</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="exp-h_t_l"
                      id="exp-h_t_l"
                      value="Experience : High to Low"
                    />
                    <label for="exp-h_t_l">Experience : High to Low</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="exp-l_t_h"
                      id="exp-l_t_h"
                      value="Experience : Low to High"
                    />
                    <label for="exp-l_t_h">Experience : Low to High</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="ord-h_t_l"
                      id="ord-h_t_l"
                      value="Total Orders : High to Low"
                    />
                    <label for="ord-h_t_l">Total Orders : High to Low</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="ord-l_t_h"
                      id="ord-l_t_h"
                      value="Total Orders : Low to High"
                    />
                    <label for="ord-l_t_h">Total Orders : Low to High</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="price-h_t_l"
                      id="price-h_t_l"
                      value="Price : High to Low"
                    />
                    <label for="price-h_t_l">Price : High to Low</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="price-l_t_h"
                      id="price-l_t_h"
                      value="Price : Low to High"
                    />
                    <label for="price-l_t_h">Price : Low to High</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="rating-h_t_l"
                      id="rating-h_t_l"
                      value="Rating : High to Low"
                    />
                    <label for="rating-h_t_l">Rating : High to Low</label>
                  </li>
                </ul>
              </div>
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
                <div className="star-img">
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                </div>
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
              <Link to="/ayurveda/profile">
                <button className="call-btn">Call</button>
              </Link>
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
                <div className="star-img">
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                </div>
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
                <div className="star-img">
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                </div>
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
                <div className="star-img">
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                </div>
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
                <div className="star-img">
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                </div>
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
                <div className="star-img">
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                  <img src="./images/star.png" alt="star-icon" />
                </div>
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
