import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Pages/Layout/Header.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FeaturedPost from "./FeaturedPost.jsx";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Loader from "./components/Skeleton/Loader.jsx";
import HorizontalSkeleton from "./components/Skeleton/HorizontalSkeleton.jsx";
import VerticalSkeleton from "./components/Skeleton/VerticalSkeleton.jsx";

export default function Category() {
  const category = useParams().category;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://travel-rv5s.onrender.com/category/${category}`
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, [category]);
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Divider />
      <Typography
        sx={{
          marginY: {
            xs: "1rem",
            sm: "2rem",
          },
        }}
        component="h2"
        variant="h5"
        align="center"
      >
        Here are some of the Tours under {category.toLocaleUpperCase()} category
      </Typography>
      {!loading && (
        <Grid container spacing={4}>
          {data.map((d) => (
            <FeaturedPost key={d.id} post={d} />
          ))}
        </Grid>
      )}
      {loading && <HorizontalSkeleton />}
      {/* {loading && <VerticalSkeleton />} */}
    </ThemeProvider>
  );
}
