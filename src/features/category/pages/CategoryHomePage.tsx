import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import KidsImage from "../../../assets/kids.jpg";
import MenImage from "../../../assets/men.jpg";
import WomenImage from "../../../assets/women.jpg";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: 5,
});

const StyledTypography = styled(Typography)({
  background: "white",
  opacity: 0.8,
  marginTop: "25%",
  marginInline: 50,
});

const CategoryHomePage = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={6}
      >
        <StyledBox sx={{ backgroundImage: `url(${KidsImage})`, pb: 6 }}>
          <StyledTypography
            align="center"
            sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            Kids
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${MenImage})`, pb: 6 }}>
          <StyledTypography
            align="center"
            sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            Men
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${WomenImage})`, pb: 6 }}>
          <StyledTypography
            align="center"
            sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            Women
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default CategoryHomePage;
