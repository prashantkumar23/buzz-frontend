import { useEffect, useState, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
// import "react-spring-bottom-sheet/dist/style.css";

import { ProfileInfo } from "../..";
import { ListenerAvatar } from "./VoiceAvatars/ListenerAvatar";
import { SpeakerAvatar } from "./VoiceAvatars/SpeakerAvatar";
// import { ListenerFooter } from "./ListenerFooter";
import { SpeakerFooter } from "./SpeakerFooter";
// import { useLeavePrevention } from "../../hooks/useLeavePrevention";

interface CustomBottomSheetProps {
  openBottomSheet: boolean;
  handleCloseBottomSheet: () => void;
}

export const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  openBottomSheet,
  handleCloseBottomSheet,
}) => {
  const focusRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<BottomSheetRef>(null);
  const [openProfileInfo, setOpenProfileInfo] = useState(false);

  // const [todos, setTodos] = useState<any>([]);

  // useLeavePrevention();

  // if (sheetRef.current?.height > 300) {
  //   console.log("BottomSheetOpened");
  // }

  useEffect(() => {
    if (focusRef.current) {
      console.log("Opened");
      focusRef.current.focus();
    }
  }, []);

  // const r = Router.events.on("beforeHistoryChange", (route: string) => {
  //   if (route.includes("PR")) {
  //     console.log("No Change");
  //     return false;
  //   }

  //   console.log("Change");
  //   return true;
  // });

  return (
    <div>
      <BottomSheet
        open={openBottomSheet}
        onDismiss={handleCloseBottomSheet}
        blocking={false}
        scrollLocking={false}
        ref={sheetRef}
        expandOnContentDrag
        initialFocusRef={focusRef}
        defaultSnap={({ maxHeight }) => maxHeight}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 12,
          maxHeight / 5,
          // maxHeight * 0.6,
        ]}
        header={
          <Paper elevation={0} sx={{ margin: 0 }}>
            <Grid container sx={{ width: "100%", cursor: "-moz-grabbing" }}>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    What's the best framework to learn
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        }
        footer={
          <Paper elevation={0} sx={{ margin: 0 }}>
            <SpeakerFooter />
          </Paper>
        }
        // onSpringStart={async (event) => {
        //   if (event.type === "OPEN") {
        //     await fetch("https://jsonplaceholder.typicode.com/todos")
        //       .then((res) => res.json())
        //       .then((data) => setTodos(data.slice(0, 10)));
        //   }
        // }}
      >
        <Paper elevation={0}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "auto",
              padding: "1rem",
            }}
            elevation={0}
          >
            <Grid container spacing={4}>
              {Array.from(Array(10)).map((_, index) => {
                <Grid item xs={4} sm={2} md={2} key={index}>
                  <SpeakerAvatar />
                </Grid>;
              })}
            </Grid>
          </Paper>

          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "auto",
              p: "1rem",
            }}
            elevation={0}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{
                  width: "100%",
                  paddingTop: 0,
                }}
              >
                <Stack direction="row" alignItems="flex-start">
                  <Typography variant="h6">Followed by the speaker</Typography>
                </Stack>
              </Grid>

              {Array.from(Array(30)).map((_, index) => (
                <Grid item xs={3} sm={2} md={2} key={index}>
                  <ListenerAvatar id={index} />
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "auto",
              p: "1rem",
            }}
            elevation={0}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{
                  width: "100%",
                  paddingTop: 0,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Typography variant="h6">Others in the room</Typography>
                </Stack>
              </Grid>

              {Array.from(Array(150)).map((_, index) => (
                <Grid item xs={3} sm={2} md={2} key={index}>
                  <ListenerAvatar id={index} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Paper>
      </BottomSheet>

      <ProfileInfo
        openProfileInfo={openProfileInfo}
        handleCloseProfileInfo={() => setOpenProfileInfo(false)}
      />
    </div>
  );
};
