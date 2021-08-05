import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";

import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
import { SimpleInput } from "../Inputs/SimpleInput";
import { CenterText } from "../CenterText";
import { ArrowForward } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { coreThemeObj } from "../../theme/theme";

const useStyles = makeStyles({
  typographyText: {
    [coreThemeObj.breakpoints.only("xs")]: {
      fontSize: "1.1rem",
    },
  },
});

export const NameCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6" className={classes.typographyText}>
              🤨 What's your full name
            </Typography>
          </CenterText>
        </Stack>
        <SimpleInput size="small" />
        <Typography variant="caption">People use real name at Juno</Typography>
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
      </Stack>
    </Base>
  );
};
