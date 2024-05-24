import Header from "./Header.jsx";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Chip, CircularProgress } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useContext, useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import { CartContext } from "./store/StateProvider.jsx";
import {
  AddCircleOutline,
  AddShoppingCart,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import { toast } from "react-toastify";

export default function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addTour, cartState } = useContext(CartContext);
  const [isPresent, setIsPresent] = useState();

  function checkIfPresent() {
    const arr = cartState.tours;
    const res = arr.some((el) => el.id === params.id);

    setIsPresent(res);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://travel-rv5s.onrender.com/tour/${params.id}`
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
    checkIfPresent();
  }, []);

  const handleClick = (category) => {
    navigate("/category/" + category);
  };

  // const handleBook = async (event) => {
  //   event.preventDefault();
  //   if (!user) {
  //     navigate("/signup");
  //   } else if (!user.active) {
  //     navigate("/activate");
  //   } else {
  //     setIsSubmitting(true);
  //     const response = await fetch(
  //       "https://travel-rv5s.onrender.com/tour/book",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: user.email,
  //           tour: data.id,
  //         }),
  //       }
  //     );
  //     const res = await response.json();

  //     setIsSubmitting(false);
  //     navigate("/success");
  //   }
  // };

  function handleBook() {
    addTour(data.id, data.title);
    toast.success("Added To Cart");
    setIsPresent(true);
  }

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
              {data.title}
            </Typography>
            <CardMedia
              component="img"
              sx={{
                width: "70vw",
                height: "auto",
                mx: "auto",
                display: { xs: "none", sm: "flex" },
              }}
              image={data.image}
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
              image={data.image}
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

            {/* <Stack direction={{ xs: "column", sm: "row" }} spacing={1}> */}
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
            ))}
            {/* </Stack> */}
            <Box py={"2rem"} textAlign={"center"}>
              <Button
                onClick={isPresent ? () => navigate("/cart") : handleBook}
                variant="contained"
                sx={{}}
                color={isPresent ? "success" : "primary"}
                startIcon={
                  isPresent ? <ShoppingCartCheckout /> : <AddShoppingCart />
                }
              >
                {!isPresent ? "Add To Cart" : "Go To Cart"}
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
}
