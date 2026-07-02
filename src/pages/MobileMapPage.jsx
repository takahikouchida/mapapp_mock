import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

import HeaderSearchBar from "../components/mobileMap/HeaderSearchBar";
import MapControls from "../components/mobileMap/MapControls";
import Crosshair from "../components/mobileMap/Crosshair";
import BottomNav from "../components/mobileMap/BottomNav";
import BottomMenuSheet from "../components/mobileMap/BottomMenuSheet";
import LayerSidebar from "../components/mobileMap/LayerSidebar";
import OpenLayersMap from "../components/mobileMap/OpenLayersMap";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    background: "#f3f4f6",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    WebkitTapHighlightColor: "transparent",
  },
}));

export default function MobileMapPage() {
  const classes = useStyles();

  const [activePanel, setActivePanel] = useState(null);
  const [layerSidebarOpen, setLayerSidebarOpen] = useState(false);
  const [baseLayer, setBaseLayer] = useState("map");
  const [addressLayerVisible, setAddressLayerVisible] = useState(true);
  const [shapeLayerVisible, setShapeLayerVisible] = useState(true);

  useEffect(() => {
    const fontId = "google-material-symbols";

    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const openPanel = (panelId) => {
    setActivePanel(panelId);
  };

  const closePanel = () => {
    setActivePanel(null);
  };

  const openLayerSidebar = () => {
    setLayerSidebarOpen(true);
    setActivePanel(null);
  };

  const closeLayerSidebar = () => {
    setLayerSidebarOpen(false);
  };

  return (
    <Box className={classes.root}>
      <OpenLayersMap />

      <HeaderSearchBar onOpenMenu={() => openPanel("globalMenu")} />

      <MapControls onOpenLayerSidebar={openLayerSidebar} />

      <BottomMenuSheet
        activePanel={activePanel}
        onClose={closePanel}
        onOpenLayerSidebar={openLayerSidebar}
      />

      <BottomNav activePanel={activePanel} onOpenPanel={openPanel} />

      <LayerSidebar
        open={layerSidebarOpen}
        onClose={closeLayerSidebar}
        baseLayer={baseLayer}
        onChangeBaseLayer={setBaseLayer}
        addressLayerVisible={addressLayerVisible}
        onToggleAddressLayer={() =>
          setAddressLayerVisible((current) => !current)
        }
        shapeLayerVisible={shapeLayerVisible}
        onToggleShapeLayer={() =>
          setShapeLayerVisible((current) => !current)
        }
      />
    </Box>
  );
}
