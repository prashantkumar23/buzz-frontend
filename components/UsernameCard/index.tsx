import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";

import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CheckIcon from "@material-ui/icons/Check";
import { SimpleInput } from "../Inputs/SimpleInput";
import { CenterText } from "../CenterText";
import { InputAdornment } from "@material-ui/core";

export const UsernameCard: React.FC = () => {
  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6">🤓 Choose your username</Typography>
          </CenterText>
        </Stack>
        <SimpleInput
          placeholder="Pick your username"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="caption">
          Username can be used for the login
        </Typography>
        <SimpleButton
          disableRipple
          sx={{
            backgroundColor: "background.default",
            height: "2rem",
            "&:hover": {
              backgroundColor: "background.paper",
            },
          }}
          endIcon={<CheckIcon />}
        >
          Create my account
        </SimpleButton>
      </Stack>
    </Base>
  );
};
