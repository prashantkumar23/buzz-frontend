import React, { useState } from "react";
import { AlertColor, Divider, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import "react-spring-bottom-sheet/dist/style.css";

import {
  CenterPaper,
  CustomBottomSheet,
  RoomCard,
  SimpleInput,
  CustomSnackBar,
} from "../../components";
import { coreThemeObj } from "../../theme/theme";

export default function Feed() {
  const [openBottomSheet, setBottomSheet] = useState(false);

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
                  placeholder="Search people/rooms"
                  sx={{
                    [coreThemeObj.breakpoints.only("xs")]: {
                      width: "100%",
                    },
                    backgroundColor: "background.default",
                    "& .MuiInputBase-input": {
                      transition: coreThemeObj.transitions.create("width"),
                      [coreThemeObj.breakpoints.up("md")]: {
                        width: "16rem",
                        "&:focus": {
                          width: "22rem",
                        },
                      },
                    },
                  }}
                />
              </div>
            </Stack>

            <button onClick={() => setBottomSheet(true)}>+</button>
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
      <CustomSnackBar notify={notify} setNotify={setNotify} />
    </CenterPaper>
  );
}
