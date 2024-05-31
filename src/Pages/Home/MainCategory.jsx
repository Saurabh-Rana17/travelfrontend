import { Grid, Typography } from "@mui/material";
import React from "react";
import HorizontalSkeleton from "../../components/Skeleton/HorizontalSkeleton";
import useFetch from "../../hooks/useFetch";
import CategoryPost from "./CategoryPost.jsx";

export default function () {
  const {
    data: categories,
    error,
    isError,
    isPending: loading,
  } = useFetch(["category"], "https://travel-rv5s.onrender.com/category");
  if (error) {
    return <p>Error:{error.message}</p>;
  }

  return (
    <>
      <Typography component="h2" variant="h5">
        "Explore the Natural Beauty of Uttarakhand "
      </Typography>
      {!loading ? (
        <Grid sx={{ mt: 0 }} container spacing={4}>
          {categories.map((post) => (
            <CategoryPost key={post.id} post={post} />
          ))}
        </Grid>
      ) : (
        <HorizontalSkeleton />
      )}
    </>
  );
}
