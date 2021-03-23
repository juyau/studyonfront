import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Paper } from "@material-ui/core";

import FileUpload from "../../../components/FileUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // padding: "1rem",
  },
  image: {
    maxWidth: "70%",
    maxHeight: "300px",
    margin: "1rem",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
  },
}));

const CourseImage = ({ setTapValue }) => {
  const classes = useStyles();

  const [fileInfos, setFileInfos] = useState("");
  const [currentFile, setCurrentFile] = useState(undefined);

  const afterUpload = (response) => {
    console.log(response.data);
    setFileInfos(response.data.data.filePath);
  };

  return (
    <div className={classes.root}>
      {fileInfos && (
        <Paper className={classes.paper}>
          <img src={fileInfos} className={classes.image} />
        </Paper>
      )}
      <FileUpload
        buttonText="Upload Image"
        afterUpload={afterUpload}
        suffixs={["jpg", "png", "jpeg"]}
      />
    </div>
  );
};

export default CourseImage;
