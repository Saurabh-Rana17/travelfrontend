import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Activate() {
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  async function handleClick() {
    if (!user) return;
    setIsGenerating(true);
    const response = await fetch("https://travel-rv5s.onrender.com/generate", {
      method: "POST",
      body: user.email,
      headers: {
        "Content-Type": "plain/text",
      },
    });
    const res = await response.json();
    setIsGenerating(false);
    if (res) navigate("/verify");
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginY: "8rem",
        }}
      >
        <Paper sx={{ padding: "2rem" }} elevation={3}>
          <Typography gutterBottom variant="h6">
            Your account is currently unverified click below to verify
          </Typography>
          <Typography gutterBottom variant="body1">
            you will recieve a OTP on your registered email
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Button
              disabled={isGenerating}
              onClick={handleClick}
              variant="contained"
            >
              {isGenerating ? "Generating..." : "Generate"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
