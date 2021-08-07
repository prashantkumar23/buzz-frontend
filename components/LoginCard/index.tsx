import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
import "react-phone-number-input/style.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import Yup from "yup";

import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
import { CenterText } from "../CenterText";
import { SimpleInput } from "../Inputs/SimpleInput";
import { coreThemeObj } from "../../theme/theme";
import Link from "next/link";

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

// const validationSchema = Yup.object({
//   password: Yup.string().required("Password is required"),
//   userEmailPhone: Yup.string()
//     // .email("Enter a valid email")
//     .required("Email or Phone Number is required")
//     .test("test-name", "Enter Valid Phone/Email", function (value) {
//       const emailRegex =
//         /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//       const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
//       let isValidEmail = emailRegex.test(value as string);
//       let isValidPhone = phoneRegex.test(value as string);
//       if (!isValidEmail && !isValidPhone) {
//         return false;
//       }
//       return true;
//     }),
// });

export const LoginCard: React.FC = ({}) => {
  const classes = useStyles();

  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6" className={classes.typographyText}>
              🥰 Welcome back!
            </Typography>
          </CenterText>
        </Stack>
        <SimpleInput
          size="small"
          placeholder="Enter your email/phone"
          name="inputOne"
        />
        <SimpleInput
          size="small"
          type="pasword"
          placeholder="Enter your password"
          name="inputTwo"
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
          Submit
        </SimpleButton>

        <CenterText>
          <Link href="/forgot-password" passHref>
            <Typography variant="caption" className={classes.linkText}>
              Forgot your password?
            </Typography>
          </Link>
        </CenterText>
      </Stack>
    </Base>
  );
};
