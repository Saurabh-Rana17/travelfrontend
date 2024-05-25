import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "./store/StateProvider";
import { Delete, DeleteForever, LogoutOutlined } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { red } from "@mui/material/colors";
import { userContext } from "./store/UserProvider";

import AuthModal from "./components/Modal/AuthModal";
import OtpModal from "./components/Modal/OtpModal";

export default function Cart() {
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const { userState: user } = useContext(userContext);
  const { cartState, deleteTour, deletePackage, deleteHotel } =
    useContext(CartContext);

  const handleBook = async (event) => {
    event.preventDefault();
    if (!user) {
      setShowAuthModal(true);
    } else if (!user.active) {
      setShowOtpModal(true);
    } else {
      // setIsSubmitting(true);
      // const response = await fetch(
      //   "https://travel-rv5s.onrender.com/package/book",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: user.email,
      //       package: data.id,
      //     }),
      //   }
      // );
      // const res = await response.json();
      // setIsSubmitting(false);
      // navigate("/success");
    }
  };

  return (
    <>
      <AuthModal setShowModal={setShowAuthModal} showModal={showAuthModal} />
      <OtpModal showOtpModal={showOtpModal} setShowOtpModal={setShowOtpModal} />
      <Paper
        sx={{
          marginTop: "2rem",
          marginX: "auto",
          maxWidth: "50rem",
          paddingY: "1rem",
          paddingX: {
            xs: "none",
            sm: "1rem",
          },
          width: {
            xs: "92vw",
            sm: "80vw",
          },
        }}
      >
        <Typography
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          marginBottom={"1rem"}
          align="center"
          variant="h4"
        >
          Your Booking Details ✈️
        </Typography>
        <Typography
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
          marginBottom={"1rem"}
          align="center"
          variant="h5"
        >
          Your Tour Summary ✈️
        </Typography>
        <Divider />
        {/* will execute if hotels array exist */}
        {cartState.hotels.length > 0 && (
          <Box>
            <Typography marginY={"1rem"} marginBottom={"0.5rem"} variant="h5">
              {" "}
              🏨 Hotels
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sr.no</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartState.hotels.map((row, idx) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {idx + 1}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        <Link
                          sx={{ textDecoration: "none" }}
                          component={RouterLink}
                          to={`/hotel/${row.id}`}
                        >
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.price}
                      </TableCell>
                      <TableCell component="th" scope="row" align="right">
                        <Button
                          sx={{ padding: 0 }}
                          onClick={() => {
                            deleteHotel(row.id);
                            toast.error("Hotel Removed");
                          }}
                          startIcon={<Delete />}
                          color="error"
                        >
                          <Box
                            sx={{
                              display: {
                                xs: "none",
                                sm: "block",
                              },
                            }}
                          >
                            Remove
                          </Box>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
        {/* will execute if tours array exist */}

        {cartState.tours.length > 0 && (
          <Box>
            <Typography marginY={"1rem"} marginBottom={"0.5rem"} variant="h5">
              {" "}
              🏞️ Tours
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sr.no </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartState.tours.map((row, idx) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {idx + 1}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        <Link
                          sx={{ textDecoration: "none" }}
                          component={RouterLink}
                          to={`/tour/${row.id}`}
                        >
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell align="right" component="th" scope="row">
                        <Button
                          onClick={() => {
                            deleteTour(row.id);
                            toast.error("Tour Removed");
                          }}
                          sx={{
                            padding: 0,
                          }}
                          color="error"
                          startIcon={<Delete />}
                        >
                          <Box display={{ xs: "none", sm: "block" }}>
                            Remove
                          </Box>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
        {/* will execute if packages array exist */}

        {cartState.packages.length > 0 && (
          <Box>
            <Typography marginY={"1rem"} marginBottom={"0.5rem"} variant="h5">
              {" "}
              🧳 Tour Packages
            </Typography>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sr.no </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartState.packages.map((row, idx) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{idx + 1}</TableCell>

                      <TableCell component="th" scope="row">
                        <Link
                          sx={{ textDecoration: "none" }}
                          component={RouterLink}
                          to={`/package/${row.id}`}
                        >
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell align="right" component="th" scope="row">
                        <Button
                          onClick={() => {
                            deletePackage(row.id);
                            toast.error("Tour Package Removed");
                          }}
                          sx={{ padding: 0 }}
                          startIcon={<Delete />}
                          color="error"
                        >
                          <Box display={{ xs: "none", sm: "block" }}>
                            Remove
                          </Box>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
        <Divider />
        {/* will execute when any of hotel, package or tour is empty */}
        <Box marginY={"1rem"}>
          {cartState.hotels.length === 0 && (
            <Box paddingX={"1rem"}>
              No Hotels added ,{" "}
              <Link component={RouterLink} to={"/hotel"}>
                {" "}
                Add Hotels
              </Link>
            </Box>
          )}
          {cartState.tours.length === 0 && (
            <Box>
              {/* <Typography marginY={"1rem"} marginBottom={"0.5rem"} variant="h5">
                {" "}
                🏞️ Tours
              </Typography> */}
              <Box paddingX={"1rem"}>
                No Tour Added ,{" "}
                <Link component={RouterLink} to={"/explore"}>
                  {" "}
                  Add Tour
                </Link>
              </Box>
            </Box>
          )}
          {cartState.packages.length === 0 && (
            <Box>
              {/* <Typography marginY={"1rem"} marginBottom={"0.5rem"} variant="h5">
                {" "}
                🧳 Tour Packages
              </Typography> */}
              <Box paddingX={"1rem"}>
                No Tour Pacakge Added ,{" "}
                <Link component={RouterLink} to={"/packages"}>
                  {" "}
                  Add Tour Package
                </Link>
              </Box>
            </Box>
          )}
        </Box>
        <Divider sx={{ margin: "1rem" }} />
        <Box width={"fit-content"} sx={{ margin: "auto" }}>
          <Button
            onClick={handleBook}
            disabled={cartState.total === 0}
            variant="contained"
          >
            Book Now
          </Button>
        </Box>
      </Paper>
    </>
  );
}
