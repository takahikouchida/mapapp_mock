import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  crosshairContainer: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  crosshair: {
    position: "relative",
    width: 40,
    height: 40,
  },
  lineV: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: "#ef4444",
    opacity: 0.6,
    transform: "translateX(-50%)",
  },
  lineH: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#ef4444",
    opacity: 0.6,
    transform: "translateY(-50%)",
  },
  centerDot: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 8,
    height: 8,
    border: "2px solid #ef4444",
    backgroundColor: "#ffffff",
    borderRadius: 2,
    transform: "translate(-50%, -50%)",
  },
}));

export default function Crosshair() {
  const classes = useStyles();

  return (
    <Box className={classes.crosshairContainer}>
      <Box className={classes.crosshair}>
        <Box className={classes.lineV} />
        <Box className={classes.lineH} />
        <Box className={classes.centerDot} />
      </Box>
    </Box>
  );
}
