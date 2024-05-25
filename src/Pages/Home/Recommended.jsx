import { Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import RecommendedPost from "../../RecommendedPost";
import ExlporeMoreTour from "../../ExlporeMoreTour";

import VerticalSkeleton from "../../components/Skeleton/VerticalSkeleton";
import { userContext } from "../../store/UserProvider";

export default function Recommended() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userState: user } = useContext(userContext);
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
        <VerticalSkeleton />
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
