import { Grid, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import FeaturedPost from "./FeaturedPost";
import { RotateLoader } from "react-spinners";
import Loader from "./Loader";
import HorizontalSkeleton from "./components/Skeleton/HorizontalSkeleton";
import VerticalSkeleton from "./components/Skeleton/VerticalSkeleton";

function Explore() {
  const [post, setPost] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://travel-rv5s.onrender.com/tour`);
      const result = await response.json();
      setPost(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  const defaultTheme = createTheme();

  return (
    <>
      <Typography
        sx={{ textAlign: "center", paddingY: "2rem" }}
        component={"h1"}
        variant="h4"
      >
        Explore All Tour
      </Typography>
      {!loading && (
        <Grid container spacing={4}>
          {post.map((post) => (
            <FeaturedPost key={post.id} post={post} />
          ))}
        </Grid>
      )}
      {/* {loading && <Loader />} */}
      {loading && <HorizontalSkeleton />}
      {/* {loading && <VerticalSkeleton />} */}
    </>
  );
}

export default Explore;
