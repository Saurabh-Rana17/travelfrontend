import React, { useEffect, useState } from "react";

import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import FeaturedPost from "./FeaturedPost";
import HotelPost from "./HotelPost";
import Loader from "./Loader";
import HorizontalSkeleton from "./components/Skeleton/HorizontalSkeleton";

function Hotel() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  useEffect(() => {
    setLoading(true);
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
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);
  async function handleClick() {
    const postData = {};
    if (name.trim()) {
      postData["search"] = name;
    }
    if (city.trim()) {
      postData.city = city;
    }
    if (min) {
      postData.cost = min;
    } else {
      postData.cost = 0;
    }
    if (max) {
      postData.cost += "," + max;
    } else {
      postData.cost += "," + 10000000;
    }
    setLoading(true);
    const res = await fetch(`https://travel-rv5s.onrender.com/hotel/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const response = await res.json();
    setLoading(false);
    setData(response);
  }
  return (
    <>
      <Box sx={{ margin: "1rem", textAlign: "center" }}>
        <Paper
          elevation={5}
          sx={{
            padding: {
              xs: "1rem",
              sm: "2rem",
            },
          }}
        >
          <Box
            marginBottom={{ xs: "0.5rem", sm: "none" }}
            marginRight={"1rem"}
            sx={{ display: "inline-block" }}
          >
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
              variant="standard"
            />
          </Box>
          <Box
            marginBottom={{ xs: "0.5rem", sm: "none" }}
            marginRight={"1rem"}
            sx={{ display: "inline-block" }}
          >
            <TextField
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label="City"
              variant="standard"
            />
          </Box>
          <Box
            marginBottom={{ xs: "0.5rem", sm: "none" }}
            marginRight={"1rem"}
            sx={{ display: "inline-block" }}
          >
            <TextField
              value={min}
              onChange={(e) => setMin(e.target.value)}
              type="number"
              label="Min Cost"
              variant="standard"
            />
          </Box>
          <Box
            marginBottom={{ xs: "0.5rem", sm: "none" }}
            marginRight={"1rem"}
            sx={{ display: "inline-block" }}
          >
            <TextField
              value={max}
              onChange={(e) => setMax(e.target.value)}
              type="number"
              label="Max Cost"
              variant="standard"
            />
          </Box>

          <Button
            onClick={handleClick}
            sx={{
              marginTop: {
                xs: "1rem",
                sm: "0.5rem",
              },
            }}
            variant="contained"
          >
            Search Hotel
          </Button>
        </Paper>
      </Box>

      <Typography
        sx={{ textAlign: "center", paddingY: "2rem" }}
        component={"h1"}
        variant="h4"
      >
        Explore All Hotel
      </Typography>
      {!loading && (
        <Grid container spacing={4}>
          {data.map((post) => (
            <HotelPost key={post.id} post={post} />
          ))}
        </Grid>
      )}
      {loading && <HorizontalSkeleton />}
    </>
  );
}

export default Hotel;
