import styled from "@emotion/styled";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const SocialBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: 10,
  color: "white",
  paddingTop: 3,
});

const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        background: "black",
        minHeight: "250px",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        p={{ xs: 5, md: 7 }}
        spacing={{ xs: 3 }}
      >
        <Box flex={1}>
          <Typography color="white" align="center" pb={2}>
            Contact Us
          </Typography>
          <Typography color="white" align="center">
            of squamate reptiles, with over 6,000 species,
          </Typography>
          <Typography color="white" align="center">
            continents except Antarcti
          </Typography>
          <Typography color="white" align="center">
            ranging across
          </Typography>
        </Box>
        <hr />
        <Box flex={1}>
          <Typography color="white" align="center" pb={2}>
            Data policy
          </Typography>
          <Typography color="white" align="center">
            cookies
          </Typography>
          <Typography color="white" align="center">
            Data safety
          </Typography>
        </Box>
        <hr />
        <Box flex={1}>
          <Typography color="white" align="center" pb={2}>
            Categories
          </Typography>
          <Typography color="white" variant="body2" align="center">
            Kids
          </Typography>
          <Typography color="white" variant="body2" align="center">
            Women
          </Typography>
          <Typography color="white" variant="body2" align="center">
            Men
          </Typography>
        </Box>
        <hr />
        <Box flex={1}>
          <Typography color="white" align="center" pb={2}>
            Follow Us
          </Typography>
          <SocialBox>
            <Facebook sx={{ fontSize: { xs: 20, sm: 25 } }} />
            <Instagram sx={{ fontSize: { xs: 20, sm: 25 } }} />
            <Twitter sx={{ fontSize: { xs: 20, sm: 25 } }} />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
