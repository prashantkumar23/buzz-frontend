import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";

export const FollowingYou: React.FC = () => {
  return (
    <List sx={{ width: "100%", cursor: "pointer" }}>
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
              {" started following you"}
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="caption"
                color="text.primary"
              >
                2 days ago
              </Typography>
            </React.Fragment>
          }
        />
        {/* <Typography
          sx={{ display: "inline" }}
          component="span"
          variant="caption"
          color="text.primary"
        >
          2 days ago
        </Typography> */}
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};
