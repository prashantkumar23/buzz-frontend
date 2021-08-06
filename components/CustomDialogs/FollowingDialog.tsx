import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";

import { Transition } from "../Transition";
import { FollowingCard } from "../FollowingCard";
// import { HouseFollowingCard } from "../HouseCard";
import { coreThemeObj } from "../../theme/theme";
import { Typography } from "@material-ui/core";

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
      TransitionComponent={Transition}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "0.75rem",
          [coreThemeObj.breakpoints.only("xs")]: {
            height: "30rem",
            overflowY: "scroll",
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* Internet Explorer 10+ */,
          },
        },
      }}
    >
      <Paper
        style={{
          backgroundColor: "background.paper",
        }}
      >
        <DialogContent sx={{}}>
          <Typography variant="h6">2.1k Followers</Typography>
          {Array.from(Array(10)).map((_, index) => (
            <FollowingCard key={index} />
          ))}
        </DialogContent>
      </Paper>
    </Dialog>
  );
};
