import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import AppsIconModule from "@material-ui/icons/Apps";
import ArrowDropDownIconModule from "@material-ui/icons/ArrowDropDown";
import CloseIconModule from "@material-ui/icons/Close";
import HomeWorkIconModule from "@material-ui/icons/HomeWork";
import LayersClearIconModule from "@material-ui/icons/LayersClear";
import LocationCityIconModule from "@material-ui/icons/LocationCity";
import MapIconModule from "@material-ui/icons/Map";
import PublicIconModule from "@material-ui/icons/Public";
import SatelliteIconModule from "@material-ui/icons/Satellite";

const AppsIcon = AppsIconModule.default || AppsIconModule;
const ArrowDropDownIcon =
  ArrowDropDownIconModule.default || ArrowDropDownIconModule;
const CloseIcon = CloseIconModule.default || CloseIconModule;
const HomeWorkIcon = HomeWorkIconModule.default || HomeWorkIconModule;
const LayersClearIcon =
  LayersClearIconModule.default || LayersClearIconModule;
const LocationCityIcon =
  LocationCityIconModule.default || LocationCityIconModule;
const MapIcon = MapIconModule.default || MapIconModule;
const PublicIcon = PublicIconModule.default || PublicIconModule;
const SatelliteIcon = SatelliteIconModule.default || SatelliteIconModule;

const BASE_LAYERS = [
  { id: "map", label: "地図", Icon: MapIcon },
  { id: "simple", label: "シンプル", Icon: MapIcon },
  { id: "nolabel", label: "ラベルなし", Icon: MapIcon },
  { id: "photo", label: "写真", Icon: SatelliteIcon },
  { id: "blank", label: "白地図", Icon: LayersClearIcon },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "min(78vw, 288px)",
    maxWidth: 288,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    overflow: "hidden",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    padding: theme.spacing(1.25, 1.25, 1),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  closeButton: {
    width: 34,
    height: 34,
    backgroundColor: "#f3f6fb",
    color: theme.palette.text.primary,
    "&:hover": {
      backgroundColor: "#e5edf7",
    },
  },
  titleBox: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 800,
    color: theme.palette.text.primary,
    lineHeight: 1.2,
  },
  subTitle: {
    marginTop: 2,
    fontSize: 11,
    color: theme.palette.text.secondary,
    lineHeight: 1.2,
  },
  body: {
    height: "100%",
    overflowY: "auto",
    padding: theme.spacing(1, 1.25, 2),
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 800,
    color: theme.palette.text.secondary,
    margin: theme.spacing(1, 0, 0.75),
  },
  layerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: theme.spacing(1),
  },
  radioItem: {
    margin: 0,
    alignItems: "stretch",
  },
  radioPaper: {
    width: "100%",
    minHeight: 78,
    padding: theme.spacing(0.75),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  radioPaperActive: {
    borderColor: theme.palette.primary.main,
    backgroundColor: "#eff6ff",
    boxShadow: "0 0 0 2px rgba(26, 115, 232, 0.14)",
  },
  radioControl: {
    display: "none",
  },
  layerIcon: {
    color: theme.palette.text.secondary,
  },
  layerIconActive: {
    color: theme.palette.primary.main,
  },
  layerLabel: {
    fontSize: 11,
    fontWeight: 700,
    textAlign: "center",
  },
  opacityArea: {
    padding: theme.spacing(1, 1, 0),
  },
  marks: {
    fontSize: 9,
  },
  list: {
    padding: 0,
  },
  listItem: {
    minHeight: 42,
    paddingLeft: 0,
    paddingRight: 86,
  },
  listIcon: {
    minWidth: 32,
    color: theme.palette.text.secondary,
  },
  listText: {
    "& .MuiListItemText-primary": {
      fontSize: 13,
      fontWeight: 600,
    },
  },
  secondaryAction: {
    right: 0,
  },
  miniButton: {
    minWidth: 58,
    height: 28,
    padding: theme.spacing(0, 0.75),
    borderRadius: 8,
    fontSize: 11,
  },
  switchLabel: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  switchText: {
    fontSize: 10,
    color: theme.palette.text.secondary,
  },
  linkList: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.75),
    padding: theme.spacing(0.75, 0),
  },
  linkButton: {
    justifyContent: "center",
    height: 34,
    borderRadius: 8,
    fontWeight: 700,
  },
}));

function BaseLayerOption({ item, active }) {
  const classes = useStyles();
  const IconComponent = item.Icon;

  return (
    <Paper
      className={`${classes.radioPaper} ${active ? classes.radioPaperActive : ""}`}
      elevation={0}
    >
      <IconComponent className={active ? classes.layerIconActive : classes.layerIcon} />
      <Typography
        className={classes.layerLabel}
        color={active ? "primary" : "textSecondary"}
      >
        {item.label}
      </Typography>
    </Paper>
  );
}

function LayerVisibilityRow({ checked, label, onToggle, secondaryAction }) {
  const classes = useStyles();

  return (
    <ListItem button className={classes.listItem} onClick={onToggle}>
      <ListItemIcon className={classes.listIcon}>
        <Checkbox
          edge="start"
          checked={checked}
          color="primary"
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-label": label }}
        />
      </ListItemIcon>
      <ListItemIcon className={classes.listIcon}>
        <AppsIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText className={classes.listText} primary={label} />
      {secondaryAction && (
        <ListItemSecondaryAction className={classes.secondaryAction}>
          {secondaryAction}
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
}

function LinkButton({ icon: IconComponent, label }) {
  const classes = useStyles();

  return (
    <Button
      className={classes.linkButton}
      variant="outlined"
      color="primary"
      startIcon={<IconComponent />}
    >
      {label}
    </Button>
  );
}

export default function LayerSidebar({
  open,
  onClose,
  baseLayer,
  onChangeBaseLayer,
  addressLayerVisible,
  onToggleAddressLayer,
  shapeLayerVisible,
  onToggleShapeLayer,
}) {
  const classes = useStyles();

  const [opacity, setOpacity] = useState(100);
  const [boundaryVisible, setBoundaryVisible] = useState(false);
  const [lotNumberVisible, setLotNumberVisible] = useState(false);
  const [bookmarkVisible, setBookmarkVisible] = useState(true);
  const [registeredOwnerMapVisible, setRegisteredOwnerMapVisible] =
    useState(false);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      classes={{ paper: classes.paper }}
    >
      <Box className={classes.header}>
        <IconButton
          className={classes.closeButton}
          aria-label="レイヤを閉じる"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box className={classes.titleBox}>
          <Typography className={classes.title}>レイヤ</Typography>
          <Typography className={classes.subTitle}>地図表示を切り替え</Typography>
        </Box>
      </Box>

      <Box className={classes.body}>
        <Typography className={classes.sectionTitle}>背景地図</Typography>

        <RadioGroup
          value={baseLayer}
          onChange={(event) => onChangeBaseLayer(event.target.value)}
        >
          <Box className={classes.layerGrid}>
            {BASE_LAYERS.map((item) => (
              <FormControlLabel
                key={item.id}
                className={classes.radioItem}
                value={item.id}
                control={<Radio className={classes.radioControl} />}
                label={<BaseLayerOption item={item} active={baseLayer === item.id} />}
              />
            ))}
          </Box>
        </RadioGroup>

        <Box className={classes.opacityArea}>
          <Slider
            value={opacity}
            min={0}
            max={100}
            step={10}
            marks={[
              { value: 0, label: "0%" },
              { value: 50, label: "50%" },
              { value: 100, label: "100%" },
            ]}
            valueLabelDisplay="auto"
            classes={{ markLabel: classes.marks }}
            onChange={(event, value) => setOpacity(value)}
            aria-labelledby="レイヤ透明度"
          />
        </Box>

        <Divider />

        <List className={classes.list}>
          <LayerVisibilityRow
            checked={addressLayerVisible}
            label="住所ポイント"
            onToggle={onToggleAddressLayer}
          />
          <LayerVisibilityRow
            checked={shapeLayerVisible}
            label="図形"
            onToggle={onToggleShapeLayer}
          />
          <LayerVisibilityRow
            checked={boundaryVisible}
            label="行政界"
            onToggle={() => setBoundaryVisible((current) => !current)}
            secondaryAction={
              <Button
                className={classes.miniButton}
                variant="outlined"
                endIcon={<ArrowDropDownIcon />}
              >
                自動
              </Button>
            }
          />
          <LayerVisibilityRow
            checked={lotNumberVisible}
            label="地番"
            onToggle={() => setLotNumberVisible((current) => !current)}
            secondaryAction={
              <Box className={classes.switchLabel}>
                <Switch
                  size="small"
                  color="primary"
                  checked={registeredOwnerMapVisible}
                  onClick={(event) => event.stopPropagation()}
                  onChange={() =>
                    setRegisteredOwnerMapVisible((current) => !current)
                  }
                  inputProps={{ "aria-label": "登記所地図を切り替え" }}
                />
                <Typography className={classes.switchText}>登記所</Typography>
              </Box>
            }
          />
          <LayerVisibilityRow
            checked={bookmarkVisible}
            label="ブックマーク"
            onToggle={() => setBookmarkVisible((current) => !current)}
          />
        </List>

        <Divider />

        <Box className={classes.linkList}>
          <LinkButton icon={HomeWorkIcon} label="ハザード" />
          <LinkButton icon={LocationCityIcon} label="地域情報" />
          <LinkButton icon={PublicIcon} label="公開情報" />
        </Box>
      </Box>
    </Drawer>
  );
}
