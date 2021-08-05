import React from "react";
import Paper from "@material-ui/core/Paper";
import { coreThemeObj } from "../theme/theme";

export const Base: React.FC = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "30rem",
        height: "18rem",
        borderRadius: "0.75rem",
        padding: "3rem",
        // paddingBottom: "3.5rem",
        backgroundColor: "background.default",
        [coreThemeObj.breakpoints.only("xs")]: {
          padding: "2rem",
          height: "20rem",
          width: "inherit",
        },
      }}
      variant="outlined"
    >
      {children}
    </Paper>
  );
};
