import { useState } from "react";
import Image from "next/image";
import Container from "@material-ui/core/Container";
import Stack from "@material-ui/core/Stack";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import Instagram from "@material-ui/icons/Instagram";
import Telegram from "@material-ui/icons/Telegram";
import Twitter from "@material-ui/icons/Twitter";

import {
  SimpleButton,
  FollowingDialog,
  CenterPaper,
  AvatarImage,
} from "../../components";
import catImage from "../../public/images/cat.jpg";

export default function Profile() {
  const [openFollowingDialog, setOpenFollowingDialog] = useState(false);

  return (
    <CenterPaper>
      <Grid container direction="column" spacing={2} alignItems="center">
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Stack direction="row" justifyContent="center">
            <Avatar
              sx={{
                width: "8rem",
                height: "8rem",
              }}
            >
              <Image src={catImage} />
            </Avatar>
          </Stack>
        </Grid>
        {/*  Name and Username  */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }} color="primary">
            Prashant
          </Typography>
          <Typography
            variant="caption"
            sx={{
              textAlign: "center",
              display: "block",
              width: "100%",
            }}
            color="primary"
          >
            @prashantjdrew
          </Typography>
        </Grid>
        {/*  Following followers  */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <SimpleButton
              disableRipple
              sx={{
                width: "8rem",
                height: "2.2rem",
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColor: "background.paper",
                borderColor: "background.paper",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => setOpenFollowingDialog(true)}
            >
              2.1k followers
            </SimpleButton>
            <SimpleButton
              disableRipple
              sx={{
                width: "8rem",
                height: "2.2rem",
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColor: "background.paper",
                borderColor: "background.paper",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => setOpenFollowingDialog(true)}
            >
              3k following
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
            <IconButton
              sx={{
                backgroundColor: "background.paper",
              }}
            >
              <Telegram
                sx={{
                  width: "2rem",
                  height: "2rem",
                }}
                color="primary"
              />
            </IconButton>
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
            <IconButton
              color="primary"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              <MoreVertIcon />
            </IconButton>
          </Stack>
        </Grid>
        {/*  Social Media link  */}
        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            spacing={1}
          >
            <SimpleButton
              disableRipple
              sx={{
                height: "2.2rem",
                backgroundColor: "background.default",
              }}
              startIcon={<Instagram />}
            >
              prashantjdrew
            </SimpleButton>
            <SimpleButton
              disableRipple
              sx={{
                height: "2.2rem",
                backgroundColor: "background.default",
              }}
              startIcon={<Twitter />}
            >
              1998prashant
            </SimpleButton>
          </Stack>
        </Grid>
        {/*  BIO  */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Container maxWidth="sm">
            <Typography color="primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ab minus aperiam maxime, animi voluptatem, impedit ut, ullam eaque
              veniam saepe. Perspiciatis quae possimus deleniti eum tenetur
              accusamus earum sunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi autem dicta rem! Eos, iure laboriosam.
              Nobis eligendi omnis repellat at tenetur voluptatem debitis quos
              voluptas, placeat blanditiis eaque quisquam molestias. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vero ex neque, iste
              autem deleniti dignissimos, atque illum et beatae cumque veritatis
              soluta sunt aliquid nihil veniam facere. At, sunt debitis.
            </Typography>
          </Container>
        </Grid>
        {/* Memeber Links */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Container maxWidth="sm">
            <Stack direction="column">
              <Typography color="primary">Member of</Typography>
              <div
                style={{
                  overflow: "scroll",
                  height: "4rem",
                  overflowY: "hidden",
                }}
              >
                <Stack direction="row" spacing={2}>
                  {Array.from(Array(20)).map((_, index) => (
                    <AvatarImage link={`/`} image={catImage} key={index} />
                  ))}
                </Stack>
              </div>
            </Stack>
          </Container>
        </Grid>
      </Grid>
      <FollowingDialog
        openFollowingDialog={openFollowingDialog}
        handleCloseFollowingDialog={() => setOpenFollowingDialog(false)}
      />
    </CenterPaper>
  );
}
