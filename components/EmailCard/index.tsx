import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";

import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
import { SimpleInput } from "../Inputs/SimpleInput";
import { CenterText } from "../CenterText";
import { ArrowForward } from "@material-ui/icons";

export const EmailCard: React.FC = () => {
  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6">✉️ Enter your email</Typography>
          </CenterText>
        </Stack>
        <SimpleInput size="small" />
        <SimpleButton
          disableRipple
          sx={{
            backgroundColor: "background.default",
            height: "2rem",
            "&:hover": {
              backgroundColor: "background.paper",
            },
          }}
          endIcon={<ArrowForward />}
        >
          Next
        </SimpleButton>
        <CenterText>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            cupiditate. Et aspernatur in consequatur natus corrupti quibusdam,
          </Typography>
        </CenterText>
      </Stack>
    </Base>
  );
};
