import { styled } from "@material-ui/core/styles";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";

export const UploadButton = styled(IconButton)<IconButtonProps>(() => ({
  fontSize: "1rem",
  // padding: "1.75rem 1.75rem",
  borderRadius: "50%",
  borderWidth: ".075rem",
  borderStyle: "solid",
  borderColor: "rgb(203, 213, 225)",
  textTransform: "none",
  fontFamily: "sans-serif",
  transition: "none",
  transform: "none",
  marginTop: 0,
}));
