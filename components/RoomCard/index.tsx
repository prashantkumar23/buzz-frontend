import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Stack from "@material-ui/core/Stack";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/core/AvatarGroup";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";

import { coreThemeObj } from "../../theme/theme";
import { Breadcrumbs } from "@material-ui/core";

interface RoomCardProps {
  roomId: number;
}

export const RoomCard: React.FC<RoomCardProps> = ({ roomId }) => {
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 320,
          overflow: "hidden",
          width: "100%",
          borderRadius: ".75rem",
          textTransform: "none",
          fontFamily: "sans-serif",
          cursor: "pointer",
          backgroundColor: "background.default",
          // borderColor: coreThemeObj.palette.primary.main,
          transition: coreThemeObj.transitions.create(
            ["background-color", "transform"],
            {
              duration: coreThemeObj.transitions.duration.standard,
            }
          ),
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        elevation={2}
        onClick={() => console.log("Clicked")}
      >
        <CardHeader
          title={
            <Typography color="primary" sx={{ fontSize: "1.25rem" }}>
              AI is boom or good? and what if is only
            </Typography>
          }
          subheader={
            <Grid container direction="row" alignItems="center" wrap="nowrap">
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                }}
                color="primary"
              >
                Home
                <HomeIcon
                  style={{
                    position: "relative",
                    top: "4px",
                    left: "6px",
                    color: "lightgreen",
                    width: "1rem",
                    height: "1rem",
                  }}
                />
              </Typography>
            </Grid>
          }
          sx={{ paddingBottom: 0 }}
        />
        <CardContent sx={{ paddingBottom: 0 }}>
          <Stack direction="row" justifyContent="flex-start">
            <Stack
              sx={{ width: "auto", marginLeft: 0 }}
              direction="row"
              justifyContent="flex-start"
            >
              <AvatarGroup max={3} color="primary">
                <Avatar
                  alt="Remy Sharp"
                  src={
                    "https://www.lovesove.com/wp-content/uploads/2021/06/Boy-Dp-Alone-Lovesove.jpg"
                  }
                />

                <Avatar
                  alt="Remy Sharp"
                  src={
                    "https://smileworld.in/wp-content/uploads/2020/06/Free-Download-Attitude-DP-Images-for-Whatsapp.jpg"
                  }
                />
                <Avatar
                  alt="Remy Sharp"
                  src={
                    "https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-pic-14.jpg"
                  }
                />
                <Avatar
                  alt="Remy Sharp"
                  src={
                    "https://www.theattitudequotes.com/wp-content/uploads/2021/02/New-WhatsApp-Dp-For-Boys-2021-Stylish-Attitude-Cool-And-Deep-6.jpg"
                  }
                />
              </AvatarGroup>
            </Stack>
            {/* Speaker List */}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "1rem",
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography color="primary">Prashant</Typography>
                <span style={{ width: "0.8rem", height: "0.8rem" }}> 🗯️</span>
              </Box>
              <Box
                component="span"
                sx={{
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography color="primary">David</Typography>
                <span> 🗯️</span>
              </Box>
              {/* Speaker Participant Numbers */}
              <Stack direction="row" sx={{ width: "100%" }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  wrap="nowrap"
                  justifyContent="center"
                >
                  <Breadcrumbs color="secondary">
                    <Grid item>
                      <Typography
                        variant="caption"
                        sx={{ textAlign: "center" }}
                        color="secondary"
                      >
                        255
                        <PersonIcon
                          style={{
                            position: "relative",
                            top: "3px",

                            width: "0.9rem",
                            height: "0.9rem",
                            margin: 0,
                            padding: 0,
                            marginLeft: "0.3rem",
                          }}
                          color="secondary"
                        />
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        variant="caption"
                        sx={{ textAlign: "center" }}
                        color="secondary"
                      >
                        {roomId}
                        <ForumRoundedIcon
                          style={{
                            position: "relative",
                            top: "4px",

                            width: "0.9rem",
                            height: "0.9rem",
                            margin: 0,
                            padding: 0,
                            marginLeft: "0.3rem",
                          }}
                          color="secondary"
                        />
                      </Typography>
                    </Grid>
                  </Breadcrumbs>
                </Grid>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
