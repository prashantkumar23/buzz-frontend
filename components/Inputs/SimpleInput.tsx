import { inputLabelClasses, outlinedInputClasses } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

export const SimpleInput = styled(TextField)<TextFieldProps>({
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      border: "none",
    },

  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      border: "none",
    },
  [`& .${inputLabelClasses.outlined}`]: {
    border: "none",
  },

  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      border: "none",
    },

  [`&:hover .${inputLabelClasses.outlined}`]: {
    border: "none",
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    border: "none",
  },

  [`& .${outlinedInputClasses.input}`]: {
    border: "none",
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    border: "none",
  },
  borderRadius: "0.75rem",
  fontSize: "1rem",
  fontFamily: "sans-serif",
  overflow: "hidden",
});
