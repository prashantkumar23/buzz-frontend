import React, { forwardRef } from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { makeStyles } from "@material-ui/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormProvider,
  useForm,
  SubmitHandler,
  Controller,
} from "react-hook-form";

import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
import { CenterText } from "../CenterText";
import { SimpleInput } from "../Inputs/SimpleInput";
import { ArrowForward } from "@material-ui/icons";
import { coreThemeObj } from "../../theme/theme";

interface PhoneCardProps {
  setActiveStep: (page: number) => void;
}

const schema = yup.object().shape({
  phone: yup.string().length(13).required(),
});

const useStyles = makeStyles({
  typographyText: {
    [coreThemeObj.breakpoints.only("xs")]: {
      fontSize: "1.1rem",
    },
  },
});

const CustomInput = forwardRef<any, any>(({ field, ...props }, ref) => {
  return (
    <SimpleInput
      {...field}
      inputRef={ref}
      {...props}
      placeholder="Phone number"
      size="small"
    />
  );
});

export const PhoneCard: React.FC<PhoneCardProps> = ({ setActiveStep }) => {
  const classes = useStyles();

  const onSubmit: SubmitHandler<{ phone: string }> = (data: {
    phone: string;
  }) => {
    console.log("data", data);
    setActiveStep(1);
  };

  const methods = useForm<{ phone: string }>({
    resolver: yupResolver(schema),
    defaultValues: { phone: "" },
  });

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
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack
              flexDirection="column"
              spacing={2}
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <Controller
                name="phone"
                control={methods.control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="IN"
                    inputComponent={CustomInput}
                  />
                )}
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
                type="submit"
              >
                Next
              </SimpleButton>
            </Stack>
          </form>
        </FormProvider>

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
