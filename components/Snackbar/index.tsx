import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert, { AlertColor } from "@material-ui/core/Alert";

interface SnackbarProps {
  notify: {
    isOpen: boolean;
    message: string;
    type: AlertColor | undefined;
  };
  setNotify: (notify) => void;
}

export const CustomSnackBar: React.FC<SnackbarProps> = ({
  notify,
  setNotify,
}) => {
  const { isOpen, message, type } = notify;
  //   const classes = useStyles();

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert
        severity={type}
        onClose={handleClose}
        variant="standard"
        sx={{ borderRadius: "0.75rem" }}
        iconMapping={{
          info: "🤓",
          warning: "😱",
          success: "😍",
          error: "😶",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
