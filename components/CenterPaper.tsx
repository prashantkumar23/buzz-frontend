import React from "react";
import { Paper, Container } from "@material-ui/core";
import { JunoAppBar } from "./AppBar";

export const CenterPaper: React.FC = ({ children }) => {
  return (
    <Paper
      sx={{
        height: "auto",
        width: "100%",
        // paddingBottom: "1.5rem",
      }}
      elevation={0}
    >
      <Container maxWidth="lg">
        <JunoAppBar />
        {children}
      </Container>
    </Paper>
  );
};
