import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";import PersonIcon from "@mui/icons-material/Person";
import StarRateIcon from "@mui/icons-material/StarRate";

function BlogsCourse() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [setCourses]);

  const silder = useRef(null);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), #2D2BB0",
      }}
    >
      <Box>
        <Container maxWidth="xl">
          <Box>
            <Slider ref={silder} {...settings}>
              {courses.map((course) => (
                <Box key={course.id} course={course}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      margin: "0px 10px",
                      boxShadow: 3,
                      p: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="194"
                      image={course.img}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontSize: "700",
                          color: "#333",
                        }}
                      >
                        {course.courseName}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "20px",
                      }}
                    >
                        <Typography
              display={{
                display: "flex",
                fontSize: "16px",
                color: "#3F3F3F",
                fontWeight: "500",
              }}
            >
              <PersonIcon />
              {course.people} User
            </Typography>
                    </Box>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default BlogsCourse;
