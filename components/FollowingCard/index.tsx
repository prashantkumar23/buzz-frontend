import { Paper, Grid, Avatar, Stack, Typography } from "@material-ui/core";
import Link from "next/link";
import { SimpleButton } from "..";
import { coreThemeObj } from "../../theme/theme";

export const FollowingCard: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "auto",
        margin: ".5rem",
        padding: "0.3rem",
        marginLeft: 0,
        marginRight: 0,
        width: "25rem",
        borderRadius: "0.75rem",
        backgroundColor: "background.default",
        [coreThemeObj.breakpoints?.only("xs")]: {
          width: "15rem",
        },
      }}
      variant="outlined"
    >
      <Grid container>
        <Grid item xs={3} sm={2}>
          <Link href="/profile/prashant" passHref>
            <Avatar
              sx={{
                cursor: "pointer",
                width: "3rem",
                height: "3rem",
              }}
              src={
                "https://as2.ftcdn.net/jpg/03/33/41/39/500_F_333413930_c2GjjOCNl0TtbAQDX6VIlKfcBdHEbya3.jpg"
              }
            />
          </Link>
        </Grid>
        <Grid item xs={5} sm={8}>
          <Stack direction="column" sx={{ cursor: "pointer" }}>
            <Link passHref href="/profile/prashant">
              <>
                <Typography>Prashant</Typography>
                <Typography color="primary" variant="caption">
                  Lorem Ipsum
                </Typography>
              </>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Stack
            alignItems="baseline"
            flexDirection="row"
            justifyContent="center"
          >
            <SimpleButton
              sx={{
                width: "100%",
                height: "2.2rem",
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColor: "background.default",
                [coreThemeObj.breakpoints.only("xs")]: {
                  fontSize: "0.8rem",
                  width: "60%",
                  height: "2rem",
                },
              }}
            >
              Follow
            </SimpleButton>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
