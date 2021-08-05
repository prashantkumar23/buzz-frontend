import Link from "next/link";
import { SimpleButton } from "../Button/SimpleButton";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
import Divider from "@material-ui/core/Divider";
// import { makeStyles } from "@material-ui/styles";

import { coreThemeObj } from "../../theme/theme";

// const useStyles = makeStyles({
// });

export const SectionOne = () => {
  // const classes = useStyles();

  return (
    <Stack
      direction="column"
      sx={{
        // backgroundColor: "gainsboro",
        width: "50%",
        paddingLeft: 0,
        height: "auto",
        paddingBottom: "1rem",
        paddingTop: "1rem",
        [coreThemeObj.breakpoints.between("xs", "md")]: {
          width: "100%",
          alignItems: "center",
          textAlign: "center",
        },
      }}
      spacing={3}
    >
      <Typography variant="h1">THE</Typography>
      <Typography variant="h1">SOCIAL</Typography>
      <Typography variant="h1">AUDIO</Typography>
      <Typography variant="h1">APP</Typography>
      <Divider />
      <Typography variant="h6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iste nam
        blanditiis ut natus ipsa
      </Typography>
      <Link href="/join" passHref>
        <SimpleButton
          sx={{
            backgroundColor: "background.default",

            width: "20rem",
            [coreThemeObj.breakpoints.between("xs", "md")]: {
              width: "20rem",
            },
          }}
        >
          😍 Get your username
        </SimpleButton>
      </Link>
    </Stack>
  );
};
