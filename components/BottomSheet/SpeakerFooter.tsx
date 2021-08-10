import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import HandRaise from "@material-ui/icons/PanTool";
import Bye from "@material-ui/icons/ExitToApp";
import AddPeople from "@material-ui/icons/Add";
import Speaker from "@material-ui/icons/KeyboardVoice";
import IconButton from "@material-ui/core/IconButton";
import { coreThemeObj } from "../../theme/theme";
import { SimpleButton } from "../Button/SimpleButton";
import { Typography } from "@material-ui/core";

export const SpeakerFooter = () => {
  return (
    <Grid container sx={{ width: "100%", cursor: "-moz-grabbing" }}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <IconButton
              //   onClick={handleCloseBottomSheet}
              sx={{
                backgroundColor: "background.paper",

                borderRadius: "50%",
              }}
            >
              <Bye
                color="primary"
                sx={{
                  width: "2rem",
                  height: "2rem",
                  [coreThemeObj.breakpoints.between("xs", "md")]: {
                    width: "1.5rem",
                    height: "1.5rem",
                  },
                }}
              />
            </IconButton>
            <SimpleButton
              sx={{
                backgroundColor: "background.paper",
                borderColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              disableElevation
              disableFocusRipple
              disableTouchRipple
              disableRipple
            >
              <Typography sx={{ color: "red" }}>The end</Typography>
            </SimpleButton>
          </div>
          <div>
            <IconButton
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "50%",
                paddingLeft: "0.5rem",
              }}
              //   onClick={handleCloseBottomSheet}
            >
              <AddPeople
                color="primary"
                sx={{
                  width: "2rem",
                  height: "2rem",
                  [coreThemeObj.breakpoints.between("xs", "md")]: {
                    width: "1.5rem",
                    height: "1.5rem",
                  },
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "50%",
                paddingLeft: "1rem",
              }}
              //   onClick={handleCloseBottomSheet}
            >
              <HandRaise
                color="primary"
                sx={{
                  width: "2rem",
                  height: "2rem",
                  [coreThemeObj.breakpoints.between("xs", "md")]: {
                    width: "1rem",
                    height: "1rem",
                  },
                }}
              />
            </IconButton>

            <IconButton
              sx={{
                backgroundColor: "background.paper",
                paddingLeft: "1rem",
                borderRadius: "50%",
              }}
              //   onClick={handleCloseBottomSheet}
            >
              <Speaker
                color="primary"
                sx={{
                  width: "2rem",
                  height: "2rem",
                  [coreThemeObj.breakpoints.between("xs", "md")]: {
                    width: "1.5rem",
                    height: "1.5rem",
                  },
                }}
              />
            </IconButton>
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
};
