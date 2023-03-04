import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from "react-bootstrap";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const CarouselWithCards = () => {
  const classes = useStyles();

  return (
    <Carousel>
      <Carousel.Item>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/800x600/?nature,water"
            title="Nature"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Nature
            </Typography>
            <Typography>
              This is a beautiful picture of nature and water.
            </Typography>
            <Typography>
              <Star /> <Star /> <Star /> <Star /> <Star />
            </Typography>
          </CardContent>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/800x600/?beach,ocean"
            title="Beach"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Beach
            </Typography>
            <Typography>
              This is a beautiful picture of a beach and ocean.
            </Typography>
            <Typography>
              <Star /> <Star /> <Star /> <Star />
            </Typography>
          </CardContent>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselWithCards;
