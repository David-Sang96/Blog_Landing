import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import postImage1 from "../../../assets/image1.jpg";
import postImage2 from "../../../assets/image2.jpg";
import {
  default as cardImage,
  default as postImage3,
} from "../../../assets/image3.jpg";
import postImage4 from "../../../assets/image4.jpg";
import CategoryCard from "../../category/components/CategoryCard";

const Recents = () => {
  return (
    <Box component={"section"}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid>
          <CategoryCard cardImage={cardImage} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CategoryCard cardImage={postImage1} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CategoryCard cardImage={postImage2} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CategoryCard cardImage={postImage3} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CategoryCard cardImage={postImage4} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
