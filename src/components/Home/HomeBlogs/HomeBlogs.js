import { Box, Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Title from "../../Utils/Title";
import bgImg from "../../../images/courses.png";
import IntButton from "../../Utils/IntButton";
import SharedGrid from "../SharedGrid/SharedGrid";
const bgImage = {
  background: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
function HomeBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <Box sx={bgImage}>
      <Box
        sx={{
          marginTop: {
            md: "0",
            lg: "0",
          },
          pt: "100px",
        }}
      >
        <Title
          text1={"Our Popular Blog"}
          text2={
            "The basic philosophy of our studio is create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique.The basic philosophy of our studio is create individual,"
          }
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{ marginTop: "60px", paddingBottom: "100px", textAlign: "center" }}
      >
        <Grid container spacing={1} sx={{ marginBottom: "50px" }}>
          {blogs.slice(0, 3).map((blog) => (
            <SharedGrid key={blog.id} data={blog}></SharedGrid>
          ))}
        </Grid>
        <IntButton text={"View All"}></IntButton>
      </Container>
    </Box>
  );
}

export default HomeBlogs;
