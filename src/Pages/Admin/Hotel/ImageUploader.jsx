import { Skeleton, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IMGBB } from "../../../utility/CONSTANT";
const dropZoneStyles = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  margin: "20px auto",
  width: "80%",
};

const imagePreviewStyles = {
  display: "inline-block",
  width: "200px",
  height: "200px",
  objectFit: "cover",
  margin: "0rem 0.2rem",
};

function ImageSkeleton() {
  return (
    <>
      <Skeleton
        sx={{
          marginY: "1rem ",
          marginX: "auto",
        }}
        variant="rectangular"
        width={"200px"}
        height={"200px"}
      ></Skeleton>
    </>
  );
}

function ImageUploader({ maxFiles }) {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (fileRejections && fileRejections.length > 0) {
      // Handle rejection
      setError(
        `Some files were rejected. Make sure you upload only images and no more than ${maxFiles} files.`
      );
    } else {
      setError("");
      setLoading(true);
      uploadImages(acceptedFiles);
    }
  }, []);

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      maxFiles,
      onDrop: onDrop,
    });

  const handleImageError = (event) => {
    // Handle image error
    console.log("Error loading image:", event.target.src);
  };

  const uploadImages = async (files) => {
    const API_KEY = IMGBB;

    const promises = files.map((file) => {
      const formData = new FormData();
      formData.append("image", file);

      return axios
        .post(`https://api.imgbb.com/1/upload?key=${API_KEY}`, formData)
        .then((response) => response.data.data)
        .catch((error) => {
          console.error("Error uploading to ImageBB:", error);
          setError("Error uploading to ImageBB. Please try again.");
        });
    });

    const results = await Promise.all(promises);
    setLoading(false);
    setUploadedImages(results.filter((result) => result));
  };
  console.log(uploadedImages[0]);

  return (
    <section style={{ marginBottom: "0.5rem" }} className="container">
      <div style={dropZoneStyles} {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>
          Click here to select {maxFiles === 1 && "Main"} Image or Drop the
          images here
        </p>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <aside>
        <h4>Uploaded Images</h4>
        {loading && <ImageSkeleton />}
        {!loading && (
          <>
            <div>
              {uploadedImages.map((image, index) => (
                <div style={{ display: "inline-block" }} key={index}>
                  <img
                    src={image?.medium?.url || image.url}
                    alt={image.image.filename}
                    onError={handleImageError}
                    style={imagePreviewStyles}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </aside>
    </section>
  );
}

export default ImageUploader;
