import Stack from "@material-ui/core/Stack";
import { makeStyles } from "@material-ui/styles";
import {
  CenterPaper,
  EmailCard,
  PhoneCard,
  SimpleButton,
} from "../../components";
import { PhoneIphone } from "@material-ui/icons";
import Mail from "@material-ui/icons/Mail";
import { useState } from "react";

type LoginType = "byEmail" | "byPhone";

const useStyles = makeStyles({
  iconButton: {
    width: "1.5rem",
    padding: "0.25rem 0.25rem",
    height: "2rem",
  },
});

export default function Join() {
  const [loginType, setLoginType] = useState<LoginType>("byEmail");
  const classes = useStyles();

  return (
    <CenterPaper>
      <Stack
        sx={{ minHeight: "90vh", flexGrow: 1, paddingTop: "15vh" }}
        alignItems="center"
      >
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
          {loginType === "byEmail" ? <EmailCard /> : <PhoneCard />}
        </div>
      </Stack>
    </CenterPaper>
  );
}
