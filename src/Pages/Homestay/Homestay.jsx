import { Grid, Typography } from "@mui/material";
import React from "react";
import FeaturedPost from "../../components/Post/FeaturedPost";
import HorizontalSkeleton from "../../components/Skeleton/HorizontalSkeleton";
import HotelPost from "../Hotel/HotelPost";
import HomestayPost from "./HomestayPost";
import useFetch from "../../hooks/useFetch";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch(
    `https://travel-rv5s.onrender.com/hotel/filter`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cost: "0,100000000",
      }),
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${response.status}  ${response.statusText}`
    );
  }
  return response.json();
};

export default function Homestay() {
  // const loading = false;
  const {
    data: post,
    isError,
    error,
    isPending: loading,
  } = useQuery({ queryKey: ["/homestay"], queryFn: fetchData });
  if (isError) {
    return (
      <Typography marginTop={"2rem"} textAlign={"center"}>
        Error : {error.message}
      </Typography>
    );
  }

  return (
    <>
      <Typography
        sx={{ textAlign: "center", paddingY: "2rem" }}
        component={"h1"}
        variant="h4"
      >
        Explore All Homestay
      </Typography>
      {!loading && (
        <Grid container spacing={4}>
          {post.map((post) => (
            <HomestayPost key={post.id} post={post} />
          ))}
        </Grid>
      )}
      {loading && <HorizontalSkeleton />}
    </>
  );
}
