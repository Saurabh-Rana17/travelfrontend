import Box from "@mui/material/Box";
import Header from "./Pages/Layout/Header.jsx";
import { useParams } from "react-router-dom";
import FeaturedPost from "./FeaturedPost.jsx";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Loader from "./Loader.jsx";

export default function Search() {
  const param = useParams();

  const [post, setPost] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        `https://travel-rv5s.onrender.com/search/${param.query}`
      );
      const result = await response.json();
      setPost(result);
      setLoading(false);
    };
    fetchData();
  }, [param.query]);

  const defaultTheme = createTheme();

  return (
    <>
      {!loading && (
        <Grid container spacing={4}>
          {post.map((post) => (
            <FeaturedPost key={post.id} post={post} />
          ))}
        </Grid>
      )}
      {loading && <Loader />}
    </>
  );
}
