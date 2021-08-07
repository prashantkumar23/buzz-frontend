import { Stack } from "@material-ui/core";
import * as React from "react";
import { CenterPaper, ForgotPasswordCard } from "../../components";

export default function ForgotPassword() {
  return (
    <CenterPaper>
      <Stack
        sx={{ minHeight: "90vh", paddingTop: "15vh", flexGrow: 1 }}
        alignItems="center"
      >
        <ForgotPasswordCard />
      </Stack>
    </CenterPaper>
  );
}
