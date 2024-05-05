import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FeaturedPost from "./FeaturedPost";
import RecommendedPost from "./RecommendedPost";
import ExlporeMoreTour from "./ExlporeMoreTour";
import Loader from "./Loader";

export default function Recommended() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setLoading(true);
    async function fetchData(query) {
      const res = await fetch(
        `https://travel-rv5s.onrender.com/interest${query}`
      );
      const response = await res.json();
      setPost(response);
      setLoading(false);
    }
    fetchData(user?.email ? "/" + user?.email : "");
  }, []);
  return (
    <>
      <Typography
        sx={{ textAlign: "center", paddingY: "2rem" }}
        component={"h1"}
        variant="h5"
      >
        {user?.email ? "Based on Interest" : ""} You May also like following
        Tours
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <Grid
          container
          sx={{
            paddingX: {
              xs: "none",
              sm: "2rem",
            },
          }}
          spacing={4}
        >
          {post.map((post) => (
            <RecommendedPost key={post.id} post={post} />
          ))}
          <ExlporeMoreTour />
        </Grid>
      )}
    </>
  );
}
