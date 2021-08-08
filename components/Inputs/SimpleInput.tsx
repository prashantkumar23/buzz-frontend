import { InputBase, InputBaseProps } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const SimpleInput = styled(InputBase)<InputBaseProps>({
  padding: "0.4rem",
  borderRadius: "0.5rem",
  fontSize: "1rem",
  fontFamily: "sans-serif",
  overflow: "hidden",
  "& input::placeholder": {
    fontFamily: "GTMaru",
  },
});
