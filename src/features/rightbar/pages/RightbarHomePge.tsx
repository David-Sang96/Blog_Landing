import { Box, Typography } from "@mui/material";
import postImage1 from "../../../assets/image1.jpg";
import postImage2 from "../../../assets/image2.jpg";
import postImage3 from "../../../assets/image3.jpg";
import postImage4 from "../../../assets/image4.jpg";
import postImage5 from "../../../assets/image5.jpg";
import CategoryCard from "../../category/components/CategoryCard";
import ListCard from "../components/ListCard";

interface Props {
  isShow?: boolean;
}

const RightbarHomePge = ({ isShow = true }: Props) => {
  return (
    <Box component={"section"}>
      <Typography align="center" bgcolor={"black"} color="white" py={1}>
        Most Popular
      </Typography>

      <ListCard image={postImage2} />
      <ListCard image={postImage3} />
      <ListCard image={postImage4} />
      {!isShow && (
        <>
          <ListCard image={postImage1} />
          <ListCard image={postImage5} />
        </>
      )}
      {isShow && (
        <>
          <Typography
            align="center"
            bgcolor={"black"}
            py={1}
            color="white"
            mt={3}
          >
            About Us
          </Typography>
          <Box mt={3}>
            <CategoryCard cardImage={postImage3} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default RightbarHomePge;
