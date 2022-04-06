import React from "react";
import Blog from "../components/Blog";
import { Helmet } from "react-helmet-async";

const BlogPage = (props) => {
  return (
    <>
      <Helmet>
        <title>GurujiVeda</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/blog" />
      </Helmet>

      <Blog card={props.card} />
    </>
  );
};

export default BlogPage;
