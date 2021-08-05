import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
import OtpInput from "react-otp-input";

import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
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

export const OTPCard: React.FC = () => {
  const [otp, setOtp] = useState("");
  const classes = useStyles();

  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6" className={classes.typographyText}>
              🔒 Enter the code we have just texted you
            </Typography>
          </CenterText>
        </Stack>
        <OtpInput
          className="input-otp"
          value={otp}
          onChange={(otp: string) => setOtp(otp)}
          numInputs={6}
          separator={
            <span>
              <strong> &nbsp;</strong>
            </span>
          }
          isInputNum
          containerStyle={{
            backgroundColor: "background.default",
          }}
          inputStyle={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "0.5rem",
            border: "1px solid rgba(0,0,0,0.3)",
          }}
        />
        <SimpleButton
          disableRipple
          sx={{
            backgroundColor: "transparent",
            height: "1rem",
            borderColor: "transparent",
            margin: 0,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Typography variant="caption">
            Didn't receive Tap to resend
          </Typography>
        </SimpleButton>
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
