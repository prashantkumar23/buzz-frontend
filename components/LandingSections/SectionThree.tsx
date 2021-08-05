import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import { coreThemeObj } from "../../theme/theme";

export const SectionThree = () => {
  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "50vh",
        textAlign: "center",
        [coreThemeObj.breakpoints.only("xs")]: {
          height: "70vh",
        },
      }}
      alignItems="center"
      justifyContent="center"
    >
      <div style={{ width: "70%" }}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          consectetur, quidem reiciendis corporis maxime iure rerum illum magnam
          ex! Nemo obcaecati minima ut? Voluptates aspernatur possimus placeat
          minus perspiciatis ex. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquid fugiat sit voluptatibus optio. Aspernatur
          libero possimus atque nihil quidem suscipit natus accusamus
          exercitationem maiores, nulla dolores ullam ea assumenda similique.
        </Typography>
      </div>
    </Stack>
  );
};
