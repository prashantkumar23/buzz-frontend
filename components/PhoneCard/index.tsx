import React, { useState, forwardRef } from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { makeStyles } from "@material-ui/styles";

import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
import { CenterText } from "../CenterText";
import { SimpleInput } from "../Inputs/SimpleInput";
import { ArrowForward } from "@material-ui/icons";
import { coreThemeObj } from "../../theme/theme";

const useStyles = makeStyles({
  typographyText: {
    [coreThemeObj.breakpoints.only("xs")]: {
      fontSize: "1.1rem",
    },
  },
});

const CustomInput = forwardRef<any, any>(
  ({ onChange, value, ...props }, ref) => {
    return (
      <SimpleInput
        inputRef={ref}
        {...props}
        onChange={onChange}
        placeholder="Phone number"
        value={value}
        size="small"
      />
    );
  }
);

export const PhoneCard: React.FC = ({}) => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6" className={classes.typographyText}>
              ☎️ Enter your phone number
            </Typography>
          </CenterText>
        </Stack>
        {/* <PhoneInput /> */}
        <PhoneInput
          value={value}
          onChange={setValue}
          defaultCountry="IN"
          inputComponent={CustomInput}
        />
        <SimpleButton
          disableRipple
          sx={{
            backgroundColor: "background.default",
            height: "2rem",
            "&:hover": {
              backgroundColor: "background.paper",
            },
          }}
          endIcon={<ArrowForward />}
        >
          Next
        </SimpleButton>
        <CenterText>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            cupiditate. Et aspernatur in consequatur natus corrupti quibusdam,
          </Typography>
        </CenterText>
      </Stack>
    </Base>
  );
};
