import { Box, Container, TextField, Grid, Typography } from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function BlogSearch({ blogs }) {
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="xl">
        <Box>
          <TextField></TextField>
        </Box>
        <Box>
          <Grid container spacing={1}>
            {blogs.map((blog) => (
              <Item>
                <Grid item xs={12} sm={6} md={4} xl={4}>
                  <img src={blog.img} alt="" />
                  <Typography>{blog.name}</Typography>
                  <Typography>{blog.date}</Typography>
                  <Link to={`/blogs/${blog.id}`}>Read more</Link>
                </Grid>
              </Item>
            ))}{" "}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default BlogSearch;
