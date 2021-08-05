import Stack from "@material-ui/core/Stack";
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
    <CenterPaper>
      <Stack
        sx={{ height: "90vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <PhoneCard />
      </Stack>
    </CenterPaper>
  );
}
