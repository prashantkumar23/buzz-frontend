import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
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
import { SimpleInput } from "../Inputs/SimpleInput";
import { CenterText } from "../CenterText";
import { ArrowForward } from "@material-ui/icons";

interface EmailCardProps {
  setActiveStep: (page: number) => void;
}

const schema = yup.object().shape({
  email: yup.string().email().max(50).required(),
});

export const EmailCard: React.FC<EmailCardProps> = ({ setActiveStep }) => {
  const methods = useForm<{ email: string }>({
    resolver: yupResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<{ email: string }> = (data: {
    email: string;
  }) => {
    console.log(data);
    setActiveStep(1);
  };

  console.log(methods.watch("email"));

  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6">✉️ Enter your email</Typography>
          </CenterText>
        </Stack>
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Stack
                flexDirection="column"
                spacing={2}
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <Controller
                  name="email"
                  control={methods.control}
                  render={({ field }) => (
                    <SimpleInput {...field} size="small" />
                  )}
                />

                <SimpleButton
                  disableRipple
                  sx={{
                    backgroundColor: "background.default",
                    height: "2rem",
                    width: "8rem",
                    "&:hover": {
                      backgroundColor: "background.paper",
                    },
                  }}
                  type="submit"
                  endIcon={<ArrowForward />}
                >
                  Next
                </SimpleButton>
              </Stack>
            </form>
          </FormProvider>
        </>
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
