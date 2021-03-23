import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

import productImg from "../images/01.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    minHeight: 160,
  },
});

const PreviewCard = ({ course }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/course/1234`}>
          <CardMedia
            className={classes.media}
            image={productImg}
            title="Contemplative Reptile"
          />
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography variant="h6" component="h5">
          Java Microservice Course
        </Typography>

        <div>
          <Rating name="read-only" size="small" value={3.8} readOnly />
          <p>3.8 of 5 stars</p>
          <p style={{ marginTop: "8px", fontWeight: "bold", color: "purple" }}>
            $19.99
          </p>
        </div>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PreviewCard;
