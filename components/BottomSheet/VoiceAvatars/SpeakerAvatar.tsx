import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
import MicOffIcon from "@material-ui/icons/MicOff";

export const SpeakerAvatar = () => {
  return (
    <Stack direction="column" sx={{ width: "100%" }} alignItems="center">
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
              backgroundColor: "Background.paper",
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
            width: "4rem",
            height: "4rem",
            cursor: "pointer",
          }}
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
  );
};
