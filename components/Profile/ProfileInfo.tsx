import React from "react";
import Stack from "@material-ui/core/Stack";
import TelegramIcon from "@material-ui/icons/Telegram";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import { Grid, Dialog, DialogContent, IconButton } from "@material-ui/core";

import { SimpleButton } from "../Button/SimpleButton";
import { coreThemeObj } from "../../theme/theme";

interface ProfileInfoProps {
  openProfileInfo: boolean;
  handleCloseProfileInfo: () => void;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  openProfileInfo,
  handleCloseProfileInfo,
}) => {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Container sx={{ paddingBottom: 0, paddingTop: 0 }}>
      <SimpleButton onClick={handleCloseProfileInfo}>Open</SimpleButton>
      <Dialog
        open={openProfileInfo}
        onClose={handleCloseProfileInfo}
        disableEscapeKeyDown
        hideBackdrop
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "0.75rem",
          },
        }}
      >
        <Grid
          container
          sx={{
            maxWidth: 450,
            [coreThemeObj.breakpoints.only("xs")]: {
              maxWidth: 300,
            },
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
              <IconButton onClick={handleCloseProfileInfo}>
                <CloseIcon />
              </IconButton>
            </DialogContent>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Stack
              direction="row"
              // justifyContent="center"
              // alignItems="center"
              // sx={{ backgroundColor: "gainsboro" }}
            >
              <DialogContent
                sx={{
                  [coreThemeObj.breakpoints.only("xs")]: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 0,
                    paddingBottom: ".3rem",
                  },
                }}
              >
                <Avatar sx={{ width: "5rem", height: "5rem" }}>J</Avatar>
              </DialogContent>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8}>
            <DialogContent
              sx={{
                paddingBottom: 0,

                [coreThemeObj.breakpoints.only("xs")]: {
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingTop: 0,
                  paddingRight: "1rem",
                },
              }}
            >
              <Stack
                // direction={{ xs: "column" }}
                sx={{
                  [coreThemeObj.breakpoints.only("xs")]: {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingTop: 0,
                    width: "100%",
                  },
                }}
              >
                <Typography
                  sx={{
                    textAlign: "right",
                    [coreThemeObj.breakpoints.only("xs")]: {
                      textAlign: "center",
                    },
                  }}
                  variant="h5"
                >
                  Prashant
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: "right",
                    display: "inline-block",
                    width: "100%",
                    [coreThemeObj.breakpoints.only("xs")]: {
                      textAlign: "center",
                    },
                  }}
                >
                  @prashantjdrew
                </Typography>
                <DialogContent
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    paddingRight: 0,
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <IconButton sx={{ backgroundColor: "floralwhite" }}>
                      <TelegramIcon />
                    </IconButton>
                    <SimpleButton
                      sx={{
                        width: "6rem",
                        height: "2.2rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      Follow
                    </SimpleButton>
                    <IconButton sx={{ backgroundColor: "floralwhite" }}>
                      <MoreVertIcon />
                    </IconButton>
                  </Stack>
                </DialogContent>
              </Stack>
            </DialogContent>
          </Grid>
          <Grid item xs={12}>
            <DialogContent sx={{ paddingTop: 0 }}>
              <Typography variant="caption">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto nobis voluptate laboriosam ducimus maiores,
                distinctio voluptatem harum ipsa sint in debitis rem repellendus
                necessitatibus eum vitae aut nam facere consequatur?
              </Typography>
            </DialogContent>
          </Grid>
        </Grid>
      </Dialog>
    </Container>
  );
};
