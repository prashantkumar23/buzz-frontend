import { Paper, Grid, Stack, Typography } from "@material-ui/core";
import Link from "next/link";

import { SimpleButton } from "..";
import { coreThemeObj } from "../../theme/theme";
import catImage from "../../public/images/cat.jpg";
import { AvatarImage } from "../AvatarImage";

export const MemberCard: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "auto",
        margin: ".5rem",
        padding: "0.3rem",
        marginLeft: 0,
        marginRight: 0,
        width: "100%",
        borderRadius: "0.75rem",
        backgroundColor: "background.default",
      }}
      variant="outlined"
    >
      <Grid container>
        <Grid item xs={3} sm={2}>
          <AvatarImage link={`/profile/prashant`} image={catImage} />
        </Grid>
        <Grid item xs={5} sm={8}>
          <Stack
            flexDirection="column"
            sx={{ cursor: "pointer" }}
            alignItems="flex-start"
          >
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
            // sx={{ backgroundColor: "red", width: "100%" }}
            justifyContent="flex-end"
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
