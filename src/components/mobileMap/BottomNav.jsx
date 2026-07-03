import { makeStyles } from "@material-ui/core/styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EmojiTransportationIconModule from "@material-ui/icons/EmojiTransportation";
import GestureIconModule from "@material-ui/icons/Gesture";
import LocationOnIconModule from "@material-ui/icons/LocationOn";
import MoreHorizIconModule from "@material-ui/icons/MoreHoriz";
import ThreeDRotationIconModule from "@material-ui/icons/ThreeDRotation";

import { NAV_ITEMS } from "../../constants/mobileMapMenu";

const EmojiTransportationIcon =
  EmojiTransportationIconModule.default || EmojiTransportationIconModule;
const GestureIcon = GestureIconModule.default || GestureIconModule;
const LocationOnIcon = LocationOnIconModule.default || LocationOnIconModule;
const MoreHorizIcon = MoreHorizIconModule.default || MoreHorizIconModule;
const ThreeDRotationIcon =
  ThreeDRotationIconModule.default || ThreeDRotationIconModule;

const ICONS = {
  location_on: LocationOnIcon,
  draw: GestureIcon,
  emojiTransportation: EmojiTransportationIcon,
  view_in_ar: ThreeDRotationIcon,
  more_horiz: MoreHorizIcon,
};

const useStyles = makeStyles((theme) => ({
  bottomNav: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    height: "calc(64px + env(safe-area-inset-bottom))",
    paddingBottom: "env(safe-area-inset-bottom)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderTop: `1px solid ${theme.palette.divider}`,
    zIndex: 60,
  },
  actionRoot: {
    minWidth: 0,
    maxWidth: "none",
    height: 64,
    paddingTop: 7,
    color: theme.palette.text.secondary,
  },
  actionSelected: {
    color: theme.palette.primary.main,
  },
  actionLabel: {
    fontSize: 10,
    fontWeight: 600,
    "&$actionSelected": {
      fontSize: 10,
    },
  },
}));

function NavIcon({ icon }) {
  const IconComponent = ICONS[icon] || MoreHorizIcon;
  return <IconComponent />;
}

export default function BottomNav({ activePanel, onOpenPanel }) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={activePanel}
      onChange={(event, value) => onOpenPanel(value)}
      showLabels
      className={classes.bottomNav}
    >
      {NAV_ITEMS.map((item) => (
        <BottomNavigationAction
          key={item.id}
          value={item.id}
          label={item.label}
          icon={<NavIcon icon={item.icon} />}
          classes={{
            root: classes.actionRoot,
            selected: classes.actionSelected,
            label: classes.actionLabel,
          }}
        />
      ))}
    </BottomNavigation>
  );
}
