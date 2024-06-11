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
import MapViewer from "../../../components/Admin/MapViewer";
import useFetch from "../../../hooks/useFetch";

// {
//   "_id": {
//     "$oid": "662dc65bd78237f957c68776"
//   },
//   "name": "Char Dham Yatra",
//   "tours": [
//     "662ba892e5940cc79c4d6e0b",
//     "662bba22e5940cc79c4d6e1c",
//     "662bb6ece5940cc79c4d6e1a",
//     "662bb6ece5940cc79c4d6e1b"
//   ],
//   "images": [
//     "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/06/chardham-yatra-1591697406.jpg",
//     "https://www.savaari.com/blog/wp-content/uploads/2024/01/1024px-Kedarnath_2-1_11zon-1.jpg",
//     "https://www.chardham-pilgrimage-tour.com/assets/images/badrinath-banner3.webp",
//     "https://uttarakhandtriptrek.com/wp-content/uploads/2019/01/gangotri-temple-Saurabh-Chatterjee.jpg",
//     "https://www.chardhamplan.com/images/Yamunotri-place-to-visit.png",
//     "https://www.holidify.com/images/bgImages/GANGOTRI.jpg"
//   ],
//   "description": "The Char Dham Yatra is a revered pilgrimage circuit in the Indian state of Uttarakhand, comprising four sacred sites: Yamunotri, Gangotri, Kedarnath, and Badrinath. These destinations hold deep religious significance for Hindus, with each site dedicated to a different deity.\n\nPilgrims undertake this journey seeking spiritual purification and divine blessings. The yatra typically begins with a visit to Yamunotri and Gangotri, the sources of the Yamuna and Ganga rivers, respectively.\n\nKedarnath, nestled in the Himalayas, is home to an ancient Shiva temple accessible via a trekking route. Finally, the pilgrimage concludes at Badrinath, where devotees pay homage to Lord Vishnu.\n\nThe Char Dham Yatra offers a profound spiritual experience amidst awe-inspiring natural beauty, attracting thousands of devotees and tourists annually."
// }

export default function AddTourPackage() {
  const [mainImg, setMainimg] = useState([]);
  const [otherImg, setOtherImg] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [tourOption, setTourOption] = useState([]);

  const {
    data: post,
    isError,
    error: fetchError,
    isPending: loading,
  } = useFetch("/tour");

  useEffect(() => {
    if (post) {
      const temp = post.map((el) => {
        return {
          label: el.title,
          value: el.id,
        };
      });
      setTourOption(temp);
    }
  }, [post]);

  const handleChange = (event, newValues) => {
    setSelectedItems(newValues);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const images = [...mainImg, ...otherImg];
    const tourArr = selectedItems.map((el) => el.value);
    if (images.length < 1) {
      setError("Please Upload atleast 1 image");
      return;
    }

    if (images.length > 9) {
      setError(
        `Maximum limit is 9, you have selected ${
          images.length
        } images, Please remove ${images.length - 9} image`
      );
      return;
    }
    if (tourArr.length < 1) {
      setError("Please select atleast 1 tour");
      return;
    }
    const data = {
      name: name,
      images: [...mainImg, ...otherImg],
      description: description,
      tours: tourArr,
    };
    console.log(data);
  }

  if (isError) {
    return (
      <Typography marginTop={"2rem"} textAlign={"center"}>
        Error : {fetchError.message},Try refreshing the Page
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
          Add new Tour Package
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
          label="Tour Package Name"
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

        <Typography variant="h6">Add Other Images Max Limit is 8</Typography>

        <ImageUploader
          setUploadedImages={setOtherImg}
          uploadedImages={otherImg}
          maxFiles={8}
        />
        {loading ? (
          "Fetching Tours"
        ) : (
          <Autocomplete
            multiple
            value={selectedItems}
            onChange={handleChange}
            options={tourOption}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.value}>
                  {option.label}
                </li>
              );
            }}
            renderTags={(tagValue, getTagProps) => {
              return tagValue.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option.value}
                  label={option.label}
                />
              ));
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select Tours included Here" />
            )}
          />
        )}

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
