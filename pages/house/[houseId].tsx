import { useState } from "react";
import Box from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import Telegram from "@material-ui/icons/Telegram";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";

import {
  FollowingDialog,
  SimpleButton,
  RulesDialog,
  CenterPaper,
} from "../../components";

export default function House() {
  const [openRuleDialog, setOpenRuleDialog] = useState(false);
  const [openFollowingDialog, setOpenFollowingDialog] = useState(false);

  return (
    <CenterPaper>
      <Grid container direction="column" spacing={2} alignItems="center">
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Stack direction="row" justifyContent="center">
            <Avatar
              src={
                "https://www.imagediamond.com/blog/wp-content/uploads/2020/05/be-happy-images-9.jpg"
              }
              sx={{
                width: "8rem",
                height: "8rem",
              }}
            />
          </Stack>
        </Grid>
        {/*  Name  */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Box>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", textTransform: "uppercase" }}
              color="primary"
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
          </Box>
        </Grid>
        {/*  Following followers  */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <SimpleButton
              disableRipple
              sx={{
                width: "8rem",
                height: "2.2rem",
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColor: "background.default",
              }}
              onClick={() => setOpenFollowingDialog(true)}
            >
              2.1k followers
            </SimpleButton>
            <SimpleButton
              startIcon={<ClearAllIcon />}
              disableRipple
              sx={{
                width: "8rem",
                height: "2.2rem",
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColor: "background.default",
              }}
              onClick={() => setOpenRuleDialog(true)}
            >
              Rules
            </SimpleButton>
          </Stack>
        </Grid>
        {/*  Follow button  */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <SimpleButton
              disableRipple
              sx={{
                width: "8rem",
                height: "2.2rem",
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColor: "background.default",
              }}
            >
              Follow
            </SimpleButton>
            <IconButton>
              <MoreVertIcon color="primary" />
            </IconButton>
          </Stack>
        </Grid>
        {/*  About  */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Container maxWidth="sm">
            <Typography variant="h5" color="primary">
              About
            </Typography>
            <Typography color="primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nisi culpa tenetur obcaecati sed temporibus est unde quis nobis,
              rem, earum aliquid vel quibusdam cupiditate quasi laborum,
              accusamus sit dignissimos! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur aut adipisci non quasi culpa ullam,
              doloribus, modi porro, necessitatibus ipsa ratione eaque
              laboriosam! Maxime laboriosam sapiente commodi ex odio officia?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur dolore voluptatibus soluta mollitia repellat veniam
              inventore. Sint pariatur inventore cumque sequi ratione expedita
              tempore itaque animi assumenda quibusdam, quis dolores? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
              voluptate suscipit aut, illum sequi repellat! Consequatur soluta
              id, nobis ex explicabo voluptatibus nesciunt delectus veritatis
              corrupti doloremque eveniet impedit animi.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Container maxWidth="sm">
            <Stack direction="column">
              <div
                style={{
                  overflow: "scroll",
                  height: "4rem",
                  overflowY: "hidden",
                }}
              >
                <Stack direction="row">
                  {Array.from(Array(5)).map((_, index) => (
                    <Chip
                      sx={{
                        cursor: "pointer",
                        margin: "0.5rem",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        "&:hover": {
                          backgroundColor: "background.paper",
                        },
                      }}
                      icon={<Telegram color="primary" />}
                      label={
                        <Typography color="primary" variant="caption">
                          Mindfullness
                        </Typography>
                      }
                      key={index}
                    />
                  ))}
                </Stack>
              </div>
            </Stack>
          </Container>
        </Grid>
        {/* Memeber Links */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Container maxWidth="sm">
            <Stack direction="column">
              <Typography color="primary">500 Members</Typography>
              <div
                style={{
                  overflow: "scroll",
                  overflowX: "hidden",
                }}
              >
                <Stack sx={{ height: "120vh" }}>
                  {Array.from(Array(10)).map(() => (
                    <Paper
                      elevation={0}
                      sx={{
                        height: "auto",
                        margin: "1rem",
                        marginLeft: 0,
                        marginRight: 0,
                        cursor: "pointer",
                        // borderColor: "background.default",
                        backgroundColor: "background.default",

                        padding: "0 0.25rem",
                        borderRadius: "0.75rem",
                      }}
                      variant="outlined"
                    >
                      <Grid container>
                        <Grid item xs={3}>
                          <Link href="/profile/prashant" passHref>
                            <Avatar
                              sx={{
                                cursor: "pointer",
                                width: "3.5rem",
                                height: "3.5rem",
                              }}
                              src={
                                "https://helostatus.com/wp-content/uploads/2021/04/badmash-boy-WhatsApp-DP.jpg"
                              }
                            />
                          </Link>
                        </Grid>
                        <Grid item xs={6}>
                          <Stack direction="column">
                            <Typography color="primary">Prashant</Typography>
                            {/* <TextTruncate
                              line={1}
                              element="span"
                              truncateText="…"
                              text=""
                            /> */}
                            <Typography
                              color="primary"
                              sx={{ overflow: "hidden" }}
                            >
                              Lorem Ipsum is simply
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={3}>
                          <Stack
                            alignItems="center"
                            direction="row"
                            sx={{ height: "100%" }}
                          >
                            <SimpleButton
                              sx={{
                                width: "100%",
                                height: "2.2rem",
                                paddingLeft: 0,
                                paddingRight: 0,
                                backgroundColor: "background.default",
                              }}
                            >
                              Follow
                            </SimpleButton>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))}
                </Stack>
              </div>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Stack justifyContent="center">
            <div style={{ padding: "0.5rem" }}>
              <SimpleButton
                sx={{
                  width: "8rem",
                  height: "2.2rem",
                  paddingLeft: 0,
                  paddingRight: 0,
                  borderColor: "background.default",
                  backgroundColor: "background.default",
                  "&:hover": {
                    backgroundColor: "background.paper",
                  },
                }}
                // disabled
                // color="primary"
              >
                Prev
              </SimpleButton>
              <SimpleButton
                sx={{
                  width: "8rem",
                  height: "2.2rem",
                  paddingLeft: 0,
                  paddingRight: 0,
                  marginLeft: "1rem",
                  borderColor: "background.default",
                  backgroundColor: "background.default",
                  "&:hover": {
                    backgroundColor: "background.paper",
                  },
                }}
              >
                Next
              </SimpleButton>
            </div>
          </Stack>
        </Grid>
      </Grid>
      <FollowingDialog
        openFollowingDialog={openFollowingDialog}
        handleCloseFollowingDialog={() => setOpenFollowingDialog(false)}
      />
      <RulesDialog
        openRuleDialog={openRuleDialog}
        handleCloseRuleDialog={() => setOpenRuleDialog(false)}
      />
    </CenterPaper>
  );
}
