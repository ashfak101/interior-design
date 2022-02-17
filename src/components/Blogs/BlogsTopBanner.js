import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
function BlogsTopBanner({ blogs }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box>
      <Container maxWidth="xl">
        <Box>
          <Slider {...settings}>
            {blogs.map((blog, index) => (
              <Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box sx={{ width: "30%" }}>
                    <img src={blog.img} alt="" />{" "}
                  </Box>
                  <Box sx={{ width: "50%" }}>
                    <Typography>{blog.name}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}

export default BlogsTopBanner;
