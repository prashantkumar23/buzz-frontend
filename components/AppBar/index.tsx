import { useRef, useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Link from "next/link";

import { AppName } from "./AppName";
import { Emoji } from "../Emoji";
import { FollowingYou } from "../Notification/NoticationCards/Following";
import { Invite } from "../Notification/NoticationCards/Invite";
import { coreThemeObj } from "../../theme/theme";
import { ScheduleRoomCard } from "../ScheduleRoomCard";
import { StartRoom } from "../StartRoom";

interface JunoAppBarProps {}

export const JunoAppBar: React.FC<JunoAppBarProps> = ({}) => {
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [openScheduleDialog, setOpenScheduleDialog] = useState(false);
  const [openStartRoom, setStartRoom] = useState(false);

  const openMenu = Boolean(anchorMenuEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenuEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorMenuEl(null);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorMenuEl}
      open={openMenu}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          borderRadius: ".75rem",
          borderWidth: ".075rem",
          borderStyle: "solid",
          borderColor: "background.paper",
          backgroundColor: "background.default",
          fontFamily: "sans-serif",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          width: "auto",
          padding: 0,
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Link href="/profile/me" passHref>
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: "background.paper",
            },
          }}
        >
          <Emoji symbol={"😎"} />
          Profile
        </MenuItem>
      </Link>
      <Link href="/house/me" passHref>
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: "background.paper",
            },
          }}
        >
          <Emoji symbol={"🥱"} />
          Logout
        </MenuItem>
      </Link>
      <MenuItem
        sx={{
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
        onClick={() => setStartRoom(true)}
      >
        <Emoji symbol={"🥱"} />
        Start a Room
      </MenuItem>
      <MenuItem
        sx={{
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
        onClick={() => setOpenScheduleDialog(true)}
      >
        <Emoji symbol={"🥱"} />
        Schedule a Room
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        color="default"
        sx={{ marginBottom: "2rem" }}
      >
        <Toolbar
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            backgroundColor: "background.default",
          }}
        >
          <AppName />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new events"
              color="inherit"
              disableRipple
              ref={anchorRef}
              onClick={handleToggle}
            >
              <DateRangeRoundedIcon
                color="primary"
                sx={{
                  [coreThemeObj.breakpoints.only("xs")]: {
                    width: "1.3rem",
                    height: "1.3rem",
                  },
                }}
              />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new messages"
              color="inherit"
              disableRipple
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Badge badgeContent={4} color="error">
                <MailIcon
                  color="primary"
                  sx={{
                    [coreThemeObj.breakpoints.only("xs")]: {
                      width: "1.3rem",
                      height: "1.3rem",
                    },
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              disableRipple
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon
                  color="primary"
                  sx={{
                    [coreThemeObj.breakpoints.only("xs")]: {
                      width: "1.3rem",
                      height: "1.3rem",
                    },
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuClick}
              disableRipple
            >
              <Avatar
                src={
                  "https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Single-Boys-Whatsapp-Dp-Photo-Pictures.jpg"
                }
                sx={{
                  [coreThemeObj.breakpoints.only("xs")]: {
                    width: "2rem",
                    height: "2rem",
                  },
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Menu
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,

          sx: {
            borderRadius: ".75rem",
            borderWidth: ".075rem",
            borderStyle: "solid",
            borderColor: "background.paper",
            backgroundColor: "background.default",
            fontFamily: "sans-serif",
            maxWidth: 300,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <FollowingYou />
        <Invite />
      </Menu>
      <ScheduleRoomCard
        openScheduleRoom={openScheduleDialog}
        handleCloseScheduleRoom={() => setOpenScheduleDialog(false)}
      />
      <StartRoom
        openStartRoom={openStartRoom}
        handleCloseStartRoom={() => setStartRoom(false)}
      />
    </Box>
  );
};
