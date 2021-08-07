import { useEffect, useState, useRef, cloneElement } from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import MicOffIcon from "@material-ui/icons/MicOff";
import Link from "next/link";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import { SimpleButton, SimpleInput, ProfileInfo } from "../../components";
import { coreThemeObj } from "../../theme/theme";

interface CustomBottomSheetProps {
  openBottomSheet: boolean;
  handleCloseBottomSheet: () => void;
}

function generate(element: React.ReactElement, times: number) {
  return Array.from(Array(times)).map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

export const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  openBottomSheet,
  handleCloseBottomSheet,
}) => {
  //   const [openBottomSheet, setBottomSheet] = useState(false);
  const focusRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<BottomSheetRef>(null);
  const [openProfileInfo, setOpenProfileInfo] = useState(false);
  // const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

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
          maxHeight * 0.6,
        ]}
        header={
          <Paper elevation={0}>
            <div style={{ cursor: "-moz-grabbing" }}>
              <Typography variant="h5">
                What&apos;s the best framework?
              </Typography>
            </div>
          </Paper>
        }
        footer={
          <Paper elevation={0} sx={{ margin: 0 }}>
            <Grid container sx={{ width: "100%", cursor: "-moz-grabbing" }}>
              <Grid item xs={12}>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <SimpleButton sx={{ backgroundColor: "background.default" }}>
                    <span>✋</span>
                  </SimpleButton>
                  <SimpleButton
                    onClick={handleCloseBottomSheet}
                    sx={{ backgroundColor: "background.default" }}
                  >
                    Leave quitely <span>✌️</span>
                  </SimpleButton>
                </Stack>
              </Grid>
            </Grid>
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
            {/* <div style={{ display: "none" }}>
            <SimpleButton
              ref={focusRef}
              onClick={() =>
                //@ts-ignore
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight / 2)
              }
            >
              Middle
            </SimpleButton>
          </div> */}
            <Grid container spacing={4}>
              {generate(
                <Grid item xs={2} sm={2} md={1}>
                  <Stack
                    direction="column"
                    sx={{ width: "100%" }}
                    alignItems="center"
                  >
                    <Badge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      badgeContent={
                        <MicOffIcon
                          sx={{
                            width: "1rem",
                            height: "1rem",
                            borderRadius: "50%",
                          }}
                        />
                      }
                    >
                      <Avatar
                        alt="Travis Howard"
                        src={
                          "https://www.imagediamond.com/blog/wp-content/uploads/2019/11/attratve-Boy-DP4.jpg"
                        }
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          cursor: "pointer",
                        }}
                        onClick={() => setOpenProfileInfo(true)}
                      />
                    </Badge>
                    <Typography
                      variant="caption"
                      sx={{
                        textAlign: "center",
                        paddingBottom: 0,
                        width: "100%",
                        display: "inline-block",
                      }}
                    >
                      Speaker
                    </Typography>
                  </Stack>
                </Grid>,
                10
              )}
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
                  <Typography variant="h6">Followed by the speaker</Typography>
                  <SimpleInput
                    placeholder="Search in the room"
                    size="small"
                    sx={{
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
                </Stack>
              </Grid>

              {generate(
                <Grid item xs={2} sm={2} md={1}>
                  <Stack
                    direction="column"
                    sx={{ width: "100%" }}
                    alignItems="center"
                  >
                    <Link href="/" passHref>
                      <div>
                        <Avatar
                          src={
                            "https://i.pinimg.com/originals/99/bc/a8/99bca807f6f4f0ef7007705ad95736fd.jpg"
                          }
                          sizes="large"
                          sx={{ cursor: "pointer" }}
                        />

                        <Typography
                          variant="caption"
                          sx={{
                            width: "100%",
                            display: "inline-block",
                            textAlign: "center",
                          }}
                        >
                          Follow By
                        </Typography>
                      </div>
                    </Link>
                  </Stack>
                </Grid>,
                10
              )}
            </Grid>
          </Paper>

          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              p: "1rem",
              borderRadius: 0,
              // height: "50vh",
            }}
            elevation={0}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ width: "100%", marginBottom: "1rem" }}>
                <Typography variant="h6">Others in the room</Typography>
              </Grid>
              <Grid
                container
                sx={{
                  // backgroundColor: "red",
                  width: "100%",
                  paddingTop: "0.5rem",
                  paddingLeft: "1rem",
                  height: "28vh",
                }}
              >
                {generate(
                  <Grid item xs={2} sm={2} md={1}>
                    <Stack
                      direction="column"
                      sx={{
                        marginBottom: "1rem",
                      }}
                      alignItems="center"
                    >
                      <Link href="/" passHref>
                        <div>
                          <Avatar
                            src={
                              "https://i.pinimg.com/originals/02/18/de/0218de903a2267a10695ec89da51d919.jpg"
                            }
                            sizes="large"
                            sx={{ cursor: "pointer" }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              textAlign: "center",
                              width: "100%",
                              display: "inline-block",
                            }}
                          >
                            Listeners
                          </Typography>
                        </div>
                      </Link>
                    </Stack>
                  </Grid>,

                  10
                )}
              </Grid>
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
