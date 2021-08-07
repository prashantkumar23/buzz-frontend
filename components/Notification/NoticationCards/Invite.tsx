import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";
import { SimpleButton } from "../../Button/SimpleButton";

export const Invite: React.FC = () => {
  return (
    <List sx={{ width: "100%" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/originals/5a/ed/e3/5aede3df250c14937b1dc6591d9c217e.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Link href="/" passHref>
                <Typography
                  sx={{ display: "inline", cursor: "pointer" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Aarushi
                </Typography>
              </Link>
              {" has scheduled a room with you"}

              <Card
                sx={{ width: "inherit", marginTop: "0.5rem" }}
                elevation={0}
                variant="outlined"
              >
                <CardHeader
                  title={
                    <Typography
                      variant="button"
                      gutterBottom
                      display="block"
                      sx={{
                        textTransform: "none",
                      }}
                    >
                      Which framework is the best?
                    </Typography>
                  }
                  subheader={
                    <Typography variant="caption" gutterBottom>
                      September 14, 2021
                    </Typography>
                  }
                  sx={{ paddingBottom: 0, paddingTop: "0.25rem" }}
                />
                <CardActions>
                  <Stack
                    direction="row"
                    sx={{ width: "100%" }}
                    justifyContent="flex-end"
                    spacing={1}
                  >
                    <SimpleButton
                      sx={{
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "0.25rem",
                        fontSize: ".8rem",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        "&:hover": {
                          backgroundColor: "background.paper",
                        },
                      }}
                    >
                      Accept
                    </SimpleButton>
                    <SimpleButton
                      sx={{
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "0.25rem",
                        fontSize: "0.8rem",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        "&:hover": {
                          backgroundColor: "background.paper",
                        },
                      }}
                    >
                      Deny
                    </SimpleButton>
                  </Stack>
                </CardActions>
              </Card>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};
