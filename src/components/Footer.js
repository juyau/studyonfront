import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";

const Footer = () => {
  return (
    <footer style={{ marginTop: "1rem" }}>
      <Divider></Divider>
      <Typography
        variant="subtitle1"
        color="initial"
        style={{ textAlign: "center", padding: "16px" }}
      >
        Copyright &copy; StudyOn
      </Typography>
    </footer>
  );
};

export default Footer;
