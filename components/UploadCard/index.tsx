import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
import AddIcon from "@material-ui/icons/Add";
import { ArrowForward } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
import { UploadButton } from "../Button/UplaodButton";
import { LinkButton } from "../Button/LinkButton";
import { CenterText } from "../CenterText";
import { coreThemeObj } from "../../theme/theme";

const useStyles = makeStyles({
  typographyText: {
    [coreThemeObj.breakpoints.only("xs")]: {
      fontSize: "1.1rem",
    },
  },
});

export const UploadCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6" className={classes.typographyText}>
              🙈 Okay, Prahant!
            </Typography>
          </CenterText>
          <Typography sx={{ textAlign: "center", fontSize: "0.7rem" }}>
            How&apos;s this photo?
          </Typography>
        </Stack>

        <UploadButton
          disableRipple
          sx={{
            backgroundColor: "background.default",
            borderColor: "background.paper",
            "&:hover": {
              backgroundColor: "background.paper",
            },
            marginTop: 0,
          }}
        >
          <AddIcon color="primary" sx={{ width: "4rem", height: "4rem" }} />
        </UploadButton>
        <LinkButton>Choose a diferent photo</LinkButton>
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
