import React from "react";
import Blog from "../components/Blog";
import { Helmet } from "react-helmet-async";

const BlogPage = (props) => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta
          name="description"
          content="Ayurvedic blogs are a fun and entertaining way to learn ayurveda on your own time. Check out our list of the best ayurvedic blogs to get started"
        />
        <link rel="canonical" href="/blog" />
      </Helmet>

      <Blog card={props.card} />
    </>
  );
};

export default BlogPage;
