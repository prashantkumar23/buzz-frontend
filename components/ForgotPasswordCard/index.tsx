import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
import "react-phone-number-input/style.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
import { CenterText } from "../CenterText";
import { SimpleInput } from "../Inputs/SimpleInput";
import { coreThemeObj } from "../../theme/theme";

const useStyles = makeStyles({
  typographyText: {
    [coreThemeObj.breakpoints.only("xs")]: {
      fontSize: "1.1rem",
    },
  },
  linkText: {
    cursor: "pointer",
  },
  buttonGroup: {
    "& 	.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
      "&.Mui-selected": {
        backgroundColor: "background.default",
      },
      "&:hover": {
        backgroundColor: "background.default",
      },
    },
    "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
      marginLeft: "0.5rem",
      "&.Mui-selected": {
        backgroundColor: "background.paper",
      },
      "&:hover": {
        backgroundColor: "background.default",
      },
    },
  },
});

export const ForgotPasswordCard: React.FC = ({}) => {
  const classes = useStyles();

  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6" className={classes.typographyText}>
              🙃 Don't worry we'll help you
            </Typography>
          </CenterText>
        </Stack>
        <SimpleInput
          size="small"
          placeholder="Enter your email/phone"
          name="inputOne"
        />
        <SimpleButton
          disableRipple
          sx={{
            backgroundColor: "background.default",
            height: "2rem",
            "&:hover": {
              backgroundColor: "background.paper",
            },
          }}
          endIcon={<CheckCircleIcon />}
          type="submit"
        >
          Get the OTP
        </SimpleButton>
      </Stack>
    </Base>
  );
};
