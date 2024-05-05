import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main.jsx";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import ExplorePost from "./CategoryPost.jsx";
import RecommendedPost from "./Recommended.jsx";

const mainFeaturedPost = {
  title: "Devbhoomi Uttarakhand",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "/src/assets/hero.jpg",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "PanchKedarr",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?uttarakhand wallpaper",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?uttarakhand mountains",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?uttarakhand village",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?uttarakhand hills",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?uttarakhand river",
    imageLabel: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "At [Your Company Name], we unlock the wonders of Uttarakhand for you with expert guides and carefully curated itineraries. Join us to experience the magic firsthand.",
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "X", icon: XIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const defaultTheme = createTheme();

export default function Home() {
  const user = localStorage.getItem("user");
  let i = 0;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://travel-rv5s.onrender.com/category");
      const data = await res.json();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Typography component="h2" variant="h5">
        "Explore the Natural Beauty of Uttarakhand "
      </Typography>

      <Grid sx={{ mt: 0 }} container spacing={4}>
        {categories.map((post) => (
          <ExplorePost key={i++} post={post} />
        ))}
      </Grid>

      <RecommendedPost />
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title="From the firehose" />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          social={sidebar.social}
        />
      </Grid>
    </main>
  );
}
