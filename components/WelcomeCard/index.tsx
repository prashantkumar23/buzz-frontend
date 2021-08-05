import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Stack from "@material-ui/core/Stack";

import { Base } from "../Base";
import { LinkButton } from "../Button/LinkButton";
import { Emoji } from "../Emoji";
import { SimpleButton } from "../Button/SimpleButton";
import { CenterText } from "../CenterText";

export const WelcomeCard: React.FC = () => {
  return (
    <Base>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <CenterText>
            <Emoji label="hello" symbol="👋" />
            <Typography variant="h5">Welcome to Juno!</Typography>
          </CenterText>
        </Stack>
        <Typography variant="body1" sx={{ fontFamily: "TextMeOne" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          asperiores, quidem similique fuga laboriosam consequuntur, quam
          corporis corrupti repudiandae eligendi quis commodi minima sint.
          Sapiente nobis voluptatem accusamus ad sit?
        </Typography>
        <SimpleButton disableRipple>Get your username</SimpleButton>
        <LinkButton>Forgot your password?</LinkButton>
      </Stack>
    </Base>
  );
};
