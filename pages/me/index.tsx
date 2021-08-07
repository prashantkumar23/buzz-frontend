import { useState } from "react";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import Stack from "@material-ui/core/Stack";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";

import {
  SimpleButton,
  FollowingDialog,
  CenterPaper,
  SimpleInput,
} from "../../components";

export default function MyProfile() {
  const [openFollowingDialog, setOpenFollowingDialog] = useState(false);
  const [editing, setEditing] = useState(false);

  return (
    <CenterPaper>
      <Grid container direction="column" spacing={2} alignItems="center">
        <Grid item xs={12} sx={{}}>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ position: "relative" }}
          >
            <Avatar
              src={
                "https://www.imagediamond.com/blog/wp-content/uploads/2020/05/be-happy-images-9.jpg"
              }
              sx={{
                width: "8rem",
                height: "8rem",
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                right: -70,
              }}
              onClick={() => setEditing(true)}
            >
              {editing ? (
                <CheckIcon
                  color="primary"
                  sx={{ width: "1.3rem", height: "1.3rem" }}
                />
              ) : (
                <EditIcon
                  color="primary"
                  sx={{ width: "1.3rem", height: "1.3rem" }}
                />
              )}
            </IconButton>
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
            {editing ? (
              <SimpleInput
                // sx={{
                //   borderColor: "gold",
                //   backgroundColor: "gold",
                // }}
                InputProps={{
                  sx: {
                    textAlign: "right",
                  },
                }}
                multiline
                minRows={10}
                type="text"
                spellCheck="false"
                fullWidth
                defaultValue={`
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ab minus aperiam maxime, animi voluptatem, impedit ut, ullam
              eaque veniam saepe. Perspiciatis quae possimus deleniti eum
              tenetur accusamus earum sunt! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Excepturi autem dicta rem! Eos,
              iure laboriosam. Nobis eligendi omnis repellat at tenetur
              voluptatem debitis quos voluptas, placeat blanditiis eaque
              quisquam molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero ex neque, iste autem deleniti
              dignissimos, atque illum et beatae cumque veritatis soluta sunt
              aliquid nihil veniam facere. At, sunt debitis.`}
              />
            ) : (
              <Typography color="primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                ab minus aperiam maxime, animi voluptatem, impedit ut, ullam
                eaque veniam saepe. Perspiciatis quae possimus deleniti eum
                tenetur accusamus earum sunt! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi autem dicta rem! Eos,
                iure laboriosam. Nobis eligendi omnis repellat at tenetur
                voluptatem debitis quos voluptas, placeat blanditiis eaque
                quisquam molestias. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vero ex neque, iste autem deleniti
                dignissimos, atque illum et beatae cumque veritatis soluta sunt
                aliquid nihil veniam facere. At, sunt debitis.
              </Typography>
            )}
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
                <Stack direction="row">
                  {Array.from(Array(20)).map((_, index) => (
                    <Link href={`/house/${index}`} passHref key={index}>
                      <Avatar
                        sx={{
                          cursor: "pointer",
                          margin: "0.5rem",
                        }}
                        src={
                          "https://wiki.melvoridle.com/images/2/2c/Finn%2C_the_Cat_%28pet%29.png"
                        }
                      />
                    </Link>
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
