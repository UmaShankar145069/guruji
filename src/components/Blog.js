import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { navItems } from "./NavItems";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import "./Blog.css";
import Dropdown from "./Dropdown";
import astro from "./images/astro.png";
import { red } from "@mui/material/colors";
import Cards from "./Cards";
import { referData } from "../../src/data";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(9),
    background: "#E6F5E9",
    marginBottom: 0,
  },
  title: {
    paddingBottom: theme.spacing(3),
    textAlign: "center",
    color: "#34593E",
    fontFamily: "Poppins-Bold",
    fontSize: "2.5rem",
  },
}));

const Blog = (props) => {
  const [items, setItems] = useState([]);
  const [catgdown, setCatgdown] = useState(false);
  const [tabdown, setTabdown] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    loadBlogsData();
    loadPopularData();
  }, []);

  const loadBlogsData = async () => {
    const response = await axios.get(
      "https://3l41sc9lla.execute-api.ap-south-1.amazonaws.com/production/all"
    );
    if (response.status === 200) {
      console.log(response.data);
      setItems(response.data);
    } else {
      console.log("Something went wrong");
    }
  };

  const loadPopularData = async () => {
    const response = await axios.get(
      "https://3l41sc9lla.execute-api.ap-south-1.amazonaws.com/production/blogs/popularity"
    );
    if (response.status === 200) {
      console.log(response.data);
      setItems(response.data);
    } else {
      console.log("Something went wrong");
    }
  };

  // console.log("items", items);

  function catgClick() {
    if (catgdown === false) {
      setCatgdown(true);
    } else {
      setCatgdown(false);
    }
  }

  function tabClick() {
    if (tabdown === false) {
      setTabdown(true);
    } else {
      setTabdown(false);
    }
  }

  // filter item

  const filterCatogary = (categItem) => {
    console.log(categItem);
    let data = items;
    console.log(data);
    const updatedItems = data.filter((curElem) => {
      return curElem.catogary === categItem;
    });
    console.log(updatedItems);
    setItems(updatedItems);
  };

  const filterItem = (categItem) => {
    console.log(categItem);
    let data = items;
    const updatedItems = data.filter((curElem) => {
      if (curElem.popular === categItem) {
        return curElem;
      } else if (curElem.catogary === categItem) {
        return curElem;
      }
    });
    console.log(updatedItems);
    setItems(updatedItems);
  };
  return (
    <>
      {console.log(items)}
      <div maxwidth="xl" className={classes.container}>
        <Typography
          variant="h4"
          className={classes.title}
          sx={{ fontWeight: 600 }}
        >
          Blogs
        </Typography>
        <nav className="blogNav">
          <ul id="nav-items" className="nav-items">
            <li
              id="nav-item"
              className="nav-item"
              onClick={() => loadBlogsData()}
            >
              <Link to="">Most Recent</Link>
            </li>
            <li
              id="nav-item"
              className="nav-item"
              onClick={() => loadPopularData()}
            >
              <Link to="">Popular</Link>
            </li>
            <li id="nav-item" className="nav-item" onClick={catgClick}>
              <Link to="">Category</Link>
              <span>
                <img
                  src="/images/down-arrow.webp"
                  alt="arrow-icon"
                  style={{ width: 15, height: 15, transform: "rotate(-90deg)" }}
                />
              </span>
              {catgdown && <Dropdown onFilterItem={filterCatogary} />}
            </li>
            <li id="nav-item" className="nav-item" onClick={tabClick}>
              <Link to="">Tabs</Link>
              <span>
                <img
                  type="image/webp"
                  src="/images/down-arrow.webp"
                  alt="arrow-icon"
                  style={{ width: 15, height: 15, transform: "rotate(-90deg)" }}
                />
              </span>
              {tabdown && <Dropdown onFilterItem={filterCatogary} />}
            </li>
          </ul>
        </nav>
        {/* cards */}
        {console.log(items)}
        {/* {console.log(items[1].createdAt)} */}
        {items.length > 0 && <Cards card={props.card} data={items} />}
      </div>
    </>
  );
};

export default Blog;
