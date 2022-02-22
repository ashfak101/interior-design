import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import BlogsBanner from "./BlogsBanner";
import BlogSearch from "./BlogSearch";
import BlogsTopBanner from "./BlogsTopBanner";
import { Box } from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BlogsCourse from "./BlogsCourse";
function BlogsHome() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlog = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const pageNum = Math.ceil(blogs.length / blogsPerPage);
  const handleChange = (event, currentBlog) => {
    setCurrentPage(currentBlog);
  };
  return (
    <>
      <Header color={"#fff"} />
      <Box sx={{ background: "#EDF5FF" }}>
        <BlogsBanner />
        <BlogsTopBanner blogs={blogs} />
        <BlogSearch blogs={currentBlog} />
        <Stack spacing={4} sx={{ textAlign: "center", mt: 6, pb: 6 }}>
          <Pagination
            count={pageNum}
            page={currentPage}
            onChange={handleChange}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </Stack>
      </Box>
      <BlogsCourse />
      <Footer></Footer>
    </>
  );
}

export default BlogsHome;
