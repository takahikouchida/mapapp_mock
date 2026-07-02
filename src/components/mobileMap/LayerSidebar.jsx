import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const BASE_LAYERS = [
  { id: "map", label: "地図", icon: "map" },
  { id: "simple", label: "シンプル", icon: "map" },
  { id: "nolabel", label: "ラベルなし", icon: "map" },
  { id: "photo", label: "写真", icon: "satellite_alt" },
  { id: "blank", label: "白地図", icon: "layers_clear" },
];

const useStyles = makeStyles(() => ({
  sidebarBackdrop: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(15, 23, 42, 0.16)",
    zIndex: 70,
  },

  layerSidebar: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "58vw",
    minWidth: 210,
    maxWidth: 240,
    backgroundColor: "#ffffff",
    zIndex: 80,
    boxShadow: "-10px 0 26px rgba(15, 23, 42, 0.18)",
    transform: "translateX(100%)",
    transition: "transform 0.25s ease",
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    overflow: "hidden",
  },

  layerSidebarOpen: {
    transform: "translateX(0)",
  },

  layerSidebarHeader: {
    flexShrink: 0,
    padding: "10px 10px 8px",
    backgroundColor: "rgba(255,255,255,0.96)",
    borderBottom: "1px solid #eef2f7",
  },

  layerSidebarHeaderTop: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  layerSidebarCloseButton: {
    width: 32,
    height: 32,
    border: "none",
    borderRadius: 16,
    backgroundColor: "#f3f6fb",
    color: "#334155",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    outline: "none",
    flexShrink: 0,
  },

  layerSidebarTitleBox: {
    flexGrow: 1,
    minWidth: 0,
  },

  layerSidebarTitle: {
    fontSize: 15,
    fontWeight: 800,
    color: "#0f172a",
    lineHeight: 1.2,
  },

  layerSidebarSubTitle: {
    marginTop: 2,
    fontSize: 10,
    color: "#94a3b8",
    lineHeight: 1.2,
  },

  layerSidebarBody: {
    flex: 1,
    overflowY: "auto",
    padding: "8px 9px 14px",
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: 800,
    color: "#64748b",
    margin: "8px 0 7px",
  },

  layerThumbGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    columnGap: 8,
    rowGap: 9,
    marginBottom: 12,
  },

  layerThumbButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    outline: "none",
    minWidth: 0,
  },

  layerThumbButtonActive: {
    "& $layerThumbImage": {
      borderColor: "#1a73e8",
      boxShadow: "0 0 0 2px rgba(26,115,232,.16)",
      backgroundColor: "#eff6ff",
    },
    "& $layerThumbLabel": {
      color: "#1a73e8",
      fontWeight: 700,
    },
  },

  layerThumbImage: {
    width: 42,
    height: 42,
    border: "1px solid #d8dee8",
    borderRadius: 9,
    backgroundColor: "#f8fafc",
    backgroundImage: `
      linear-gradient(135deg, rgba(255,255,255,.75) 0 20%, transparent 21%),
      linear-gradient(145deg, transparent 0 45%, rgba(89, 170, 96, .48) 46% 54%, transparent 55%),
      linear-gradient(25deg, transparent 0 48%, rgba(245, 180, 57, .58) 49% 52%, transparent 53%)
    `,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#334155",
    overflow: "hidden",
    "& .material-symbols-outlined": {
      fontSize: 20,
      backgroundColor: "rgba(255,255,255,.78)",
      borderRadius: 5,
    },
  },

  layerThumbLabel: {
    marginTop: 4,
    fontSize: 10,
    color: "#475569",
    lineHeight: 1.15,
    textAlign: "center",
    maxWidth: 72,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  opacityArea: {
    padding: "0 2px 8px",
  },

  opacityRange: {
    width: "100%",
    accentColor: "#3b82f6",
  },

  opacityScale: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 9,
    color: "#94a3b8",
    marginTop: 0,
  },

  layerSectionDivider: {
    height: 1,
    backgroundColor: "#eef2f7",
    margin: "8px -9px",
  },

  layerCheckRow: {
    width: "100%",
    minHeight: 32,
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "4px 0",
    cursor: "pointer",
    outline: "none",
    textAlign: "left",
  },

  layerCheckLabel: {
    flexGrow: 1,
    fontSize: 12,
    color: "#334155",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  layerCheckExtra: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
  },

  layerMiniSelect: {
    height: 26,
    border: "1px solid #d8dee8",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    color: "#334155",
    fontSize: 10,
    padding: "0 6px",
    display: "flex",
    alignItems: "center",
    gap: 0,
    cursor: "pointer",
    outline: "none",
  },

  layerSwitchArea: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },

  layerSwitch: {
    width: 28,
    height: 16,
    borderRadius: 999,
    backgroundColor: "#cbd5e1",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    padding: 2,
    cursor: "pointer",
    flexShrink: 0,
  },

  layerSwitchOn: {
    backgroundColor: "#60a5fa",
    "& $layerSwitchThumb": {
      transform: "translateX(12px)",
    },
  },

  layerSwitchThumb: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    transition: "transform .2s ease",
    boxShadow: "0 1px 2px rgba(0,0,0,.18)",
  },

  layerSwitchLabel: {
    fontSize: 10,
    color: "#64748b",
    whiteSpace: "nowrap",
  },

  layerLinkList: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    padding: "6px 0",
  },

  layerLinkButton: {
    width: "100%",
    height: 30,
    border: "1px solid #93c5fd",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    color: "#3b82f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    cursor: "pointer",
    outline: "none",
  },

  layerLinkLabel: {
    fontSize: 11,
    fontWeight: 700,
    color: "#3b82f6",
  },
}));

function LayerThumb({ item, active, onClick }) {
  const classes = useStyles();

  return (
      <button
          type="button"
          className={`${classes.layerThumbButton} ${
              active ? classes.layerThumbButtonActive : ""
          }`}
          onClick={onClick}
      >
        <Box className={classes.layerThumbImage}>
          <span className="material-symbols-outlined">{item.icon}</span>
        </Box>
        <Typography className={classes.layerThumbLabel}>{item.label}</Typography>
      </button>
  );
}

function LayerCheckboxRow({ checked, label, extra, onClick }) {
  const classes = useStyles();

  return (
      <button type="button" className={classes.layerCheckRow} onClick={onClick}>
      <span
          className="material-symbols-outlined"
          style={{
            color: checked ? "#1a73e8" : "#94a3b8",
            fontSize: 18,
          }}
      >
        {checked ? "check_box" : "check_box_outline_blank"}
      </span>

        <span
            className="material-symbols-outlined"
            style={{ color: "#64748b", fontSize: 16 }}
        >
        apps
      </span>

        <Typography className={classes.layerCheckLabel}>{label}</Typography>

        {extra && <Box className={classes.layerCheckExtra}>{extra}</Box>}
      </button>
  );
}

function LinkButton({ icon, label }) {
  const classes = useStyles();

  return (
      <button type="button" className={classes.layerLinkButton}>
      <span className="material-symbols-outlined" style={{ fontSize: 17 }}>
        {icon}
      </span>
        <Typography className={classes.layerLinkLabel}>{label}</Typography>
      </button>
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
      <>
        {open && <div className={classes.sidebarBackdrop} onClick={onClose} />}

        <div
            className={`${classes.layerSidebar} ${
                open ? classes.layerSidebarOpen : ""
            }`}
        >
          <Box className={classes.layerSidebarHeader}>
            <Box className={classes.layerSidebarHeaderTop}>
              <button
                  type="button"
                  className={classes.layerSidebarCloseButton}
                  onClick={onClose}
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <Box className={classes.layerSidebarTitleBox}>
                <Typography className={classes.layerSidebarTitle}>
                  レイヤ
                </Typography>
                <Typography className={classes.layerSidebarSubTitle}>
                  地図表示を切り替え
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className={classes.layerSidebarBody}>
            <Typography className={classes.sectionTitle}>背景地図</Typography>

            <Box className={classes.layerThumbGrid}>
              {BASE_LAYERS.map((item) => (
                  <LayerThumb
                      key={item.id}
                      item={item}
                      active={baseLayer === item.id}
                      onClick={() => onChangeBaseLayer(item.id)}
                  />
              ))}
            </Box>

            <Box className={classes.opacityArea}>
              <input
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  value={opacity}
                  className={classes.opacityRange}
                  onChange={(event) => setOpacity(Number(event.target.value))}
              />

              <Box className={classes.opacityScale}>
                <span>0%</span>
                <span>20%</span>
                <span>40%</span>
                <span>60%</span>
                <span>80%</span>
                <span>100%</span>
              </Box>
            </Box>

            <Box className={classes.layerSectionDivider} />

            <LayerCheckboxRow
                checked={boundaryVisible}
                label="行政界"
                onClick={() => setBoundaryVisible((current) => !current)}
                extra={
                  <button type="button" className={classes.layerMiniSelect}>
                    自動
                    <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 15 }}
                    >
                  expand_more
                </span>
                  </button>
                }
            />

            <LayerCheckboxRow
                checked={lotNumberVisible}
                label="地番"
                onClick={() => setLotNumberVisible((current) => !current)}
                extra={
                  <Box className={classes.layerSwitchArea}>
                <span
                    className={`${classes.layerSwitch} ${
                        registeredOwnerMapVisible ? classes.layerSwitchOn : ""
                    }`}
                    onClick={(event) => {
                      event.stopPropagation();
                      setRegisteredOwnerMapVisible((current) => !current);
                    }}
                >
                  <span className={classes.layerSwitchThumb} />
                </span>
                    <Typography className={classes.layerSwitchLabel}>
                      登記所
                    </Typography>
                  </Box>
                }
            />

            <LayerCheckboxRow
                checked={bookmarkVisible}
                label="ブックマーク"
                onClick={() => setBookmarkVisible((current) => !current)}
            />

            <Box className={classes.layerSectionDivider} />

            <Box className={classes.layerLinkList}>
              <LinkButton icon="home_work" label="ハザード" />
              <LinkButton icon="location_city" label="地域情報" />
              <LinkButton icon="public" label="公開情報" />
            </Box>

            <Box className={classes.layerSectionDivider} />

          </Box>
        </div>
      </>
  );
}