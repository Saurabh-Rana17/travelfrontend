import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Input } from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import Divider from "@mui/material/Divider";

function Header({ user, setUser }) {
  const title = "Travels";
  const navigate = useNavigate();
  const sections = [
    { title: "Home", url: "/home" },
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
                  xs: "49vw",
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
        </form>
        {user ? (
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/signin")}
            variant="outlined"
            size="small"
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
            component={RouterLink}
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
