import React, { useState } from "react";
import { AlertColor, Divider, Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import "react-spring-bottom-sheet/dist/style.css";

import {
  CenterPaper,
  CustomBottomSheet,
  RoomCard,
  StartRoom,
  SimpleInput,
  SimpleButton,
  CustomSnackBar,
} from "../../components";
import { coreThemeObj } from "../../theme/theme";

export default function Feed() {
  const [openBottomSheet, setBottomSheet] = useState(false);
  const [openStartRoom, setStartRoom] = useState(false);
  const [notify, setNotify] = useState<{
    isOpen: boolean;
    message: string;
    type: AlertColor | undefined;
  }>({
    isOpen: false,
    message: "",
    type: undefined,
  });

  return (
    <CenterPaper>
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ paddingTop: "1rem" }}
      >
        <Grid item xs={12}>
          <Stack
            direction="row"
            sx={{ position: "relative" }}
            justifyContent="space-between"
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignContent="flex-start"
              sx={{
                [coreThemeObj.breakpoints.only("xs")]: {
                  width: "100%",
                },
              }}
            >
              <Typography variant="h6" color="primary">
                All voice rooms
                <Divider color="primary" />
              </Typography>
              <div>
                <SimpleInput
                  size="small"
                  placeholder="Search people and rooms"
                  InputProps={{
                    classes: {},
                  }}
                  sx={{
                    [coreThemeObj.breakpoints.only("xs")]: {
                      width: "100%",
                    },
                    backgroundColor: "background.default",
                    "& .MuiInputBase-input": {
                      transition: coreThemeObj.transitions.create("width"),
                      [coreThemeObj.breakpoints.up("md")]: {
                        width: "12rem",
                        "&:focus": {
                          width: "22rem",
                        },
                      },
                    },
                  }}
                />
              </div>
            </Stack>

            <SimpleButton
              sx={{
                [coreThemeObj.breakpoints.only("xs")]: {
                  display: "none",
                },
                backgroundColor: "background.default",
              }}
              onClick={() => setStartRoom(true)}
              // onClick={() => setBottomSheet(true)}
              disableFocusRipple
              disableRipple
              disableTouchRipple
              disableElevation
            >
              😎 Start a room
            </SimpleButton>

            <Fab
              variant="extended"
              disableRipple
              disableTouchRipple
              disableFocusRipple
              sx={{
                bottom: 16,
                position: "fixed",
                left: 0,
                right: 0,
                margin: "0 auto",
                zIndex: 100,
                backgroundColor: "background.default",
                // "&:hover": {
                //   backgroundColor: "background.paper",
                // },
                fontSize: "1rem",
                padding: "0.75rem 1.75rem",
                borderRadius: ".75rem",
                borderWidth: ".075rem",
                borderStyle: "solid",
                borderColor: "background.default",
                textTransform: "none",
                // boxShadow: "none",
                fontFamily: "sans-serif",
                [coreThemeObj.breakpoints.between("sm", "xl")]: {
                  display: "none",
                },
              }}
              // onClick={() => setBottomSheet(true)}
              onClick={() => setStartRoom(true)}
            >
              <Typography color="primary">Start a room 😎</Typography>
            </Fab>
          </Stack>
        </Grid>

        {Array.from(Array(25)).map((_, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            sx={{
              // position: "relative",
              display: "block",
              // justifyContent: "flex-start",
              [coreThemeObj.breakpoints.only("xs")]: {
                display: "flex",
                justifyContent: "center",
              },
            }}
            key={index}
          >
            <RoomCard roomId={index} />
          </Grid>
        ))}
      </Grid>
      <CustomBottomSheet
        openBottomSheet={openBottomSheet}
        handleCloseBottomSheet={() => setBottomSheet(false)}
      />
      <StartRoom
        openStartRoom={openStartRoom}
        handleCloseStartRoom={() => setStartRoom(false)}
      />
      <CustomSnackBar notify={notify} setNotify={setNotify} />
    </CenterPaper>
  );
}
