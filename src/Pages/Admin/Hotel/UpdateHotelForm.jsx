import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";
import MapViewer from "./MapViewer";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Skeleton/Loader";

export default function UpdateHotelForm() {
  const params = useParams();
  const {
    data,
    error,
    isError,
    isPending: loading,
  } = useFetch(`/hotel/${params.id}`);

  const [mainImg, setMainimg] = useState([]);
  const [otherImg, setOtherImg] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [cost, setCost] = useState("");
  const [city, setCity] = useState("");
  const [localerror, setLocalError] = useState("");
  const [maplocation, setMapLocation] = useState("");

  useEffect(() => {
    if (data) {
      setName(data.name);
      setMainimg([[data.images[0]]]);
    }
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();
    setLocalError("");
    const images = [...mainImg, ...otherImg];
    if (images.length < 1) {
      setLocalError("Please Upload atleast 1 image");
      return;
    }
    if (maplocation.includes("src")) {
      setLocalError("incorrect map");
      return;
    }
    const dataObj = {
      name: name,
      images: images,
      location: location,
      mapLocation: maplocation,
      cost: cost,
      city: city,
    };
  }
  console.log(data);

  if (loading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <Typography marginTop={"2rem"} textAlign={"center"}>
        Error : {error.message}
      </Typography>
    );
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
          Update Hotel
        </Typography>

        <Typography variant="h6">Selected Main Image</Typography>

        <ImageUploader
          maxFiles={1}
          uploadedImages={mainImg}
          setUploadedImages={setMainimg}
        />

        <TextField
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          required
          label="Hotel Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          required
          multiline
          maxRows={3}
          label="Address"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <Grid spacing={2} container>
          <Grid item xs={6}>
            <TextField
              sx={{ marginBottom: "1.5rem" }}
              fullWidth
              required
              label="Price"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ marginBottom: "1.5rem" }}
              fullWidth
              required
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
        </Grid>

        <Typography variant="h6">Add Other Images Max Limit is 8</Typography>

        <ImageUploader
          setUploadedImages={setOtherImg}
          uploadedImages={setOtherImg}
          maxFiles={8}
        />

        <MapViewer location={maplocation} setLocation={setMapLocation} />

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
        {error && (
          <>
            <br />
            <p style={{ color: "red" }}>{error}</p>
          </>
        )}
        {localerror && (
          <>
            <br />
            <p style={{ color: "red" }}>{localerror}</p>
          </>
        )}
      </Paper>
    </Box>
  );
}
