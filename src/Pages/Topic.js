import React, { useState, useEffect } from "react";
import "./Topic.css";
import astro from "../components/images/astro.png";
import Cards from "../components/Cards";
import { useParams } from "react-router-dom";
import { referData } from "../data";
import axios from "axios";
import PopularTopics from "../components/PopularTopics";
import ReactMarkdown from "react-markdown";

const Topic = (props) => {
  const [blog, setBlog] = useState();
  const [relatedPost, setRelatedPost] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) {
      getSingleBlog();
    }
  }, [id]);

  const getSingleBlog = async () => {
    const response = await axios.get(
      `https://3l41sc9lla.execute-api.ap-south-1.amazonaws.com/production/blog/${id}`
    );
    const relatedPostData = await axios.get(
      `https://3l41sc9lla.execute-api.ap-south-1.amazonaws.com/production/blogs/category/${response.data.category}`
    );
    if (response.status === 200 || relatedPostData.status === 200) {
      setBlog(response.data);
      setRelatedPost(relatedPostData.data);
    } else {
      console.log("Something went wrong");
    }
  };

  const handleLike = async () => {
    const response = await axios.post(
      `https://3l41sc9lla.execute-api.ap-south-1.amazonaws.com/production/blog/${id}/like`
    );
    if (response.status === 200) {
      console.log("like successful");
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      <div className="main">
        <PopularTopics />
        <div className="blog-detail">
          <h1>{blog && blog.title}</h1>
          <div className="blog-img">
            <img src={blog && blog.image} alt="image" />
          </div>
          {/* <p>{blog && blog.description}</p> */}
          <ReactMarkdown className="file">
            {blog && blog.markdown}
          </ReactMarkdown>

          <div className="btn">
            <button onClick={() => handleLike()}>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div>
      </div>

      {/* comment section */}
      <div className="comment-container">
        <h3>Comments:</h3>
        <div className="comment">
          <div className="img-cont">
            <div className="img">
              <img src={astro} />
            </div>
          </div>
          <div className="text-cont">
            <h4>Name</h4>
            <h5>2 days ago</h5>
            <p>
              Lorem ipsum dolor sit amet, consec te Lorem ipsum dolor sit amet,
              consec te
            </p>
          </div>
        </div>
        <div className="comment">
          <div className="img-cont">
            <div className="img">
              <img src={astro} />
            </div>
          </div>
          <div className="text-cont">
            <h4>Name</h4>
            <h5>2 days ago</h5>
            <p>
              Lorem ipsum dolor sit amet, consec te Lorem ipsum dolor sit amet,
              consec te
            </p>
          </div>
        </div>
      </div>

      {/* interesting topic section */}
      {relatedPost &&
        relatedPost.length > 0 &&
        relatedPost.filter((item) => item._id != id) && (
          <div className="interest-cont">
            <h3>Topics might intrust you</h3>
            <Cards card={props.card} data={relatedPost} />
          </div>
        )}
    </>
  );
};

export default Topic;
