import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

import HeaderSearchBar from "../components/mobileMap/HeaderSearchBar";
import MapControls from "../components/mobileMap/MapControls";
import BottomNav from "../components/mobileMap/BottomNav";
import BottomMenuSheet from "../components/mobileMap/BottomMenuSheet";
import LayerSidebar from "../components/mobileMap/LayerSidebar";
import OpenLayersMap from "../components/mobileMap/OpenLayersMap";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "100vw",

    // Android Chrome のアドレスバー対策
    height: "var(--app-height, 100dvh)",
    minHeight: "var(--app-height, 100dvh)",

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
    let timerId = null;

    const updateAppHeight = () => {
      const height = window.visualViewport
          ? window.visualViewport.height
          : window.innerHeight;

      document.documentElement.style.setProperty(
          "--app-height",
          `${height}px`
      );
    };

    // 初回実行
    updateAppHeight();

    // Android Chrome 等でロード完了直後にアドレスバーの高さ計算がズレるのを防ぐための遅延実行
    timerId = setTimeout(updateAppHeight, 100);

    window.addEventListener("resize", updateAppHeight);
    window.addEventListener("orientationchange", updateAppHeight);

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateAppHeight);
      window.visualViewport.addEventListener("scroll", updateAppHeight);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
      window.removeEventListener("resize", updateAppHeight);
      window.removeEventListener("orientationchange", updateAppHeight);

      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", updateAppHeight);
        window.visualViewport.removeEventListener("scroll", updateAppHeight);
      }
    };
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

        <MapControls
            bottomSheetOpen={Boolean(activePanel)}
            onOpenLayerSidebar={openLayerSidebar}
        />

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
