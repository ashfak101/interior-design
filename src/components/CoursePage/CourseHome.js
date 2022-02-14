import { Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Header from "../Shared/Header/Header";

import CourseDetails from "./CourseDetails";
import CourseHero from "./CourseHero";
import CourseOverView from "./CourseOverView";
function CourseHome({ cart, setCart }) {
  const [isTrue, setIsTrue] = useState(false);
  const handleAddToCart = (singleCourse) => {
    const exists = cart.find((cd) => cd.id === singleCourse.id);
    let newCart = [];
    if (exists) {
      const remaining = cart.filter((cd) => cd.id !== singleCourse.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...remaining, singleCourse];
    } else {
      singleCourse.quantity = 1;
      newCart = [...cart, singleCourse];
    }
    setCart(newCart);
    setIsTrue(true);
  };
  setTimeout(() => {
    setIsTrue(false);
  }, 1000);
  console.log(cart);
  return (
    <Box>
      <Header color={"white"} />
      <CourseHero />
      <CourseDetails handleAddToCart={handleAddToCart} isTrue={isTrue} />
      <CourseOverView />
    </Box>
  );
}

export default CourseHome;
