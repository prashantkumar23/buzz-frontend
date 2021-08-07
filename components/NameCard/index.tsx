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
import { makeStyles } from "@material-ui/styles";
import { coreThemeObj } from "../../theme/theme";

const useStyles = makeStyles({
  typographyText: {
    [coreThemeObj.breakpoints.only("xs")]: {
      fontSize: "1.1rem",
    },
  },
});

const schema = yup.object().shape({
  fullname: yup.string().max(20).min(3).required(),
});

interface NameCardProps {
  heading: string;
  buttonText: string;
  setActiveStep: (page: number) => void;
}

export const NameCard: React.FC<NameCardProps> = ({
  heading,
  buttonText,
  setActiveStep,
}) => {
  const classes = useStyles();

  const onSubmit: SubmitHandler<{ fullname: string }> = (data: {
    fullname: string;
  }) => {
    console.log("fullname", data);
    setActiveStep(3);
  };

  const methods = useForm<{ fullname: string }>({
    resolver: yupResolver(schema),
    defaultValues: { fullname: "" },
  });

  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Typography variant="h6" className={classes.typographyText}>
              {heading}
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
                name="fullname"
                control={methods.control}
                render={({ field }) => <SimpleInput {...field} size="small" />}
              />

              <Typography variant="caption">
                People use real name at Juno
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
                endIcon={<ArrowForward />}
                type="submit"
              >
                {buttonText}
              </SimpleButton>
            </Stack>
          </form>
        </FormProvider>
      </Stack>
    </Base>
  );
};
