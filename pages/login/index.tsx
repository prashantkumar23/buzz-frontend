import * as React from "react";
import { CenterPaper, LoginCard } from "../../components";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles({
//   "@mixin rings($duration, $delay)": {
//     opacity: 0,
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     top: "-8px",
//     left: "-8px",
//     right: "0",
//     bottom: "0",
//     content: "''",
//     height: "100%",
//     width: "100%",
//     border: "8px solid rgba(0,0,0,0.2)",
//     borderRadius: "100%",
//     animationName: "ripple",
//     animationDuration: "$duration",
//     animationDelay: "$delay",
//     animationIterationCount: "infinite",
//     animationTimingFunction: "cubic-bezier(.65,0,.34,1)",
//     zIndex: -1,
//   },
//   "@keyframes ripple": {
//     from: { opacity: 1, transform: "scale3d(0.75,0.75,1)" },
//     to: { opacity: 0, transform: "scale3d(1.5,1.5,1)" },
//   },
//   div: {
//     position: "relative",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "150px",
//     width: "150px",
//     borderRadius: "100%",
//     background: "#FFFFFF",
//     boxShadow: "0 0 20px 0 rgba(0,0,0,0.25)",
//     span: { position: "relative", fontSize: "72px", top: "5px", left: "-5px" },
//     "&::after": { "@include rings(3s, 0s)": true },
//     "&::before": { "@include rings(3s, 0.5s)": true },
//   },
//   avatarRipple: {
//     position: "relative",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "150px",
//     width: "150px",
//     borderRadius: "100%",
//     background: "#FFFFFF",
//     boxShadow: "0 0 20px 0 rgba(0,0,0,0.25)",
//     span: { position: "relative", fontSize: "72px", top: "5px", left: "-5px" },
//     "&::after": { "@include rings(3s, 0s)": true },
//     "&::before": { "@include rings(3s, 0.5s)": true },
//   },
// });

export default function Join() {
  // const classes = useStyles();

  return (
    <CenterPaper>
      <LoginCard />
      {/* <div>
        <div className={classes.div}>
          <span className={classes.avatarRipple}>B</span>
        </div>
      </div> */}
    </CenterPaper>
  );
}
