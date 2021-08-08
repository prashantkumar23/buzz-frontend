import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { InputAdornment } from "@material-ui/core";
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
import { ArrowForward, Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { coreThemeObj } from "../../theme/theme";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  typographyText: {
    [coreThemeObj.breakpoints.only("xs")]: {
      fontSize: "1.1rem",
    },
  },
});

const schema = yup.object().shape({
  password: yup.string().max(20).min(3).required(),
});

interface PasswordCardProps {
  setActiveStep: (page: number) => void;
}

export const PasswordCard: React.FC<PasswordCardProps> = ({
  setActiveStep,
}) => {
  const classes = useStyles();
  const [toggle, setToggle] = useState({
    passwordVisibility: "password",
  });

  const onSubmit: SubmitHandler<{ password: string }> = (data: {
    password: string;
  }) => {
    console.log("password", data);
    setActiveStep(3);
  };

  const methods = useForm<{ password: string }>({
    resolver: yupResolver(schema),
    defaultValues: { password: "" },
  });

  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6" className={classes.typographyText}>
              Type a strong password
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
                name="password"
                control={methods.control}
                render={({ field }) => (
                  <SimpleInput
                    {...field}
                    size="small"
                    type={toggle.passwordVisibility ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => {
                              if (toggle.passwordVisibility === "password") {
                                setToggle({ passwordVisibility: "text" });
                              } else {
                                setToggle({ passwordVisibility: "password" });
                              }
                            }}
                          >
                            {toggle.passwordVisibility === "password" && (
                              <Visibility color="primary" />
                            )}
                            {toggle.passwordVisibility === "text" && (
                              <VisibilityOff color="primary" />
                            )}
                            {console.log(toggle.passwordVisibility)}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
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
      </Stack>
    </Base>
  );
};
