import React, { useState, useEffect } from "react";
import "./Topic.css";
import astro from "../components/images/astro.png";
import Cards from "../components/Cards";
import { useParams } from "react-router-dom";
import { referData } from "../data";
import axios from "axios";
import PopularTopics from "../components/PopularTopics";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import Comment from "../components/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Topic = (props) => {
  const myRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const executeScroll = () => myRef.current.scrollIntoView();

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
    const response = await axios.put(
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
      <Helmet>
        <title>Single Blog</title>
        <meta
          name="description"
          content="This page contains longform blogs for various ayurvedic treatments and recipes which will help you with better healthcare to lead a fruitful life ahead."
        />
        <link rel="canonical" href={`/topic/${id}`} />
      </Helmet>

      <div className="main">
        <PopularTopics />
        <div className="blog-detail">
          <h1>{blog && blog.title}</h1>
          <div className="blog-img">
            <img src={blog && blog.image} alt="image" />
          </div>
          <ReactMarkdown className="file">
            {blog && blog.markdown}
          </ReactMarkdown>

          <div className="btn">
            <button className="like-btn" onClick={() => handleLike()}>
              <svg width={0} height={0}>
                <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                  <stop offset={0} stopColor="rgba(191, 227, 195,1)" />
                  <stop offset={1} stopColor="rgba(122, 193, 132,1)" />
                </linearGradient>
              </svg>
              <FavoriteIcon
                className="as"
                sx={{ fill: "url(#linearColors)" }}
              />
            </button>

            <button className="like-btn" onClick={() => executeScroll()}>
              <svg width={0} height={0}>
                <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                  <stop offset={0} stopColor="rgba(191, 227, 195,1)" />
                  <stop offset={1} stopColor="rgba(122, 193, 132,1)" />
                </linearGradient>
              </svg>
              <ChatBubbleIcon
                className="as"
                sx={{ fill: "url(#linearColors)" }}
              />
            </button>

            <button className="like-btn" onClick={() => handleLike()}>
              <svg width={0} height={0}>
                <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                  <stop offset={0} stopColor="rgba(191, 227, 195,1)" />
                  <stop offset={1} stopColor="rgba(122, 193, 132,1)" />
                </linearGradient>
              </svg>
              <TelegramIcon
                className="as"
                sx={{ fill: "url(#linearColors)" }}
              />
            </button>

            <button className="like-btn" onClick={() => handleLike()}>
              <svg width={0} height={0}>
                <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                  <stop offset={0} stopColor="rgba(191, 227, 195,1)" />
                  <stop offset={1} stopColor="rgba(122, 193, 132,1)" />
                </linearGradient>
              </svg>
              <BookmarkIcon
                className="as"
                sx={{ fill: "url(#linearColors)" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* comment section */}
      {blog && (
        <Comment myRef={myRef} comments={blog.comments} id={blog && blog._id} />
      )}
      {/* interesting topic section */}
      {relatedPost &&
        relatedPost.length > 0 &&
        relatedPost.filter((item) => item.slug != id) && (
          <div className="interest-cont">
            <h3>Topics might intrust you</h3>
            <Cards card={props.card} data={relatedPost} />
          </div>
        )}
    </>
  );
};

export default Topic;
