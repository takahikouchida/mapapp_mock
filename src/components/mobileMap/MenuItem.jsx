import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  menuItem: {
    width: "100%",
    minHeight: 58,
    padding: "10px 14px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    gap: 12,
    cursor: "pointer",
    outline: "none",
    textAlign: "left",
  },
  menuIconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#eff6ff",
    color: "#1a73e8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  menuText: {
    flexGrow: 1,
    minWidth: 0,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#1f2937",
  },
  menuSub: {
    fontSize: 12,
    color: "#6b7280",
  },
}));

export default function MenuItem({ icon, title, sub, onClick }) {
  const classes = useStyles();

  return (
    <button type="button" className={classes.menuItem} onClick={onClick}>
      <Box className={classes.menuIconBox}>
        <span className="material-symbols-outlined">{icon}</span>
      </Box>

      <Box className={classes.menuText}>
        <Typography className={classes.menuTitle}>{title}</Typography>
        {sub && <Typography className={classes.menuSub}>{sub}</Typography>}
      </Box>

      <span className="material-symbols-outlined" style={{ color: "#cbd5e1" }}>
        chevron_right
      </span>
    </button>
  );
}
