import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{
            flex: 1,
            display: {
              sm: "none",
            },
          }}
        >
          {!active && title}
        </Typography>

        <Typography
          component="h2"
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
          {title}
        </Typography>

        {active ? (
          <Input
            align="center"
            sx={{
              width: {
                xs: "50vw",
                sm: "auto",
              },
            }}
            size="small"
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          ""
        )}

        <IconButton onClick={HandleSearchBar}>
          <SearchIcon />
        </IconButton>
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
          <Button variant="outlined" size="small" href="/signUp">
            Sign up
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
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
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
