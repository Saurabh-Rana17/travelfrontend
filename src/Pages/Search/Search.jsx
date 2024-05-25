import { useParams } from "react-router-dom";
import FeaturedPost from "../../FeaturedPost.jsx";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Loader from "../../components/Skeleton/Loader.jsx";

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
