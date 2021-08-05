import Link from "next/link";
import Typography from "@material-ui/core/Typography";

export const AppName = () => {
  return (
    <Link href="/">
      <Typography variant="h3" sx={{ cursor: "pointer" }} color="primary">
        Juno
      </Typography>
    </Link>
  );
};
