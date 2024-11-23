import { Box, Typography } from "@mui/material";
import HeroImage from "../../../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <Box component={"section"}>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Fashions<b style={{ color: "red" }}>Blog</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        We Make you look the better of you!
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 2,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            p: { xs: 1.5, sm: 2 },
          }}
        >
          <Box sx={{ background: "white", opacity: 0.8 }}>
            <Typography variant="h6" color="tomato" align="center" pt={8}>
              Trending Styles
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, fontWeight: 600 }}
              align="center"
            >
              Life is Boring without Fashion!
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              We love to change your style lorem ipsum
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
