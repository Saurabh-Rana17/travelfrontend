import {
  Box,
  Button,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { convertDrive } from "../../../utility/convertDrive";
import ImageUploader from "./ImageUploader";

export default function AddHotel() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
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
          width: "40rem",
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
          Add new Hotel
        </Typography>

        <Typography variant="h6">Select Main Image</Typography>
        <ImageUploader maxFiles={1} />

        <TextField
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          required
          label="Hotel Name"
        />

        <TextField
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          required
          multiline
          maxRows={3}
          label="Address"
        />

        <Grid spacing={2} container>
          <Grid item xs={6}>
            <TextField
              sx={{ marginBottom: "1.5rem" }}
              fullWidth
              required
              label="Price"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ marginBottom: "1.5rem" }}
              fullWidth
              required
              label="City"
            />
          </Grid>
        </Grid>

        <Typography variant="h6">Add Other Images Max Limit is 9</Typography>
        <ImageUploader maxFiles={9} />
        <TextField
          sx={{ marginBottom: "1rem" }}
          fullWidth
          required
          label="Google Map link"
        />
        <Box
          margin={"1rem auto"}
          sx={{
            width: {
              xs: "auto",
              sm: "500px",
            },
            height: {
              xs: "300px",
            },
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15049.396779239954!2d72.80025284351807!3d19.440505740277217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a963c5ae2087%3A0x6ecaecdd5a5a1c5c!2sDMart%20Yashwant%20Nagar!5e0!3m2!1sen!2sin!4v1717791083771!5m2!1sen!2sin"
            style={{
              border: "0",
            }}
            width={"100%"}
            height={"100%"}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        {/* <Button sx={{ marginBottom: "1rem" }} variant="contained">
          Show Google Map
        </Button> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            type="submit"
            color="success"
            sx={{ width: "6rem" }}
            variant="contained"
          >
            Upload
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
