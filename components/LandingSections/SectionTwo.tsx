import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import { coreThemeObj } from "../../theme/theme";

export const SectionTwo = () => {
  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "100vh",
        paddingLeft: 0,
        [coreThemeObj.breakpoints.between("xs", "md")]: {
          textAlign: "center",
          height: "auto",
        },
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid item md={4} xs={12} sx={{ marginTop: "2rem" }}>
          <Stack
            sx={{
              height: "100%",
            }}
          >
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              officia iure in minus eveniet, doloremque eligendi, tempore quas
              vitae voluptas sint quibusdam assumenda maxime voluptatem nihil
              corporis! Saepe, sapiente corporis.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={4} xs={12} sx={{ marginTop: "2rem" }}>
          <Stack
            flexDirection="row"
            sx={{
              height: "100%",
              [coreThemeObj.breakpoints.between("xs", "md")]: {
                paddingTop: 0,
                textAlign: "center",
              },
            }}
            alignItems="center"
          >
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              officia iure in minus eveniet, doloremque eligendi, tempore quas
              vitae voluptas sint quibusdam assumenda maxime voluptatem nihil
              corporis! Saepe, sapiente corporis.
            </Typography>
          </Stack>
        </Grid>

        <Grid item md={4} xs={12} sx={{ marginTop: "2rem" }}>
          <Stack
            alignItems="flex-end"
            flexDirection="row"
            sx={{
              height: "100%",
              [coreThemeObj.breakpoints.between("xs", "md")]: {
                alignItems: "flex-start",
              },
            }}
          >
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              officia iure in minus eveniet, doloremque eligendi, tempore quas
              vitae voluptas sint quibusdam assumenda maxime voluptatem nihil
              corporis! Saepe, sapiente corporis.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
