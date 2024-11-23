import { Box } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./Navbar";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar = ({ open, setOpen }: Props) => {
  useEffect(() => {
    // When the menu is open, prevent scrolling and lock the width
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${
        window.innerWidth - document.body.clientWidth
      }px`; // To prevent layout shift due to the scrollbar
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0"; // Reset padding when the menu is closed
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0"; // Clean up on unmount or menu close
    };
  }, [open]);

  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      open={open}
      onClose={() => setOpen(!open)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Box sx={{ width: 350, height: "80dvh" }}>
        {menuItems.map((item) => (
          <Link
            to={item.Link}
            key={item.Name}
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setOpen(!open)}
          >
            <MenuItem
              sx={{
                fontSize: 18,
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  fontWeight: "bold",
                },
              }}
            >
              {item.Name}
            </MenuItem>
          </Link>
        ))}
      </Box>
    </Menu>
  );
};

export default MobileNavbar;
