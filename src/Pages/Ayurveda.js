import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Ayurveda.css";
import { Helmet } from "react-helmet-async";

const Ayurveda = () => {
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
        <div className="search-filter-container">
          <div className="sort-container">
            <select
              className="sorting"
              onChange={(e) => sortArray(e.target.value)}
            >
              <option selected disabled>
                Sort By :
              </option>
              <option value="popularity">Popularit</option>
              <option value="e_high_to_low">Experience : High to Low</option>
              <option value="e_low_to_high">Experience : Low to High</option>
              <option value="o_high_to_low">Total orders : High to Low</option>
              <option value="o_low_to_high">Total orders : Low to High</option>
              <option value="p_high_to_low">Price : High to Low</option>
              <option value="p_low_to_high">Price : Low to High</option>
              <option value="r_high_to_low">Rating : High to Low</option>
            </select>
          </div>
          <div className="filter-container">
            {/* Button trigger modal */}
            <img src="./images/filter.webp" alt="filter-icon" />
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
            <img src="./images/search.webp" alt="search-icon" />
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
                      <img src="./images/expert.webp" alt="image" />
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
                  <img src="./images/expert.webp" alt="image" />
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
                  <img src="./images/expert.webp" alt="image" />
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
                  <img src="./images/expert.webp" alt="image" />
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
