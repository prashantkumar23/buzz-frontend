import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import React from "react";

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
