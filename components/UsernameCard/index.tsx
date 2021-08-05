import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CheckIcon from "@material-ui/icons/Check";
import { InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { coreThemeObj } from "../../theme/theme";
import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
import { SimpleInput } from "../Inputs/SimpleInput";
import { CenterText } from "../CenterText";

const useStyles = makeStyles({
  typographyText: {
    [coreThemeObj.breakpoints.only("xs")]: {
      fontSize: "1.1rem",
    },
  },
});

export const UsernameCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6" className={classes.typographyText}>
              🤓 Choose your username
            </Typography>
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
