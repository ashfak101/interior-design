import { Box, Container, Typography } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const styles = {
  icon: {
    color: "#fff",
    background:
      " linear-gradient(180deg, rgba(255, 216, 115, 0.4) 0%, rgba(255, 255, 255, 0) 100%), #F15A29",
    borderRadius: "50%",
    width: "40px",
    padding: "10px",
    height: "40px",
    textAlign: "center",
    position: "absolute",
    zIndex: "1",
  },
};
function BlogsTopBanner({ blogs }) {
  const silder = useRef(null);
  let settings = {
    dots: true,
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
        <Box sx={{ marginTop: "-150px", position: "relative" }}>
          <ArrowBackIosIcon
            onClick={() => silder?.current?.slickPrev()}
            sx={{ ...styles.icon, top: "50%", left: "-20px" }}
          ></ArrowBackIosIcon>
          <ArrowForwardIosIcon
            onClick={() => silder?.current?.slickNext()}
            sx={{ ...styles.icon, right: "-20px", top: "50%" }}
          ></ArrowForwardIosIcon>
          <Slider ref={silder} {...settings}>
            {blogs.map((blog, index) => (
              <Box sx={{ background: "#fff" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xl: "row",
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    },
                  }}
                >
                  <Box sx={{ width: "30%" }}>
                    <Box
                      sx={{
                        p: 3,
                        background: "rgba(0, 0, 0, 0.13)",
                        backdropFilter: " blur(20px) ",
                        textAlign: "center",
                      }}
                    >
                      <img style={{ width: "100%" }} src={blog.img} alt="" />
                    </Box>{" "}
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      pl: {
                        lg: 10,
                        md: 10,
                        sm: 10,
                        xs: 0,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        width: "100%",
                        fontSize: "45px",
                        fontWeight: "900  ",
                        color: "#333333",

                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      {blog.name}
                    </Typography>
                    <Typography>{blog.description.slice(0, 200)}</Typography>
                    <Box
                      sx={{
                        mt: 10,
                      }}
                    >
                      <Typography sx={{ display: "flex" }}>
                        <CalendarTodayIcon /> {blog.date}
                      </Typography>
                    </Box>
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
