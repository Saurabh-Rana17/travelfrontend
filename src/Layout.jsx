import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, createTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ user, setUser }) {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container sx={{ minHeight: "90vh" }} maxWidth="lg">
        <Header user={user} setUser={setUser} />
        <Outlet />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
