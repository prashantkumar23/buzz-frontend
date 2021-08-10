import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import HandRaise from "@material-ui/icons/PanTool";
import Bye from "@material-ui/icons/ExitToApp";
import SettingsVoiceIcon from "@material-ui/icons/SettingsVoice";
import IconButton from "@material-ui/core/IconButton";

// import { SimpleButton } from "../../components";

export const ListenerFooter = () => {
  return (
    <Grid container sx={{ width: "100%", cursor: "-moz-grabbing" }}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton
            sx={{
              backgroundColor: "background.paper",

              borderRadius: "50%",
            }}
            //   onClick={handleCloseBottomSheet}
          >
            <SettingsVoiceIcon
              color="primary"
              sx={{ width: "2rem", height: "2rem" }}
            />
          </IconButton>
          <div>
            <IconButton
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "50%",
              }}
              //   onClick={handleCloseBottomSheet}
            >
              <HandRaise
                color="primary"
                sx={{ width: "2rem", height: "2rem" }}
              />
            </IconButton>
            <IconButton
              //   onClick={handleCloseBottomSheet}
              sx={{
                backgroundColor: "background.paper",
                marginLeft: "1rem",
                borderRadius: "50%",
              }}
            >
              <Bye color="primary" sx={{ width: "2rem", height: "2rem" }} />
            </IconButton>
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
};
