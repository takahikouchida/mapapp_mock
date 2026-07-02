import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  glassUi: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  },
  mapControls: {
    position: "absolute",
    right: 16,
    bottom: 88,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    zIndex: 30,
  },
  controlBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    boxShadow: "0 10px 15px rgba(30, 60, 90, 0.14)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#5f6368",
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    cursor: "pointer",
    padding: 0,
    outline: "none",
  },
  layersBtn: {
    border: "2px solid #1a73e8",
    color: "#1a73e8",
  },
  zoomGroup: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 10px 15px rgba(30, 60, 90, 0.14)",
  },
  zoomBtn: {
    width: 48,
    height: 50,
    color: "#5f6368",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid #f3f4f6",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    outline: "none",
    "&:last-child": {
      borderBottom: "none",
    },
  },
}));

export default function MapControls({ onOpenLayerSidebar }) {
  const classes = useStyles();

  return (
    <Box className={classes.mapControls}>
      <button
        type="button"
        className={`${classes.controlBtn} ${classes.glassUi} ${classes.layersBtn}`}
        onClick={onOpenLayerSidebar}
      >
        <span className="material-symbols-outlined">layers</span>
      </button>

      <Paper className={`${classes.zoomGroup} ${classes.glassUi}`} elevation={0}>
        <button type="button" className={classes.zoomBtn}>
          <span className="material-symbols-outlined">add</span>
        </button>

        <button type="button" className={classes.zoomBtn}>
          <span className="material-symbols-outlined">remove</span>
        </button>
      </Paper>

      <button type="button" className={`${classes.controlBtn} ${classes.glassUi}`}>
        <span className="material-symbols-outlined">my_location</span>
      </button>
    </Box>
  );
}
