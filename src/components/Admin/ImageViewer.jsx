import { Button, Card, CardActions, CardMedia } from "@mui/material";
import React from "react";

export default function ImageViewer({ url, handleImageRemove }) {
  return (
    <Card
      key={url}
      sx={{
        width: "200px",
        margin: "0.5rem",
        display: "inline-block",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          // objectFit: "cover",
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
        // image={URL.createObjectURL(file)}
        image={url}
        alt={url}
      />

      <CardActions>
        <Button
          onClick={() => handleImageRemove(url)}
          sx={{ width: "100%" }}
          color="error"
          size="small"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
