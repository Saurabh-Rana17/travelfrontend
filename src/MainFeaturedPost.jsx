import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import MainFeaturedSkeleton from "./MainFeaturedSkeleton";

function MainFeaturedPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://travel-rv5s.onrender.com/package/662dc65bd78237f957c68776`
      );
      const result = await response.json();
      setPost(result);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <MainFeaturedSkeleton />
      ) : (
        <Paper
          sx={{
            height: {
              sm: "70vh",
            },
            position: "relative",
            backgroundColor: "grey.800",
            color: "#fff",
            mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url("https://lh3.googleusercontent.com/drive-viewer/AKGpihbe7MC39Zk4WvjeGzoIe4i_uoMgBGJjvAGd3kWQ2nUGk-srSte926e9aKBNp47j3dm9KJb_fiCs74S3M1-pGwhyyftoRUZNo4A=s1600-rw-v1")`,
          }}
        >
          {/* Increase the priority of the hero background image */}
          {
            <img
              style={{ display: "none" }}
              src={post.image}
              alt={post.imageText}
            />
          }
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.3)",
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                  sx={{
                    marginBottom: {
                      sm: "3rem",
                    },
                  }}
                >
                  {post.name}
                </Typography>
                <Typography
                  sx={{
                    marginBottom: {
                      sm: "3rem",
                    },
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                  variant="h5"
                  color="inherit"
                  paragraph
                >
                  {post.description.substring(0, 199)}...
                </Typography>
                <Typography
                  sx={{
                    marginBottom: {
                      sm: "3rem",
                    },
                    display: {
                      xs: "block",
                      sm: "none",
                    },
                  }}
                  variant="h5"
                  color="inherit"
                  paragraph
                >
                  {post.description.substring(0, 99)}...
                </Typography>
                <Link
                  sx={{ color: "white" }}
                  variant="subtitle1"
                  href={`/package/${post.id}`}
                >
                  Continue reading…
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
}

export default MainFeaturedPost;
