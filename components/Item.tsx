import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));
