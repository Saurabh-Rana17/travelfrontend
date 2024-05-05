import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FeaturedPost from "./FeaturedPost";
import Loader from "./Loader";

function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const res = await fetch("https://travel-rv5s.onrender.com/package");
      const response = await res.json();
      setLoading(false);
      setPackages(response);
    }
    fetchData();
  }, []);
  return (
    <>
      <Typography
        sx={{ textAlign: "center", paddingY: "2rem" }}
        component={"h1"}
        variant="h4"
      >
        Explore All Packages
      </Typography>
      {!loading && (
        <Grid container spacing={4}>
          {packages.map((packageItem) => (
            <FeaturedPost key={packageItem.id} post={packageItem} />
          ))}
        </Grid>
      )}
      {loading && <Loader />}
    </>
  );
}

export default Packages;
