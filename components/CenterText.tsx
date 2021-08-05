import React from "react";
import Paper from "@material-ui/core/Paper";

export const CenterText: React.FC = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "background.default",
        textAlign: "center",
      }}
    >
      {children}
    </Paper>
  );
};
