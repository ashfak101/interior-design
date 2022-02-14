import { Box } from "@mui/material";
import React from "react";
import Header from "../Shared/Header/Header";
import CourseDetails from "./CourseDetails";
import CourseHero from "./CourseHero";
import CourseOverView from "./CourseOverView";
function CourseHome() {
  return (
    <Box>
      <Header color={"white"} />
      <CourseHero />
      <CourseDetails />
      <CourseOverView />
    </Box>
  );
}

export default CourseHome;
