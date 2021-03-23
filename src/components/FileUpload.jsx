import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";

import { upload } from "../api";
import Button from "../components/Form/controls/Button";
import Notification from "../components/Form/Notification";

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: "1rem",
  },
  box: {
    width: "100%",
    marginRight: "2rem",
    display: "flex",
    justifyContent: "flex-end",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  progress: {
    margin: "8px",
  },
  input: {
    display: "none",
  },
}));

const LinearProgressWithLabel = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

const FileUpload = (props) => {
  const classes = useStyles();
  const {
    buttonText = "Upload File",
    afterUpload,
    suffixs,
    inputId = "file-upload",
  } = props;

  const [progress, setProgress] = useState(0);
  const [notify, setNotify] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const uploadFile = (event) => {
    setProgress(0);

    const file = event.target.files[0];
    let fileName = file.name;
    console.log(fileName);
    let suffix = fileName
      .substring(fileName.lastIndexOf(".") + 1, fileName.length)
      .toLowerCase();

    let isValidFormat = false;
    for (let i = 0; i < suffixs.length; i++) {
      if (suffixs[i].toLowerCase() === suffix) {
        isValidFormat = true;
        upload(file, (event) => {
          setProgress(Math.round((100 * event.loaded) / event.total));
        })
          .then((response) => {
            afterUpload(response);
            setProgress(0);
            setNotify({
              ...notify,
              isOpen: true,
              type: "success",
              message: "Upload sucess!",
            });
            event.target.value = null;
          })
          .catch(() => {
            setProgress(0);
            // setMessage("Could not upload the file!");
            setNotify({
              ...notify,
              isOpen: true,
              type: "error",
              message: "Could not upload the file!",
            });
          });
        break;
      }
    }

    if (!isValidFormat) {
      setNotify({
        ...notify,
        isOpen: true,
        type: "warning",
        message:
          "File format not support, please upload " +
          suffixs.join(", ") +
          " file.",
      });
      event.target.value = null;
    }
  };

  return (
    <div className={classes.root}>
      <Notification notify={notify} setNotify={setNotify} />

      {progress > 0 && (
        <div className={classes.progress}>
          <LinearProgressWithLabel value={progress} />
        </div>
      )}

      <Box className={classes.box}>
        <input
          //   accept="image/*"
          className={classes.input}
          id={inputId}
          //   multiple
          type="file"
          name="file"
          onChange={uploadFile}
        />
        <label htmlFor={inputId}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            text={buttonText}
            startIcon={<CloudUploadIcon />}
          ></Button>
        </label>
      </Box>
    </div>
  );
};

export default FileUpload;
