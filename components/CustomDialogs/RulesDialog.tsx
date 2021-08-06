import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HomeIcon from "@material-ui/icons/Home";

import { coreThemeObj } from "../../theme/theme";
import { Transition } from "../Transition";

interface RulesDialog {
  openRuleDialog: boolean;
  handleCloseRuleDialog: () => void;
}

export const RulesDialog: React.FC<RulesDialog> = ({
  openRuleDialog,
  handleCloseRuleDialog,
}) => {
  return (
    <Dialog
      open={openRuleDialog}
      onClose={handleCloseRuleDialog}
      TransitionComponent={Transition}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "0.75rem",
        },
      }}
    >
      <DialogContent
        sx={{
          width: "30rem",
          backgroundColor: "background.paper",
          [coreThemeObj.breakpoints.only("xs")]: {
            width: "20rem",
            height: "25rem",
          },
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase" }}
              gutterBottom
            >
              Photography
              <HomeIcon
                style={{
                  position: "relative",
                  top: "4px",
                  left: "6px",
                  color: "lightgreen",
                }}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Club Rules</Typography>
          </Grid>
          <Grid item xs={12}>
            {[0, 1, 2, 3, 4].map((_, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton disableGutters disableRipple disableTouchRipple>
                  <ListItemIcon>
                    <ArrowForwardIosIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               "
                    primaryTypographyProps={{
                      noWrap: false,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
