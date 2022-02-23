import { Box, Container } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgImg from "../../images/blogsbg.png";
import Header from "../Shared/Header/Header";
import sbgImg from "../../images/sblog.png";
import { DataContext } from "../../context/DataProvider";

const bgImage = {
  background: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
};

function SingleBlog() {
  const { id } = useParams();
  const [state, dispatch] = useContext(DataContext);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`/blogs.json`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "blogs", value: data });
      });
  }, [dispatch]);
  console.log(state.blogs);

  useEffect(() => {
    const singleBlog = state.blogs?.find((blog) => blog.id === id);
    setBlog(singleBlog);
  }, [id, state.blogs]);
  console.log(blog);
  return (
    <>
      <Box style={bgImage}>
        <Header color={"#fff"}></Header>
        <Container maxWidth="xl" sx={{ paddingTop: 15, textAlign: "center" }}>
          <Box
            sx={{
              display: "inline-block",
              p: "47px",
              background: "rgba(0, 0, 0, 0.13)",
              backdropFilter: "blur(20px)",
            }}
          >
            <img src={sbgImg} alt="" />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default SingleBlog;
