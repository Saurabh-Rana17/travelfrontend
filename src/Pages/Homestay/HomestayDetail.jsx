import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Loader from "../../components/Skeleton/Loader.jsx";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { AddShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";
import { CartContext } from "../../store/StateProvider.jsx";
import { toast } from "react-toastify";
import useFetch from "../../hooks/useFetch.js";

const data = {
  id: "6636375bfd922161c89500ab",
  name: "Hotel Alaknanda",
  location:
    "274, 293, Kaulagarh Rd, Rajender Nagar, Dehradun, Uttarakhand 248003",
  mapLocation:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4425311881114!2d78.0178559793457!3d30.338370799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929ff4740401f%3A0x39e76b0cbd98d314!2sHotel%20Alaknanda!5e0!3m2!1sen!2sin!4v1714828668299!5m2!1sen!2sin",
  city: "Dehradun",
  images: [
    "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
    "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
    "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
    "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
    "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
    "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
  ],
  cost: 1000,
};

export default function HomestayDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const { addHotel, cartState } = useContext(CartContext);
  const [isPresent, setIsPresent] = useState(false);

  // const {
  //   data,
  //   error,
  //   isError,
  //   isPending: loading,
  // } = useFetch(`/hotel/${params.id}`);
  const loading = false;

  function checkIfPresent() {
    const res = cartState.hotels.some((el) => el.id === params.id);
    setIsPresent(res);
  }
  useEffect(() => {
    checkIfPresent();
  }, []);

  // const handleBook = async (event) => {
  //   event.preventDefault();
  //   if (!user) {
  //     navigate("/signup");
  //   } else if (!user.active) {
  //     navigate("/activate");
  //   } else {
  //     setIsSubmitting(true);
  //     const response = await fetch(
  //       "https://travel-rv5s.onrender.com/hotel/book",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           email: user.email,
  //           hotel: data.id,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const res = await response.json();
  //     setIsSubmitting(false);
  //     navigate("/success");
  //   }
  // };

  function handleBook() {
    if (isPresent) {
      navigate("/cart");
    } else {
      addHotel(data.id, data.name, data.cost);
      toast.success("Added To Cart");
      setIsPresent(true);
    }
  }

  // if (isError) {
  //   return (
  //     <Typography marginTop={"2rem"} textAlign={"center"}>
  //       Error : {error.message}
  //     </Typography>
  //   );
  // }

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
              image={data.images[0]}
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
              image={data.images[0]}
              alt="image"
            />
            <pre style={{ textWrap: "wrap" }}>
              <Typography
                sx={{ p: { xs: 0, sm: 2 }, textAlign: "justify" }}
                variant="h6"
                paragraph
              >
                📍<b>Address</b> :- {data.location}
              </Typography>
            </pre>
            <Typography
              sx={{ p: { xs: 0, sm: 2 }, textAlign: "justify" }}
              variant="h6"
              paragraph
            >
              🏙️ <b>City</b> :- {data.city}
            </Typography>
            <Typography
              sx={{ p: { xs: 0, sm: 2 }, textAlign: "justify" }}
              variant="h6"
              paragraph
            >
              💵 <b>Price</b> :- ₹{data.cost}
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
              Images From Homestay
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
              Images From Homestay
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
                {data.images.map((item) => (
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
                {data.images.map((item) => (
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
              Homestay Location
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
                src={data.mapLocation}
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
                src={data.mapLocation}
                width={"280"}
                height={"400"}
                style={{ border: 0 }}
              />
            </Box>

            <Box py={"2rem"} textAlign={"center"}>
              <Button
                // disabled={isSubmitting}
                onClick={handleBook}
                variant="contained"
                sx={{}}
                color={isPresent ? "success" : "primary"}
                startIcon={
                  isPresent ? <ShoppingCartCheckout /> : <AddShoppingCart />
                }
              >
                {isPresent ? "Go To Cart" : "Add To Cart"}
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
}
