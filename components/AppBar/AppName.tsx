import Link from "next/link";
import Typography from "@material-ui/core/Typography";

export const AppName = () => {
  return (
    <Link href="/" passHref>
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          paddingBottom: 0,
          cursor: "pointer",
          fontWeight: "bold",
        }}
        color="primary"
      >
        Juno
      </Typography>
    </Link>
  );
};
