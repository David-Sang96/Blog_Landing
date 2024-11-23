import { Box, Container, Stack } from "@mui/material";
import { useEffect } from "react";
import CategoryHomePage from "../../category/pages/CategoryHomePage";
import RightbarHomePge from "../../rightbar/pages/RightbarHomePge";
import Hero from "./Hero";
import Recents from "./Recents";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ pb: 4 }} component={"section"}>
      <Hero />
      <Container>
        <CategoryHomePage />
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: { sm: "18px 100px 100px 100px" } }}>
            <Recents />
          </Box>
          <Box flex={1}>
            <RightbarHomePge />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
