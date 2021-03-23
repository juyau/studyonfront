import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import Controls from "./Form/controls/Controls";

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog
      open={openPopup}
      onClose={() => {
        setOpenPopup(true);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box display="flex">
        <DialogTitle id="alert-dialog-title" style={{ flex: "1" }}>
          {title}
        </DialogTitle>

        <Controls.ActionButton
          color="secondary"
          onClick={() => {
            setOpenPopup(false);
          }}
        >
          <CloseIcon />
        </Controls.ActionButton>
      </Box>

      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
