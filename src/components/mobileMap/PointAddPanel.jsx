import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MyLocationIconModule from "@material-ui/icons/MyLocation";

const MyLocationIcon = MyLocationIconModule.default || MyLocationIconModule;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
  },
  description: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
  },
  currentPointCard: {
    padding: theme.spacing(1.5),
    borderRadius: 10,
    backgroundColor: "#eff6ff",
    border: "1px solid #bfdbfe",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.25),
  },
  currentPointIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  currentPointText: {
    flex: 1,
    minWidth: 0,
  },
  currentPointTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  currentPointSub: {
    fontSize: 11,
    color: theme.palette.text.secondary,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 10,
      backgroundColor: theme.palette.background.paper,
    },
  },
  actionRow: {
    display: "flex",
    gap: theme.spacing(1.25),
    marginTop: theme.spacing(0.5),
  },
  actionButton: {
    flex: 1,
    height: 44,
    borderRadius: 10,
    fontWeight: 700,
  },
}));

export default function PointAddPanel({ onBack }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.description}>
        地図中央の位置を住所ポイントとして登録します。必要に応じて名称やメモを入力してください。
      </Typography>

      <Paper className={classes.currentPointCard} elevation={0}>
        <Box className={classes.currentPointIcon}>
          <MyLocationIcon fontSize="small" />
        </Box>

        <Box className={classes.currentPointText}>
          <Typography className={classes.currentPointTitle}>
            現在の中心位置
          </Typography>
          <Typography className={classes.currentPointSub}>
            139.66529, 35.71366
          </Typography>
        </Box>
      </Paper>

      <TextField
        className={classes.textField}
        label="名称"
        placeholder="例：現地確認地点"
        variant="outlined"
        size="small"
        fullWidth
      />

      <TextField
        className={classes.textField}
        label="住所"
        placeholder="住所を入力、または逆ジオコーディング"
        variant="outlined"
        size="small"
        fullWidth
      />

      <TextField
        className={classes.textField}
        label="メモ"
        placeholder="補足情報を入力"
        variant="outlined"
        size="small"
        fullWidth
        multiline
        minRows={3}
      />

      <Box className={classes.actionRow}>
        <Button className={classes.actionButton} variant="outlined" onClick={onBack}>
          戻る
        </Button>

        <Button className={classes.actionButton} color="primary" variant="contained">
          登録する
        </Button>
      </Box>
    </Box>
  );
}
