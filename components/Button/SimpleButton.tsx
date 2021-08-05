import { styled } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

export const SimpleButton = styled(Button)<ButtonProps>(() => ({
  // borderColor: "background.default",
  // backgroundColor: "background.default",
  // "&:hover": {
  //   backgroundColor: "background.paper",
  // },
  fontSize: "1rem",
  padding: "0.75rem 1.75rem",
  borderRadius: ".75rem",
  borderWidth: ".075rem",
  borderStyle: "solid",

  textTransform: "none",
  fontFamily: "sans-serif",
  transform: "none",
}));
