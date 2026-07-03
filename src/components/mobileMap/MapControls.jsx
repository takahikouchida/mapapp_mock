import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import AddIconModule from "@material-ui/icons/Add";
import LayersIconModule from "@material-ui/icons/Layers";
import MyLocationIconModule from "@material-ui/icons/MyLocation";
import RemoveIconModule from "@material-ui/icons/Remove";

const AddIcon = AddIconModule.default || AddIconModule;
const LayersIcon = LayersIconModule.default || LayersIconModule;
const MyLocationIcon = MyLocationIconModule.default || MyLocationIconModule;
const RemoveIcon = RemoveIconModule.default || RemoveIconModule;

const useStyles = makeStyles((theme) => ({
  mapControls: {
    position: "absolute",
    right: 16,
    bottom: 88,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    zIndex: 30,
  },
  glassUi: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    boxShadow: "0 10px 15px rgba(30, 60, 90, 0.14)",
  },
  controlButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.98)",
    },
  },
  layerButton: {
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  zoomGroup: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    overflow: "hidden",
  },
  zoomButton: {
    width: 48,
    height: 50,
    borderRadius: 0,
    color: theme.palette.text.secondary,
    "&:not(:last-child)": {
      borderBottom: "1px solid #f3f4f6",
    },
  },
}));

export default function MapControls({ onOpenLayerSidebar }) {
  const classes = useStyles();

  return (
    <Box className={classes.mapControls}>
      <IconButton
        className={`${classes.controlButton} ${classes.glassUi} ${classes.layerButton}`}
        aria-label="レイヤを開く"
        onClick={onOpenLayerSidebar}
      >
        <LayersIcon />
      </IconButton>

      <Paper className={`${classes.zoomGroup} ${classes.glassUi}`} elevation={0}>
        <IconButton className={classes.zoomButton} aria-label="拡大">
          <AddIcon />
        </IconButton>
        <IconButton className={classes.zoomButton} aria-label="縮小">
          <RemoveIcon />
        </IconButton>
      </Paper>

      <IconButton
        className={`${classes.controlButton} ${classes.glassUi}`}
        aria-label="現在地へ移動"
      >
        <MyLocationIcon />
      </IconButton>
    </Box>
  );
}
