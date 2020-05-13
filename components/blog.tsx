import React from "react";
import Layout from "./layout";
import { PostProps } from "../public/helpers/interfaces";
import BlogList from "./blogList";

const Blog: React.FC<PostProps> = ({ data, slugs }) => {
  return (
    <Layout id="blog">
      <div className="row" id="headerBlog">
        <div className="col-12">
          <h1> Checkout my latest articles </h1>
        </div>
      </div>
      <div className="projects px-2 pt-4 row" id="blogContainer">
        <BlogList data={data} slugs={slugs} />
      </div>
    </Layout>
  );
};

export default Blog;
