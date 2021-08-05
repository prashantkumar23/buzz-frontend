import React from "react";
import Stack from "@material-ui/core/Stack";
import CloseIcon from "@material-ui/icons/Close";
import PublicIcon from "@material-ui/icons/Public";
import Typography from "@material-ui/core/Typography";
import PeopleIcon from "@material-ui/icons/People";
import LockIcon from "@material-ui/icons/Lock";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ToggleButton from "@material-ui/core/ToggleButton";
import ToggleButtonGroup from "@material-ui/core/ToggleButtonGroup";

import { SimpleButton } from "./Button/SimpleButton";
import { SimpleInput } from "./Inputs/SimpleInput";
import { Transition } from "./Transition";

interface StartRoomProps {
  openStartRoom: boolean;
  handleCloseStartRoom: () => void;
}

export const StartRoom: React.FC<StartRoomProps> = ({
  openStartRoom,
  handleCloseStartRoom,
}) => {
  const [alignment, setAlignment] = React.useState<string | null>(null);

  const handleAlignment = (_, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <Container sx={{ paddingBottom: 0, paddingTop: 0 }}>
      <Dialog
        open={openStartRoom}
        onClose={handleCloseStartRoom}
        disableEscapeKeyDown
        hideBackdrop
        TransitionComponent={Transition}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "0.75rem",
          },
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
            maxWidth: 500,
            backgroundColor: "background.paper",
          }}
        >
          <Grid item xs={12}>
            <DialogContent
              sx={{
                textAlign: "right",
                paddingBottom: 0,
                paddingTop: ".5rem",
              }}
            >
              <IconButton onClick={handleCloseStartRoom}>
                <CloseIcon color="primary" />
              </IconButton>
            </DialogContent>
          </Grid>

          <Grid item xs={12}>
            <DialogTitle sx={{ paddingTop: 0, paddingBottom: 0 }}>
              Enter the topic to be discussed
            </DialogTitle>
          </Grid>

          <Grid item xs={12}>
            <DialogContent sx={{ paddingBottom: 0 }}>
              <SimpleInput
                sx={{ width: "100%", backgroundColor: "background.default" }}
                size="small"
                placeholder="Something catchy.."
              />
            </DialogContent>
          </Grid>
          <Grid item xs={12}>
            <DialogContent sx={{ paddingBottom: 0 }}>
              <Typography>Room Type</Typography>
            </DialogContent>
          </Grid>
          <Grid item xs={12}>
            <DialogContent sx={{ paddingBottom: 0 }}>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                fullWidth
                size="small"
                sx={{
                  "& 	.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
                    borderRadius: ".75rem",
                    "&.Mui-selected": {
                      backgroundColor: "background.default",
                    },
                    "&:hover": {
                      backgroundColor: "background.default",
                    },
                  },
                  "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
                    borderRadius: ".75rem",
                    "&.Mui-selected": {
                      backgroundColor: "background.default",
                    },
                    "&:hover": {
                      backgroundColor: "background.default",
                    },
                  },
                }}
              >
                <ToggleButton
                  value="left"
                  sx={{
                    margin: "0.5rem",
                  }}
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                >
                  <Stack direction="column" alignItems="center">
                    <PublicIcon
                      sx={{ width: "3rem", height: "3rem" }}
                      color="primary"
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        textAlign: "center",
                        width: "100%",
                        display: "inline-block",
                        marginTop: "0.5rem",
                        textTransform: "none",
                      }}
                      color="primary"
                    >
                      Open
                    </Typography>
                  </Stack>
                </ToggleButton>
                <ToggleButton
                  value="center"
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  sx={{
                    borderColor: "background.paper",
                    margin: "0.5rem",
                  }}
                >
                  <Stack direction="column" alignItems="center">
                    <PeopleIcon
                      sx={{ width: "3rem", height: "3rem" }}
                      color="primary"
                    />

                    <Typography
                      variant="caption"
                      sx={{
                        textAlign: "center",
                        width: "100%",
                        display: "inline-block",
                        marginTop: "0.5rem",
                        textTransform: "none",
                      }}
                      color="primary"
                    >
                      Social
                    </Typography>
                  </Stack>
                </ToggleButton>
                <ToggleButton
                  value="right"
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  sx={{
                    margin: "0.5rem",
                  }}
                >
                  <Stack direction="column" alignItems="center">
                    <LockIcon
                      sx={{ width: "3rem", height: "3rem" }}
                      color="primary"
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        textAlign: "center",
                        width: "100%",
                        display: "inline-block",
                        textTransform: "none",
                        marginTop: "0.5rem",
                      }}
                      color="primary"
                    >
                      Closed
                    </Typography>
                  </Stack>
                </ToggleButton>
              </ToggleButtonGroup>
            </DialogContent>
          </Grid>
          <Grid item xs={12}>
            <DialogContent>
              <Divider />
              <Stack alignItems="center" sx={{ width: "100%" }}>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "center", padding: "1rem" }}
                >
                  Start a room, open to everyone
                </Typography>
                <SimpleButton
                  sx={{
                    width: "8rem",
                    height: "2.4rem",
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderColor: "background.paper",
                    backgroundColor: "background.default",
                    "&:hover": {
                      backgroundColor: "background.paper",
                    },
                  }}
                >
                  🎉 Let's Go
                </SimpleButton>
              </Stack>
            </DialogContent>
          </Grid>
        </Grid>
      </Dialog>
    </Container>
  );
};
