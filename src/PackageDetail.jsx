import Header from "./Header.jsx";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Chip, CircularProgress, Grid, Link } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import FeaturedPost from "./FeaturedPost.jsx";

export default function PackageDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImg, setMainImg] = useState("");
  const [imgArr, setImgArr] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://travel-rv5s.onrender.com/package/${params.id}`
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
      setMainImg(result.images[0]);
      const imgf = result.images;
      imgf.shift();
      setImgArr(imgf);
    };
    fetchData();
  }, []);

  const handleClick = (category) => {
    navigate("/category/" + category);
  };

  const handleBook = async (event) => {
    event.preventDefault();
    if (!user) {
      navigate("/signup");
    } else if (!user.active) {
      navigate("/activate");
    } else {
      setIsSubmitting(true);
      const response = await fetch(
        "https://travel-rv5s.onrender.com/package/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            package: data.id,
          }),
        }
      );
      const res = await response.json();
      setIsSubmitting(false);
      navigate("/success");
    }
  };
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <Box>
          <Paper sx={{ border: "1px solid grey.500", p: 3 }}>
            <Typography gutterBottom component="h1" variant="h4" align="center">
              {data.name}
            </Typography>
            <CardMedia
              component="img"
              sx={{
                width: "70vw",
                height: "auto",
                mx: "auto",
                display: { xs: "none", sm: "flex" },
              }}
              image={mainImg}
              alt="image"
            />
            <CardMedia
              component="img"
              sx={{
                // width: "80vw",
                height: "30vh",
                mx: "auto",
                objectFit: "cover",
                display: { xs: "flex", sm: "none" },
              }}
              image={mainImg}
              alt="image"
            />
            <pre style={{ textWrap: "wrap" }}>
              <Typography
                sx={{ p: { xs: 0, sm: 2 }, textAlign: "justify" }}
                variant="h6"
                paragraph
              >
                {data.description}
              </Typography>
            </pre>
            {/* 
            {data.category.map((item) => (
              <Chip
                key={item}
                label={item.toUpperCase()}
                sx={{
                  marginRight: "1rem",
                  marginTop: "1rem",
                }}
                onClick={() => handleClick(item)}
              />
            ))} */}
            <Typography
              sx={{ p: { xs: 0, sm: 2 }, textAlign: "center" }}
              variant="h4"
              paragraph
            >
              Images From Tour
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <ImageList
                sx={{
                  width: 900,
                  margin: "auto",
                  height: 610,
                }}
                cols={3}
                rowHeight={300}
              >
                {imgArr.map((item) => (
                  <ImageListItem key={item}>
                    <img
                      // srcSet={`${item.img}?w=900&h=900&fit=crop&auto=format&dpr=2 2x`}
                      // src={`${item.img}?w=900&h=900&fit=crop&auto=format`}
                      srcSet={`${item}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item}?w=300&h=300&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              <ImageList
                sx={{
                  margin: "auto",
                  height: 650,
                }}
                cols={1}
                rowHeight={300}
              >
                {imgArr.map((item) => (
                  <ImageListItem key={item}>
                    <img
                      // srcSet={`${item.img}?w=900&h=900&fit=crop&auto=format&dpr=2 2x`}
                      // src={`${item.img}?w=900&h=900&fit=crop&auto=format`}
                      srcSet={`${item}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item}?w=300&h=300&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>

            <Typography
              sx={{ textAlign: "center", paddingY: "2rem" }}
              component={"h1"}
              variant="h4"
            >
              The {data.name} has following Tours
            </Typography>
            <Grid container spacing={4}>
              {data.tours.map((post) => (
                <FeaturedPost key={post.id} post={post} />
              ))}
            </Grid>

            <Box py={"2rem"} textAlign={"center"}>
              <Button
                disabled={isSubmitting}
                onClick={handleBook}
                variant="contained"
                sx={{}}
              >
                {isSubmitting ? "Booking Now" : "Book Now"}
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
}
