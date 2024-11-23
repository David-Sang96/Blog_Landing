import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

interface Props {
  image: string;
}

const ListCard = ({ image }: Props) => {
  return (
    <List
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <ListItem
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <ListItemAvatar>
          <Avatar
            alt="post Image"
            src={image}
            sx={{ height: 80, width: 80, borderRadius: 2 }}
            variant="square"
          />
        </ListItemAvatar>
        <ListItemText
          secondaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
          secondary={" — I'll be in your neighborhood doing errands this…"}
        />
      </ListItem>
      <Divider variant="inset" component={"li"} />
    </List>
  );
};

export default ListCard;
