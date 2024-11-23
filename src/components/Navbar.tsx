import styled from "@emotion/styled";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";

import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
});

const MenuBox = styled(Box)({
  display: "flex",
  gap: 30,
});

const SearchBox = styled(Box)({
  display: "flex",
  gap: 5,
});

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppBar sx={{ bgcolor: "black" }} position="static">
      <StyledToolbar>
        <SocialBox>
          <Facebook sx={{ fontSize: { xs: 20, sm: 25 } }} />
          <Instagram sx={{ fontSize: { xs: 20, sm: 25 } }} />
          <Twitter sx={{ fontSize: { xs: 20, sm: 25 } }} />
        </SocialBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Link
              to={item.Link}
              key={item.Name}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography fontSize={14}>{item.Name}</Typography>
            </Link>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase
            placeholder="Search..."
            sx={{ color: "white", fontSize: { xs: 13, sm: 16 } }}
          />
          <MenuIcon
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            onClick={() => setOpen(!open)}
          />
        </SearchBox>
      </StyledToolbar>
      <MobileNavbar open={open} setOpen={setOpen} />
    </AppBar>
  );
};

export default Navbar;

export const menuItems = [
  { Name: "Home", Link: "/" },
  { Name: "Products", Link: "/" },
  { Name: "Portfolio", Link: "/" },
  { Name: "Blog", Link: "/" },
  { Name: "Contact Us", Link: "/" },
];
