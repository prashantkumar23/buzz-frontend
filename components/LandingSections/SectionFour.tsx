import { Grid, Avatar } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";

import { coreThemeObj } from "../../theme/theme";

const useStyles = makeStyles({
  linkContainer: {
    textAlign: "center",
    [coreThemeObj.breakpoints.between("xs", "md")]: {
      textAlign: "left",
    },
  },
  linkText: {
    padding: "0.5rem 0 0 0",
    cursor: "pointer",
    width: "100%",
  },
  iconLink: {
    cursor: "pointer",
    marginRight: "1rem",
  },
});

export const SectionFour = () => {
  const classes = useStyles();

  return (
    <Stack
      direction="column"
      sx={{
        // backgroundColor: "gainsboro",
        width: "100%",
        paddingLeft: 0,
        height: "auto",
        paddingBottom: "2rem",
        [coreThemeObj.breakpoints.between("xs", "md")]: {
          width: "100%",
          textAlign: "left",
        },
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={2} sx={{ marginTop: "2rem" }}>
          <Stack
            flexDirection="column"
            spacing={2}
            sx={{
              [coreThemeObj.breakpoints.between("xs", "sm")]: {
                alignItems: "flex-start",
              },
            }}
          >
            <Avatar
              sx={{ width: "4rem", height: "4rem", borderRadius: "1rem" }}
              variant="square"
            >
              J
            </Avatar>
            <Typography variant="h4">BUZZ</Typography>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          sx={{
            marginTop: "2rem",
            // [coreThemeObj.breakpoints.up("md")]: {
            //   textAlign: "left",
            // },
          }}
        >
          <Stack
            flexDirection="column"
            className={classes.linkContainer}
            // sx={{
            //   [coreThemeObj.breakpoints.between("xs", "sm")]: {
            //     alignItems: "flex-start",
            //   },
            // }}
          >
            <Typography
              variant="h5"
              color="primary"
              className={classes.linkText}
              sx={{ fontWeight: "bold" }}
            >
              More Buzz
            </Typography>
            <Link href="#" passHref>
              <Typography className={classes.linkText}>Blog</Typography>
            </Link>
            <Link href="#" passHref>
              <Typography className={classes.linkText}>
                Knowledge Center
              </Typography>
            </Link>
            <Link href="#" passHref>
              <Typography className={classes.linkText}>
                New User Guide
              </Typography>
            </Link>
            <Link href="#" passHref>
              <Typography className={classes.linkText}>Guidelines</Typography>
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={3} sx={{ marginTop: "2rem" }}>
          <Stack direction="column" className={classes.linkContainer}>
            <Typography
              variant="h5"
              className={classes.linkText}
              sx={{ fontWeight: "bold" }}
            >
              Get in Touch
            </Typography>
            <Link href="#" passHref>
              <Typography className={classes.linkText}>Contact</Typography>
            </Link>
            <Link href="#" passHref>
              <Typography className={classes.linkText}>Job Center</Typography>
            </Link>
            <Link href="#" passHref>
              <Typography className={classes.linkText}>Press</Typography>
            </Link>
            <Link href="#" passHref>
              <Typography className={classes.linkText}>
                Ask a town hall question
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider
            sx={{
              "&.MuiDivider-root": {
                background: "background.paper",
                // height: "0.2rem",
              },
              [coreThemeObj.breakpoints.only("xs")]: {
                display: "none",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Stack
            justifyContent="space-between"
            direction={{ xs: "column", md: "row" }}
            // sx={{ p: "2rem 3rem 2rem 0" }}
          >
            <div style={{ padding: "2rem 0 2rem 0" }}>
              <Link href="/profile/me" passHref>
                <TwitterIcon color="primary" className={classes.iconLink} />
              </Link>
              <Link href="/profile/me" passHref>
                <LinkedInIcon color="primary" className={classes.iconLink} />
              </Link>
              <Link href="/profile/me" passHref>
                <InstagramIcon color="primary" className={classes.iconLink} />
              </Link>
            </div>
            <div>
              <Stack
                direction="row"
                spacing={3}
                alignItems="center"
                sx={{ height: "100%" }}
              >
                <Link href="#" passHref>
                  <Typography sx={{ width: "auto" }}>Privacy</Typography>
                </Link>
                <Link href="#" passHref>
                  <Typography sx={{ width: "auto" }}>Terms</Typography>
                </Link>
              </Stack>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
