import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import AddAPhotoIconModule from "@material-ui/icons/AddAPhoto";
import AddLocationIconModule from "@material-ui/icons/AddLocation";
import BookmarkIconModule from "@material-ui/icons/Bookmark";
import ChevronRightIconModule from "@material-ui/icons/ChevronRight";
import DirectionsIconModule from "@material-ui/icons/Directions";
import FormatListBulletedIconModule from "@material-ui/icons/FormatListBulleted";
import HelpIconModule from "@material-ui/icons/Help";
import LayersIconModule from "@material-ui/icons/Layers";
import LinkIconModule from "@material-ui/icons/Link";
import ListAltIconModule from "@material-ui/icons/ListAlt";
import MailIconModule from "@material-ui/icons/Mail";
import NotificationsIconModule from "@material-ui/icons/Notifications";
import SettingsIconModule from "@material-ui/icons/Settings";
import StraightenIconModule from "@material-ui/icons/Straighten";

const AddAPhotoIcon = AddAPhotoIconModule.default || AddAPhotoIconModule;
const AddLocationIcon = AddLocationIconModule.default || AddLocationIconModule;
const BookmarkIcon = BookmarkIconModule.default || BookmarkIconModule;
const ChevronRightIcon =
  ChevronRightIconModule.default || ChevronRightIconModule;
const DirectionsIcon = DirectionsIconModule.default || DirectionsIconModule;
const FormatListBulletedIcon =
  FormatListBulletedIconModule.default || FormatListBulletedIconModule;
const HelpIcon = HelpIconModule.default || HelpIconModule;
const LayersIcon = LayersIconModule.default || LayersIconModule;
const LinkIcon = LinkIconModule.default || LinkIconModule;
const ListAltIcon = ListAltIconModule.default || ListAltIconModule;
const MailIcon = MailIconModule.default || MailIconModule;
const NotificationsIcon =
  NotificationsIconModule.default || NotificationsIconModule;
const SettingsIcon = SettingsIconModule.default || SettingsIconModule;
const StraightenIcon = StraightenIconModule.default || StraightenIconModule;

const ICONS = {
  add_a_photo: AddAPhotoIcon,
  add_location: AddLocationIcon,
  bookmark: BookmarkIcon,
  campaign: NotificationsIcon,
  format_list_bulleted: FormatListBulletedIcon,
  help: HelpIcon,
  layers: LayersIcon,
  link: LinkIcon,
  list_alt: ListAltIcon,
  mail: MailIcon,
  route: DirectionsIcon,
  settings: SettingsIcon,
  straighten: StraightenIcon,
};

const useStyles = makeStyles((theme) => ({
  item: {
    minHeight: 64,
    marginBottom: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    paddingRight: theme.spacing(5),
  },
  avatar: {
    width: 38,
    height: 38,
    color: theme.palette.primary.main,
    backgroundColor: "#eff6ff",
  },
  primary: {
    fontSize: 14,
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  secondary: {
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  chevron: {
    color: theme.palette.action.disabled,
  },
}));

export default function MenuItem({ icon, title, sub, onClick }) {
  const classes = useStyles();
  const IconComponent = ICONS[icon] || LayersIcon;

  return (
    <ListItem button className={classes.item} onClick={onClick}>
      <ListItemAvatar>
        <Avatar className={classes.avatar}>
          <IconComponent fontSize="small" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={sub}
        primaryTypographyProps={{ className: classes.primary }}
        secondaryTypographyProps={{ className: classes.secondary }}
      />
      <ListItemSecondaryAction>
        <ChevronRightIcon className={classes.chevron} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}
