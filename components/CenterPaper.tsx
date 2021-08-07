import React from "react";
import { Paper, Container } from "@material-ui/core";
import { JunoAppBar } from "./AppBar";

export const CenterPaper: React.FC = ({ children }) => {
  return (
    <Paper
      sx={{
        minHeight: "100vh",
        width: "100%",
        flexGrow: 1,
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
