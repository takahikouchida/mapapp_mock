import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import MenuItem from "./MenuItem";
import PointAddPanel from "./PointAddPanel";

const useStyles = makeStyles(() => ({
    bottomSheet: {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: "calc(64px + env(safe-area-inset-bottom))",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.12)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: "46vh",
        maxHeight: 460,
        minHeight: 330,
    },

  bottomSheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: "#e2e8f0",
    borderRadius: 2,
    margin: "12px auto 10px",
  },

  bottomSheetHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px 12px",
  },

  bottomSheetHeaderLeft: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    minWidth: 0,
  },

  bottomSheetTitle: {
    fontWeight: 700,
    color: "#1f2937",
    fontSize: 18,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
  },

  bottomSheetMeta: {
    color: "#9ca3af",
    fontSize: 12,
    whiteSpace: "nowrap",
  },

  closeButton: {
    width: 32,
    height: 32,
    border: "none",
    borderRadius: 16,
    backgroundColor: "#f3f4f6",
    color: "#6b7280",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    outline: "none",
  },

  bottomSheetBody: {
    padding: "0 20px 16px",
    overflowY: "auto",
  },

  menuList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
}));

export default function BottomMenuSheet({
                                          activePanel,
                                          onClose,
                                          onOpenLayerSidebar,
                                        }) {
  const classes = useStyles();
  const [mode, setMode] = React.useState("menu");

  React.useEffect(() => {
    setMode("menu");
  }, [activePanel]);

  if (!activePanel) {
    return null;
  }

  const getPanelTitle = () => {
    if (mode === "pointAdd") {
      return "ポイントの追加";
    }

    switch (activePanel) {
      case "globalMenu":
        return "メニュー";
      case "address":
        return "住所リスト";
      case "shape":
        return "図形リスト";
      case "other":
        return "その他";
      default:
        return "";
    }
  };

  const getPanelMeta = () => {
    if (mode === "pointAdd") {
      return "登録";
    }

    switch (activePanel) {
      case "globalMenu":
        return "全体";
      default:
        return "メニュー";
    }
  };

  const renderGlobalMenuPanel = () => (
      <Box className={classes.menuList}>
        <MenuItem
            icon="layers"
            title="レイヤ切替"
            sub="背景地図や表示レイヤを切り替えます"
            onClick={onOpenLayerSidebar}
        />

        <MenuItem
            icon="bookmark"
            title="ブックマーク"
            sub="保存済みの地点を表示します"
        />

        <MenuItem
            icon="straighten"
            title="計測"
            sub="距離や面積を計測します"
        />

        <MenuItem
            icon="route"
            title="経路検索"
            sub="目的地までの経路を確認します"
        />

        <MenuItem
            icon="campaign"
            title="お知らせ"
            sub="システムからのお知らせを確認します"
        />

        <MenuItem
            icon="help"
            title="ヘルプ"
            sub="使い方や操作方法を確認します"
        />

        <MenuItem
            icon="mail"
            title="お問い合わせ"
            sub="問い合わせフォームを表示します"
        />

        <MenuItem
            icon="settings"
            title="設定"
            sub="表示や操作の設定を変更します"
        />
      </Box>
  );

  const renderAddressPanel = () => (
      <Box className={classes.menuList}>
        <MenuItem
            icon="add_location"
            title="ポイントの追加"
            sub="地図上の位置に住所ポイントを追加します"
            onClick={() => setMode("pointAdd")}
        />

        <MenuItem
            icon="add_a_photo"
            title="写真投稿"
            sub="現在位置に写真を添付して投稿します"
        />

        <MenuItem
            icon="list_alt"
            title="リスト一覧表示"
            sub="登録済みの住所リストを確認します"
        />
      </Box>
  );

  const renderShapePanel = () => (
      <Box className={classes.menuList}>
        <MenuItem
            icon="format_list_bulleted"
            title="図形リスト表示"
            sub="作成済みの図形を一覧で確認します"
        />
      </Box>
  );

  const renderOtherPanel = () => (
      <Box className={classes.menuList}>
        <MenuItem
            icon="link"
            title="リンク"
            sub="現在位置を共有するリンクを作成します"
        />

        <MenuItem
            icon="settings"
            title="設定"
            sub="表示や操作の設定を変更します"
        />
      </Box>
  );

  const renderPanelBody = () => {
    if (mode === "pointAdd") {
      return <PointAddPanel onBack={() => setMode("menu")} />;
    }

    switch (activePanel) {
      case "globalMenu":
        return renderGlobalMenuPanel();
      case "address":
        return renderAddressPanel();
      case "shape":
        return renderShapePanel();
      case "other":
        return renderOtherPanel();
      default:
        return null;
    }
  };

  return (
      <Box className={classes.bottomSheet}>
        <Box className={classes.bottomSheetHandle} />

        <Box className={classes.bottomSheetHeader}>
          <Box className={classes.bottomSheetHeaderLeft}>
            <Typography className={classes.bottomSheetTitle}>
              {getPanelTitle()}
            </Typography>
          </Box>

          <Box style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Typography className={classes.bottomSheetMeta}>
              {getPanelMeta()}
            </Typography>

            <button type="button" className={classes.closeButton} onClick={onClose}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </Box>
        </Box>

        <Box className={classes.bottomSheetBody}>{renderPanelBody()}</Box>
      </Box>
  );
}