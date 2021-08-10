import { Stack, Avatar, Typography } from "@material-ui/core";
import { names } from "../../helpers/name";

export const ListenerAvatar: React.FC<{ id: number }> = ({ id }) => {
  return (
    <Stack
      direction="column"
      sx={{
        marginBottom: "0.8rem",
      }}
      alignItems="center"
    >
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
        {names[id]}
      </Typography>
    </Stack>
  );
};
