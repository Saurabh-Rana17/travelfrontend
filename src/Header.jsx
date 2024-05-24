import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Badge, Box, Input } from "@mui/material";
import { useNavigate, NavLink, Link as RouterLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { blue, blueGrey, grey, red } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartBadge from "./CartBadge";
import { toast } from "react-toastify";
import { LogoutOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "./StateProvider";

function Header({ user, setUser }) {
  const title = "Travels";
  const { deleteCart } = useContext(CartContext);
  const navigate = useNavigate();
  const sections = [
    { title: "Home", url: "/" },
    { title: "Hotel", url: "/hotel" },
    { title: "Cab", url: "/cab" },
    { title: "Explore", url: "/explore" },
    { title: "Packages", url: "/packages" },
    {
      title: "Inquiry",
      url: "/contact",
    },
  ];

  const [active, setActive] = React.useState(false);
  const [search, setSearch] = React.useState("");
  // const [user, setUser] = React.useState(localStorage.getItem("user"));
  const HandleSearchBar = () => {
    if (!active) setActive(true);
    else if (search.trim().length > 0) {
      navigate("/search/" + search);
    } else {
      setActive(false);
    }
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{
            flex: 1,
            display: {
              sm: "none",
            },
            textDecoration: "none",
          }}
        >
          {!active && (
            <Box
              component={RouterLink}
              sx={{ textDecoration: "none" }}
              color={"inherit"}
              display={"inline-block"}
            >
              {title}
            </Box>
          )}
        </Typography>

        <Typography
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{
            flex: 1,
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <Box
            component={RouterLink}
            sx={{ textDecoration: "none" }}
            color={"inherit"}
            display={"inline-block"}
          >
            {title}
          </Box>
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            HandleSearchBar();
          }}
        >
          {active ? (
            <Input
              value={search}
              align="center"
              autoFocus
              sx={{
                width: {
                  xs: "45vw",
                  sm: "auto",
                },
              }}
              size="small"
              onBlur={() => {
                if (!search) {
                  setActive(false);
                }
              }}
              onChange={(e) => setSearch(e.target.value)}
            />
          ) : (
            ""
          )}

          <IconButton onClick={HandleSearchBar}>
            <SearchIcon />
          </IconButton>
          <Box
            sx={{
              display: {
                xs: active ? "none" : "inline-block",
                sm: "inline-block",
              },
            }}
          >
            <CartBadge />
          </Box>
        </form>
        {user ? (
          <Button
            variant="text"
            size="small"
            color="error"
            sx={{
              "&:hover": {
                backgroundColor: red[700],
                color: "white",
              },
            }}
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("cart");
              deleteCart();

              setUser(null);
              toast.error(
                <>
                  <Box display={"flex"}>
                    <LogoutOutlined sx={{ color: red[300] }} />{" "}
                    <span>Logged Out</span>
                  </Box>
                </>,
                { icon: false }
              );
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => {
              navigate("/signin");
            }}
            variant="text"
            size="small"
            sx={{
              ":hover": {
                backgroundColor: blue[700],
                color: "white",
              },
            }}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            component={NavLink}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? grey[300] : "",
                borderRadius: "7px",
                // color: isActive ? "white" : "",
              };
            }}
            noWrap
            key={section.title}
            variant="body2"
            to={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Divider />
    </React.Fragment>
  );
}

export default Header;
