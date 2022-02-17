import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import BlogsBanner from "./BlogsBanner";
import BlogsTopBanner from "./BlogsTopBanner";

function BlogsHome() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <>
      <Header color={"#fff"} />
      <BlogsBanner />
      <BlogsTopBanner blogs={blogs} />
    </>
  );
}

export default BlogsHome;
