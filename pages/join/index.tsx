import Stack from "@material-ui/core/Stack";
import { makeStyles } from "@material-ui/styles";
import {
  CenterPaper,
  EmailCard,
  NameCard,
  OTPCard,
  PhoneCard,
  SimpleButton,
  UploadCard,
  UsernameCard,
} from "../../components";
import { PhoneIphone } from "@material-ui/icons";
import Mail from "@material-ui/icons/Mail";
import { useState } from "react";
import { UserFormProvider } from "../../context/UserForm";

type LoginType = "byEmail" | "byPhone";

const useStyles = makeStyles({
  iconButton: {
    width: "1.5rem",
    padding: "0.25rem 0.25rem",
    height: "2rem",
  },
});

const Join: React.FC = () => {
  const [loginType, setLoginType] = useState<LoginType>("byEmail");
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <UserFormProvider>
      <CenterPaper>
        <Stack
          sx={{ minHeight: "90vh", flexGrow: 1, paddingTop: "15vh" }}
          alignItems="center"
        >
          {/* Step One */}
          {activeStep === 0 && (
            <div
              style={{
                display: "inline-block",
              }}
            >
              <Stack alignItems="flex-end" sx={{ width: "100%" }}>
                <div>
                  <SimpleButton
                    value="byEmail"
                    onClick={() => {
                      setLoginType("byEmail");
                    }}
                    className={classes.iconButton}
                    sx={{
                      borderColor: "background.default",
                      backgroundColor: "background.default",
                    }}
                  >
                    <Mail color="primary" />
                  </SimpleButton>

                  <SimpleButton
                    value="byPhone"
                    onClick={() => {
                      setLoginType("byPhone");
                    }}
                    className={classes.iconButton}
                    sx={{
                      borderColor: "background.default",
                      backgroundColor: "background.default",
                    }}
                  >
                    <PhoneIphone color="primary" />
                  </SimpleButton>
                </div>
              </Stack>
              {loginType === "byEmail" ? (
                <EmailCard setActiveStep={setActiveStep} />
              ) : (
                <PhoneCard setActiveStep={setActiveStep} />
              )}
            </div>
          )}
          {/* Step Two */}
          {activeStep === 1 && <OTPCard setActiveStep={setActiveStep} />}
          {/* Step Three */}
          {activeStep === 2 && (
            <NameCard
              heading="🙃 What's your full name"
              buttonText="Next"
              setActiveStep={setActiveStep}
            />
          )}
          {/* Step Four */}
          {activeStep === 3 && <UploadCard setActiveStep={setActiveStep} />}
          {/* Step Five */}
          {activeStep === 4 && <UsernameCard setActiveStep={setActiveStep} />}
        </Stack>
      </CenterPaper>
    </UserFormProvider>
  );
};

export default Join;
