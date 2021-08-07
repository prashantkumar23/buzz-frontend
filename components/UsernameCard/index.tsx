import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CheckIcon from "@material-ui/icons/Check";
import { InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormProvider,
  useForm,
  SubmitHandler,
  Controller,
} from "react-hook-form";

import { coreThemeObj } from "../../theme/theme";
import { Base } from "../Base";
import { SimpleButton } from "../Button/SimpleButton";
import { SimpleInput } from "../Inputs/SimpleInput";
import { CenterText } from "../CenterText";

interface UsernameCardProps {
  setActiveStep: (page: number) => void;
}

const useStyles = makeStyles({
  typographyText: {
    [coreThemeObj.breakpoints.only("xs")]: {
      fontSize: "1.1rem",
    },
  },
});

const schema = yup.object().shape({
  username: yup.string().max(20).min(3).required(),
});

export const UsernameCard: React.FC<UsernameCardProps> = ({
  setActiveStep,
}) => {
  const classes = useStyles();

  const onSubmit: SubmitHandler<{ username: string }> = (data: {
    username: string;
  }) => {
    console.log("username", data);
    setActiveStep(0);
  };

  const methods = useForm<{ username: string }>({
    resolver: yupResolver(schema),
    defaultValues: { username: "" },
  });

  console.log(methods.watch("username"));

  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6" className={classes.typographyText}>
              🤓 Choose your username
            </Typography>
          </CenterText>
        </Stack>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack
              flexDirection="column"
              spacing={2}
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <Controller
                name="username"
                control={methods.control}
                render={({ field }) => (
                  <SimpleInput
                    {...field}
                    placeholder="Pick your username"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />

              <Typography variant="caption">
                Username can be used for the login
              </Typography>
              <SimpleButton
                disableRipple
                sx={{
                  backgroundColor: "background.default",
                  height: "2rem",
                  "&:hover": {
                    backgroundColor: "background.paper",
                  },
                }}
                endIcon={<CheckIcon />}
                type="submit"
              >
                Create my account
              </SimpleButton>
            </Stack>
          </form>
        </FormProvider>
      </Stack>
    </Base>
  );
};
