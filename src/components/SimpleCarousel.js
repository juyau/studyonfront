import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../images/4.png";
import img2 from "../images/5.jpg";
import img3 from "../images/6.jpg";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const imageList = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
];

const useStyles = makeStyles({
  root: {
    // margin: "1rem",
    position: "relative",
    // height: "100%",
    // margin: "100px",
    maxWidth: (props) => props.width,
  },
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
    overflow: "hidden",
    transitionDuration: "1s",
  },
  active: {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 1,
    transitionDuration: "1s",
  },
  img: {
    // maxWidth: (props) => props.width,
    width: "100%",
    // height: "100%",
  },
  controls: {
    top: "120px",
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 9,
  },

  buttons: {
    margin: "20px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.3)",
    },
  },
});

const SimpleCarousel = (props) => {
  const [current, setCurrent] = useState(0);
  const classes = useStyles(props);
  const goNext = () => {
    if (current < imageList.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  const goPrev = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(imageList.length - 1);
    }
  };

  return (
    <div style={{ minHeight: "400px" }}>
      <div className={classes.root}>
        {imageList.map((item, i) => (
          <div
            key={i}
            className={i === current ? `${classes.active}` : `${classes.slide}`}
          >
            <img className={classes.img} src={item.image} alt="idontknow"></img>
          </div>
        ))}
        <div className={classes.controls}>
          <Button
            className={classes.buttons}
            variant="outlined"
            color="primary"
            onClick={goPrev}
          >
            {" "}
            <KeyboardArrowLeftIcon />
          </Button>
          <Button
            className={classes.buttons}
            variant="outlined"
            color="primary"
            onClick={goNext}
          >
            <KeyboardArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCarousel;
