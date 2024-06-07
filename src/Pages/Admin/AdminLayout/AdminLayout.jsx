import { Divider, Link, Toolbar } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { userContext } from "../../../store/UserProvider";
import { checkAdmin } from "../../../utility/checkAdmin";

export default function AdminLayout() {
  const navigate = useNavigate();
  const sections = [
    { title: "Manage Hotel", url: "managehotel" },
    { title: "Manage Homestay", url: "managehomestay" },
    { title: "Manage Tour", url: "managetour" },
    { title: "Manage TourPackage", url: "managetourpackage" },
  ];
  const { userState } = useContext(userContext);
  useEffect(() => {
    const { isAdmin } = checkAdmin(userState);
    if (!isAdmin) {
      navigate("/");
    }
  }, [userState]);

  return (
    <>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "flex-start", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            component={NavLink}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? grey[700] : "",
                borderRadius: "7px",
                color: isActive ? "white" : "",
              };
            }}
            noWrap
            key={section.title}
            variant="body2"
            to={section.url}
            sx={{
              p: 1,
              mr: "2rem",
              flexShrink: 0,
              backgroundColor: grey[50],
              ":hover": {
                backgroundColor: grey[500],
              },
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Divider />
      <Outlet />
    </>
  );
}
