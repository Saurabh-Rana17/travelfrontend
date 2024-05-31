import Grid from "@mui/material/Grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./MainFeaturedPost";

import Main from "./Main.jsx";
import Sidebar from "./Sidebar";
import Typography from "@mui/material/Typography";
import ExplorePost from "./CategoryPost.jsx";
import RecommendedPost from "./Recommended.jsx";
import HorizontalSkeleton from "../../components/Skeleton/HorizontalSkeleton.jsx";
import useFetch from "../../hooks/useFetch.js";
import MainCategory from "./MainCategory.jsx";

export default function Home() {
  return (
    <main>
      <MainFeaturedPost />
      <MainCategory />
      <RecommendedPost />
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title="From the firehose" />
        <Sidebar />
      </Grid>
    </main>
  );
}
