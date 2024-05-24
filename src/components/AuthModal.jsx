import { Dialog, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";

export default function AuthModal({ showModal, setShowModal }) {
  const [content, setContent] = useState("signin");
  return (
    <Dialog onClose={() => setShowModal(false)} open={showModal}>
      <Typography margin={1} align="center" variant="h6">
        Please Sign In to Continue
      </Typography>
      <Divider />
      {content === "signin" && (
        <SignInComponent setShowModal={setShowModal} setContent={setContent} />
      )}
      {content === "signup" && (
        <SignUpComponent setShowModal={setShowModal} setContent={setContent} />
      )}
    </Dialog>
  );
}
