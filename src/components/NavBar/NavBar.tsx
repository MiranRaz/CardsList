import { Link, useLocation } from "react-router-dom";
// mui
import { ButtonGroup, Button } from "@mui/material";

const NavBar = () => {
  const location = useLocation();
  const isCssActive = location.pathname === "/";

  return (
    <ButtonGroup
      variant="text"
      sx={{
        pt: "22px",
        pb: "22px",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            color: "black",
            textDecoration: isCssActive ? "underline" : "none",
          }}
        >
          css
        </Button>
      </Link>
      <Link to="/mui" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            color: "black",
            textDecoration: !isCssActive ? "underline" : "none",
          }}
        >
          mui
        </Button>
      </Link>
    </ButtonGroup>
  );
};

export default NavBar;
