import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import CloseIconModule from "@material-ui/icons/Close";

import MenuItem from "./MenuItem";
import PointAddPanel from "./PointAddPanel";

const CloseIcon = CloseIconModule.default || CloseIconModule;

const useStyles = makeStyles((theme) => ({
  paper: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    maxHeight: "calc(var(--app-height, 100dvh) - 88px)",
    bottom: "calc(64px + env(safe-area-inset-bottom))",
    boxShadow: "0 -4px 20px rgba(0,0,0,0.12)",
  },
  bottomSheet: {
    display: "flex",
    flexDirection: "column",
    height: "clamp(330px, 46vh, 460px)",
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#e2e8f0",
    borderRadius: 2,
    margin: "12px auto 10px",
    flexShrink: 0,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2, 1.25, 3),
    flexShrink: 0,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.text.primary,
    fontSize: 18,
    lineHeight: 1.2,
  },
  meta: {
    color: theme.palette.text.disabled,
    fontSize: 12,
    whiteSpace: "nowrap",
  },
  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  closeButton: {
    width: 32,
    height: 32,
    backgroundColor: "#f3f4f6",
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: "#e5e7eb",
    },
  },
  body: {
    padding: theme.spacing(0, 2.5, 2),
    overflowY: "auto",
  },
  menuList: {
    padding: 0,
  },
}));

export default function BottomMenuSheet({
  activePanel,
  onClose,
  onOpenLayerSidebar,
}) {
  const classes = useStyles();
  const [modeState, setModeState] = useState({
    panel: null,
    mode: "menu",
  });
  const mode =
    modeState.panel === activePanel && activePanel ? modeState.mode : "menu";

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
    <List className={classes.menuList}>
      <MenuItem
        icon="layers"
        title="レイヤ切替"
        sub="背景地図や表示レイヤを切り替えます"
        onClick={onOpenLayerSidebar}
      />
      <MenuItem icon="bookmark" title="ブックマーク" sub="保存済みの地点を表示します" />
      <MenuItem icon="straighten" title="計測" sub="距離や面積を計測します" />
      <MenuItem icon="route" title="経路検索" sub="目的地までの経路を確認します" />
      <MenuItem icon="campaign" title="お知らせ" sub="システムからのお知らせを確認します" />
      <MenuItem icon="help" title="ヘルプ" sub="使い方や操作方法を確認します" />
      <MenuItem icon="mail" title="お問い合わせ" sub="問い合わせフォームを表示します" />
      <MenuItem icon="settings" title="設定" sub="表示や操作の設定を変更します" />
    </List>
  );

  const renderAddressPanel = () => (
    <List className={classes.menuList}>
      <MenuItem
        icon="add_location"
        title="ポイントの追加"
        sub="地図上の位置に住所ポイントを追加します"
        onClick={() => setModeState({ panel: activePanel, mode: "pointAdd" })}
      />
      <MenuItem icon="add_a_photo" title="写真投稿" sub="現在位置に写真を添付して投稿します" />
      <MenuItem icon="list_alt" title="リスト一覧表示" sub="登録済みの住所リストを確認します" />
    </List>
  );

  const renderShapePanel = () => (
    <List className={classes.menuList}>
      <MenuItem
        icon="format_list_bulleted"
        title="図形リスト表示"
        sub="作成済みの図形を一覧で確認します"
      />
    </List>
  );

  const renderOtherPanel = () => (
    <List className={classes.menuList}>
      <MenuItem icon="link" title="リンク" sub="現在位置を共有するリンクを作成します" />
      <MenuItem icon="settings" title="設定" sub="表示や操作の設定を変更します" />
    </List>
  );

  const renderPanelBody = () => {
    if (mode === "pointAdd") {
      return (
        <PointAddPanel
          onBack={() => setModeState({ panel: activePanel, mode: "menu" })}
        />
      );
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
    <Drawer
      anchor="bottom"
      variant="persistent"
      open={Boolean(activePanel)}
      onClose={onClose}
      classes={{ paper: classes.paper }}
    >
      <Box className={classes.bottomSheet}>
        <Box className={classes.handle} />

        <Box className={classes.header}>
          <Typography className={classes.title}>{getPanelTitle()}</Typography>

          <Box className={classes.headerActions}>
            <Typography className={classes.meta}>{getPanelMeta()}</Typography>
            <IconButton
              className={classes.closeButton}
              aria-label="パネルを閉じる"
              onClick={onClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Box className={classes.body}>{renderPanelBody()}</Box>
      </Box>
    </Drawer>
  );
}
