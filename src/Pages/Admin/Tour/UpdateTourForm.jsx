import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageUploader from "../../../components/Admin/ImageUploader";
import { Category } from "@mui/icons-material";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Skeleton/Loader";

// {
//   "_id": {
//     "$oid": "6628ff37cf6d6408265228e1"
//   },
//   "title": "Nainital ",
//   "description": "Nainital, often referred to as the 'Lake District of India,' is a charming hill station nestled in the Kumaon foothills of the Himalayas in the state of Uttarakhand. Surrounded by lush greenery and dotted with picturesque lakes, Nainital is a paradise for nature lovers and adventure enthusiasts alike.\n\nThe town derives its name from the serene Naini Lake, which is the centerpiece of the region. Legend has it that the lake is one of the 64 Shakti Peeths, where parts of the charred body of Goddess Sati fell on Earth. Today, Naini Lake offers boating opportunities, allowing visitors to admire the surrounding hills while peacefully gliding on its shimmering waters.\n\nApart from Naini Lake, the town boasts several other attractions, including Naina Devi Temple, Tiffin Top, Snow View Point, and the Mall Road. Naina Devi Temple, located on the northern shore of Naini Lake, is a sacred site dedicated to Goddess Naina Devi.\n\nTiffin Top, also known as Dorothy's Seat, offers panoramic views of the Himalayas and the town below, making it a popular spot for picnics and trekking. Snow View Point, accessible by cable car, provides breathtaking vistas of snow-capped peaks, including Nanda Devi, Trishul, and Nanda Kot.\n\nThe Mall Road, lined with shops, restaurants, and colonial-era buildings, is the heart of Nainital's bustling activity. Visitors can stroll along the promenade, indulge in local delicacies, and shop for souvenirs.\n\nNainital is not only a haven for sightseeing but also offers various adventure activities such as trekking, horse riding, and paragliding. With its pleasant climate and scenic beauty, Nainital beckons travelers year-round, promising a rejuvenating experience amidst nature's splendor.",
//   "category": [
//     "hill & mountain lover",
//     "romantic",
//     "relaxation"
//   ],
//   "image": "https://static.toiimg.com/photo/106066254/Nainital.jpg?width=748&resize=4"
// }

export default function UpdateTourForm() {
  const params = useParams();
  const {
    data,
    error: fetchError,
    isError,
    isPending: loading,
  } = useFetch(`/tour/${params.id}`);

  const [mainImg, setMainimg] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (data) {
      setName(data.title);
      setMainimg([data.image]);
      setDescription(data.description);
      const temp = data.category.map((el = "") => el.toUpperCase());
      setSelectedItems([...temp]);
    }
  }, [data]);

  const handleChange = (event, newValues) => {
    setSelectedItems(newValues);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const image = mainImg[0];
    if (!image) {
      setError("Please Upload atleast 1 image");
      return;
    }

    const data = {
      title: name,
      image: image,
      description,
      Category: selectedItems,
      id: params.id,
    };
    console.log(data);
  }

  if (isError) {
    return (
      <Typography marginTop={"2rem"} textAlign={"center"}>
        Error : {fetchError.message}
      </Typography>
    );
  }

  if (loading) {
    return <Loader />;
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
          Add new Homestay
        </Typography>

        <Typography variant="h6">Select Main Image</Typography>

        <ImageUploader
          maxFiles={1}
          uploadedImages={mainImg}
          setUploadedImages={setMainimg}
        />

        <TextField
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          required
          label="Tour Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          required
          multiline
          minRows={3}
          maxRows={25}
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Autocomplete
          autoCapitalize="true"
          multiple
          value={selectedItems}
          // defaultValue={selectedItems}
          onChange={handleChange}
          options={[
            "ADVENTURE",
            "HILL & MOUNTAIN LOVER",
            "RELIGIOUS",
            "ROMANTIC",
            "RELAXATION",
            "TREKKING LOVER",
          ]}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option}>
                {option}
              </li>
            );
          }}
          renderTags={(tagValue, getTagProps) => {
            return tagValue.map((option, index) => (
              <Chip {...getTagProps({ index })} key={option} label={option} />
            ));
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select Interest or type here" />
          )}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
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
      </Paper>
    </Box>
  );
}
