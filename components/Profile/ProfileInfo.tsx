import React from "react";
import Stack from "@material-ui/core/Stack";
import TelegramIcon from "@material-ui/icons/Telegram";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import {
  Grid,
  Dialog,
  DialogContent,
  IconButton,
  Avatar,
} from "@material-ui/core";

import { SimpleButton } from "../Button/SimpleButton";
import { coreThemeObj } from "../../theme/theme";
import { Transition } from "../Transition";

interface ProfileInfoProps {
  openProfileInfo: boolean;
  handleCloseProfileInfo: () => void;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  openProfileInfo,
  handleCloseProfileInfo,
}) => {
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
        TransitionComponent={Transition}
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
                <CloseIcon color="primary" />
              </IconButton>
            </DialogContent>
          </Grid>

          <Grid item xs={12} sm={6}>
            <DialogContent
              sx={{
                [coreThemeObj.breakpoints.only("xs")]: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 0,
                  paddingBottom: ".3rem",
                  width: "100%",
                  height: "1005",
                },
              }}
            >
              <Avatar
                src={
                  "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
                }
                sx={{
                  width: "6rem",
                  height: "6rem",
                }}
              />
            </DialogContent>
          </Grid>

          <Grid item xs={12} sm={6}>
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
                  gutterBottom
                >
                  @prashantjdrew
                </Typography>
                <Stack
                  direction="row"
                  spacing={0}
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <IconButton>
                    <TelegramIcon color="primary" />
                  </IconButton>
                  <SimpleButton
                    sx={{
                      width: "6rem",
                      height: "2rem",
                    }}
                  >
                    Follow
                  </SimpleButton>
                  <IconButton>
                    <MoreVertIcon color="primary" />
                  </IconButton>
                </Stack>
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
