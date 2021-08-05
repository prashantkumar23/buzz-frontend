import Link from "next/link";
import Stack from "@material-ui/core/Stack";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { SimpleButton } from "../../components";
import { coreThemeObj } from "../../theme/theme";
import { Transition } from "../Transition";

interface FollowingDialogProps {
  openFollowingDialog: boolean;
  handleCloseFollowingDialog: () => void;
}

export const FollowingDialog: React.FC<FollowingDialogProps> = ({
  openFollowingDialog,
  handleCloseFollowingDialog,
}) => {
  return (
    <Dialog
      open={openFollowingDialog}
      onClose={handleCloseFollowingDialog}
      // hideBackdrop
      TransitionComponent={Transition}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "0.75rem",
        },
      }}
    >
      <Paper
        style={{
          backgroundColor: "background.paper",
        }}
      >
        <DialogTitle>2.1k Followers</DialogTitle>
        <DialogContent>
          <Stack sx={{ borderRadius: "0.75rem" }}>
            {Array.from(Array(10)).map((_, index) => (
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
                key={index}
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
                    <Stack alignItems="baseline" flexDirection="row">
                      <SimpleButton
                        sx={{
                          width: "100%",
                          height: "2.2rem",
                          paddingLeft: 0,
                          paddingRight: 0,
                          backgroundColor: "background.default",
                          [coreThemeObj.breakpoints.only("xs")]: {
                            fontSize: "0.8rem",
                          },
                        }}
                      >
                        Follow
                      </SimpleButton>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Stack>
        </DialogContent>
      </Paper>
    </Dialog>
  );
};
