import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  cardImage: string;
}

const CategoryCard = ({ cardImage }: Props) => {
  return (
    <Box>
      <Link to={"/details"} style={{ textDecoration: "none", color: "black" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height={300}
          sx={{ borderRadius: 2 }}
          image={cardImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            align="center"
            component="div"
            color="tomato"
          >
            PERFUMES
          </Typography>
          <Typography gutterBottom variant="h5" align="center" component="div">
            Wearing this will make everyone love you
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            align="center"
            component="div"
            color="text.secondary"
          >
            It's women' love
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default CategoryCard;
