import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../../images/Logo/Frame1.png";
function Footer() {
  return (
    <>
      <Box sx={{ background: " #282828", color: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid xs={12} md={5} lg={5}>
              <img src={logo} alt="" />
              <Typography>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or ra
              </Typography>
            </Grid>
            <Grid xs={12} md={2} lg={2}>
              <Typography>Links</Typography>
              <List>
                <ListItem sx={{ display: "flex", flexDirection: "column" }}>
                  <ListItemText>Accredition</ListItemText>
                  <ListItemText>Studen ID</ListItemText>
                  <ListItemText>Courses</ListItemText>
                  <ListItemText>Features</ListItemText>
                  <ListItemText>Pricing</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid xs={12} md={2} lg={2}>
              <Typography>Important Links</Typography>
              <List>
                <ListItem>
                  <ListItemText>Course</ListItemText>
                  <ListItemText>Reviews</ListItemText>
                  <ListItemText>Free Courses</ListItemText>
                  <ListItemText>Term & Condition</ListItemText>
                  <ListItemText>Contact Us</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid xs={12} md={3} lg={3}>
              <Typography>Hello</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
