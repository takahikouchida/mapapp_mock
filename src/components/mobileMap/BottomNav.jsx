import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import EmojiTransportationIconModule from "@material-ui/icons/EmojiTransportation";

import { NAV_ITEMS } from "../../constants/mobileMapMenu";

const EmojiTransportationIcon =
    EmojiTransportationIconModule.default || EmojiTransportationIconModule;

const useStyles = makeStyles(() => ({
  bottomNav: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    height: "calc(64px + env(safe-area-inset-bottom))",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderTop: "1px solid #e5e7eb",
    zIndex: 60,
    display: "flex",
    alignItems: "center",
    paddingBottom: "env(safe-area-inset-bottom)",
  },

  navBtn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: 0,
    outline: "none",
    color: "#5f6368",
  },

  navBtnActive: {
    color: "#1a73e8",
  },

  navLabel: {
    fontSize: 10,
    fontWeight: 600,
    marginTop: 2,
  },

  muiIcon: {
    fontSize: 24,
  },
}));

function NavIcon({ icon, classes }) {
  if (icon === "emojiTransportation") {
    return <EmojiTransportationIcon className={classes.muiIcon} />;
  }

  return <span className="material-symbols-outlined">{icon}</span>;
}

export default function BottomNav({ activePanel, onOpenPanel }) {
  const classes = useStyles();

  return (
      <div className={classes.bottomNav}>
        {NAV_ITEMS.map((item) => (
            <button
                key={item.id}
                type="button"
                className={`${classes.navBtn} ${
                    activePanel === item.id ? classes.navBtnActive : ""
                }`}
                onClick={() => onOpenPanel(item.id)}
            >
              <NavIcon icon={item.icon} classes={classes} />
              <Typography className={classes.navLabel}>{item.label}</Typography>
            </button>
        ))}
      </div>
  );
}