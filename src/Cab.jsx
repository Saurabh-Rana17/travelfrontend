import {
  Box,
  Button,
  Grid,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cab() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [pickUp, setPickUp] = useState("");
  const [dropUp, setDropUp] = useState("");
  const [noOfPeople, setNoOfPeople] = useState("");
  const [date, setDate] = useState("");
  const [empty, setEmpty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleClick() {
    setEmpty(false);
    if (!pickUp || !dropUp || !noOfPeople || !date) {
      setEmpty(true);
    } else if (!user) {
      navigate("/signup");
    } else {
      setIsSubmitting(true);
      const response = await fetch("https://travel-rv5s.onrender.com/cab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          pickUp: pickUp,
          dropUp: dropUp,
          date: date,
          noOfPeople: noOfPeople,
        }),
      });
      const res = await response.json();
      console.log(res);
      setIsSubmitting(false);
      navigate("/inquirysuccess");
    }
  }
  console.log(pickUp);
  return (
    <>
      <div style={{ margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginY: "3rem",
            flexDirection: "row",
            // width: "38rem",
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              padding: {
                xs: "1rem",
                sm: "2rem",
              },
            }}
            elevation={3}
          >
            <Typography
              sx={{
                marginBottom: {
                  xs: "1rem",
                  sm: "2rem",
                },
              }}
              gutterBottom
              variant="h5"
            >
              Entere Your Cab Requirements
            </Typography>

            <TextField
              sx={{ marginBottom: "1.5rem" }}
              fullWidth
              required
              label="Pick Up Point"
              onChange={(e) => setPickUp(e.target.value)}
            />

            <TextField
              sx={{ marginBottom: "1.5rem" }}
              fullWidth
              required
              label="Drop Location"
              onChange={(e) => setDropUp(e.target.value)}
            />
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  sx={{ marginBottom: "1.5rem" }}
                  fullWidth
                  required
                  type="number"
                  label="No of People"
                  onChange={(e) => setNoOfPeople(e.target.value)}
                />
              </Grid>
              <Grid sm={5.7} item>
                <TextField
                  sx={{ marginBottom: "1.5rem" }}
                  fullWidth
                  required
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </Grid>
            </Grid>

            {empty && (
              <Typography paddingTop={1} align={"center"} sx={{ color: "red" }}>
                Please enter a value
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                // marginTop: "1rem",
              }}
            >
              <Button
                disabled={isSubmitting}
                sx={{ width: "6rem" }}
                onClick={handleClick}
                variant="contained"
              >
                {isSubmitting ? "Sending" : "Send"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </div>
    </>
  );
}
