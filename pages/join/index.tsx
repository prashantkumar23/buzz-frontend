import {
  CenterPaper,
  PhoneCard,
  EmailCard,
  UsernameCard,
  NameCard,
  OTPCard,
  UploadCard,
} from "../../components";

export default function Join() {
  return (
    <CenterPaper>
      <PhoneCard />
      <EmailCard />
      <NameCard />
      <UsernameCard />
      <OTPCard />
      <UploadCard />
    </CenterPaper>
  );
}
