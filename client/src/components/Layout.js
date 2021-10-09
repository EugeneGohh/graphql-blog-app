import React from "react";
import { deepOrange } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";

function Layout({ blogData }) {
  const { heading, thumbnail, author, length } = blogData;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={
          {
            // 16:9
          }
        }
        image={thumbnail}
        alt="random"
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Box>
            <Typography gutterBottom variant="h5" component="h2">
              {heading}
            </Typography>
          </Box>

          <Box ml={5}>
            <Button size="small">View</Button>
          </Box>
        </Box>

        <Typography>It's a freaking description</Typography>
      </CardContent>

      <CardActions>
        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
          N
        </Avatar>
        <Typography variant="subtitle2" gutterBottom component="div">
          {author.name}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default Layout;
