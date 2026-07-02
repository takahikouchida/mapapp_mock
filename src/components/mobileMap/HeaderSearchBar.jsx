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
  headerContainer: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    zIndex: 40,
  },
  headerBar: {
    height: 56,
    borderRadius: 28,
    display: "flex",
    alignItems: "center",
    padding: "0 8px 0 10px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: "0 10px 18px rgba(30, 60, 90, 0.18)",
  },
  headerIconButton: {
    width: 40,
    height: 40,
    border: "none",
    borderRadius: 20,
    background: "transparent",
    color: "#5f6368",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    outline: "none",
  },
  headerSearchButton: {
    width: 40,
    height: 40,
    border: "none",
    borderRadius: 20,
    background: "#eff6ff",
    color: "#1a73e8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    outline: "none",
  },
  searchInput: {
    flexGrow: 1,
    minWidth: 0,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontSize: 15,
    padding: "0 8px",
    color: "#1f2937",
    "&::placeholder": {
      color: "#6b7280",
    },
  },
}));

export default function HeaderSearchBar({ onOpenMenu }) {
  const classes = useStyles();

  return (
    <Box className={classes.headerContainer}>
      <Paper className={`${classes.headerBar} ${classes.glassUi}`} elevation={0}>
        <button
          type="button"
          className={classes.headerIconButton}
          onClick={onOpenMenu}
        >
          <span className="material-symbols-outlined">more_vert</span>
        </button>

        <input
          className={classes.searchInput}
          type="text"
          placeholder="住所、施設名、地番を入力"
        />

        <button type="button" className={classes.headerSearchButton}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </Paper>
    </Box>
  );
}
