import Header from "./Header.jsx";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Chip, CircularProgress, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import FeaturedPost from "./FeaturedPost.jsx";
import { Dataset } from "@mui/icons-material";

export default function HotelDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [datatest, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImg, setMainImg] = useState("");
  const [imgArr, setImgArr] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://travel-rv5s.onrender.com/hotel/${params.id}`
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
        "https://travel-rv5s.onrender.com/hotel/book",
        {
          method: "POST",
          body: JSON.stringify({
            email: user.email,
            hotel: datatest.id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
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
              {datatest.name}
            </Typography>
            <CardMedia
              component="img"
              sx={{
                width: "70vw",
                height: "auto",
                mx: "auto",
                display: { xs: "none", sm: "flex" },
              }}
              image={datatest.images[0]}
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
              image={datatest.images[0]}
              alt="image"
            />
            <pre style={{ textWrap: "wrap" }}>
              <Typography
                sx={{ p: { xs: 0, sm: 2 }, textAlign: "justify" }}
                variant="h6"
                paragraph
              >
                📍<b>Address</b> :- {datatest.location}
              </Typography>
            </pre>
            <Typography
              sx={{ p: { xs: 0, sm: 2 }, textAlign: "justify" }}
              variant="h6"
              paragraph
            >
              🏙️ <b>City</b> :- {datatest.city}
            </Typography>
            <Typography
              sx={{ p: { xs: 0, sm: 2 }, textAlign: "justify" }}
              variant="h6"
              paragraph
            >
              💵 <b>Price</b> :- ₹{datatest.cost}
            </Typography>
            <Typography
              sx={{
                p: { xs: 0, sm: 2 },
                display: { xs: "none", sm: "block" },
                textAlign: "center",
              }}
              variant="h4"
              paragraph
            >
              Images From Hotel
            </Typography>

            <Typography
              sx={{
                p: { xs: 0, sm: 2 },
                display: { xs: "block", sm: "none" },
                textAlign: "center",
              }}
              variant="h5"
              paragraph
            >
              Images From Hotel
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
                {datatest.images.map((item) => (
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
                {datatest.images.map((item) => (
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
              sx={{ paddingY: { xs: 2, sm: 2 }, textAlign: "center" }}
              variant="h4"
              paragraph
            >
              Hotel Location
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
              textAlign={"center"}
            >
              <iframe
                src={datatest.mapLocation}
                width={"800"}
                height={"500"}
                style={{ border: 0 }}
              />
            </Box>

            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
              textAlign={"center"}
            >
              <iframe
                src={datatest.mapLocation}
                width={"280"}
                height={"400"}
                style={{ border: 0 }}
              />
            </Box>

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
