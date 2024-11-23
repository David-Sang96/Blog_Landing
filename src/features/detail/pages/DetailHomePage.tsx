import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import postImage from "../../../assets/image3.jpg";
import detailImage from "../../../assets/image5.jpg";
import RightbarHomePge from "../../rightbar/pages/RightbarHomePge";

const DetailHomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box component={"section"}>
      <Box
        sx={{
          backgroundImage: `url(${detailImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 250,
        }}
      >
        <Typography
          align="center"
          color="yellow"
          sx={{
            fontWeight: 900,
            padding: 10,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
          }}
        >
          Clicked Post Title
        </Typography>
      </Box>
      <Container>
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={{ md: 5 }}
        >
          <Box flex={3} sx={{ padding: { md: "18px 100px 100px 100px" } }}>
            <Typography
              mb={{ xs: 2, sm: 3, md: 4 }}
              align="center"
              color="gray"
              sx={{ fontWeight: 900, fontSize: { xs: ".9rem", md: "1rem" } }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              cumque, labore consequatur quidem unde temporibus eos quaerat iste
            </Typography>
            <CardMedia
              component={"img"}
              height={300}
              image={postImage}
              alt="post image"
            />
            <Typography
              align="center"
              my={2}
              sx={{
                fontSize: { xs: "1.3rem", md: "1.5rem" },
                fontWeight: "bold",
              }}
            >
              Women' love Perfumes
            </Typography>
            <Typography
              color="gray"
              p={2}
              align="justify"
              variant="body1"
              sx={{ fontWeight: 900, fontSize: { xs: ".9rem", md: "1rem" } }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              cumque, labore consequatur quidem unde temporibus eos quaerat iste
              exercitationem! Reiciendis quo consectetur perferendis qui debitis
              sit quos, iusto commodi assumenda corrupti sapiente sed eaque
              veritatis facere odit! Aut impedit reiciendis nihil iusto, quos
              deserunt illo facilis vel voluptatum eaque nam. sit quos, iusto
              commodi assumenda corrupti sapiente sed eaque veritatis facere
              odit! Aut impedit reiciendis nihil iusto, quos deserunt illo
              facilis vel voluptatum eaque nam. sit quos, iusto commodi
            </Typography>
          </Box>
          <Box flex={1}>
            <RightbarHomePge isShow={false} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default DetailHomePage;
