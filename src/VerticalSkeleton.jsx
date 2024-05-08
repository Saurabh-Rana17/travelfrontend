import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

function SkeletonItem() {
  return <Grid item xs={12} md={6}></Grid>;
}

function VerticalSkeleton() {
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "none",
        },
      }}
    >
      <Grid container spacing={4}>
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </Grid>
    </Box>
  );
}

export default VerticalSkeleton;
