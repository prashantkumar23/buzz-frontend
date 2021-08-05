import Paper from "@material-ui/core/Paper";
import {
  CenterPaper,
  PhoneCard,
  // EmailCard,
  // UsernameCard,
  // NameCard,
  // OTPCard,
  // UploadCard,
} from "../../components";

export default function Join() {
  return (
    <Paper elevation={0} sx={{ height: "98vh" }}>
      <CenterPaper>
        <PhoneCard />
        {/* <EmailCard />
      <NameCard />
      <UsernameCard />
      <OTPCard />
      <UploadCard /> */}
      </CenterPaper>
    </Paper>
  );
}
