import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import MoreVertIconModule from "@material-ui/icons/MoreVert";
import SearchIconModule from "@material-ui/icons/Search";

const MoreVertIcon = MoreVertIconModule.default || MoreVertIconModule;
const SearchIcon = SearchIconModule.default || SearchIconModule;

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    zIndex: 40,
  },
  headerBar: {
    height: 56,
    borderRadius: 28,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1, 0, 0.75),
    border: "1px solid rgba(255, 255, 255, 0.5)",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    boxShadow: "0 10px 18px rgba(30, 60, 90, 0.18)",
  },
  input: {
    flex: 1,
    minWidth: 0,
    fontSize: 15,
    color: theme.palette.text.primary,
  },
  menuButton: {
    color: theme.palette.text.secondary,
  },
  searchButton: {
    width: 40,
    height: 40,
    color: theme.palette.primary.main,
    backgroundColor: "#eff6ff",
    "&:hover": {
      backgroundColor: "#dbeafe",
    },
  },
}));

export default function HeaderSearchBar({ onOpenMenu }) {
  const classes = useStyles();

  return (
    <Box className={classes.headerContainer}>
      <Paper className={classes.headerBar} elevation={0}>
        <IconButton
          className={classes.menuButton}
          aria-label="メニューを開く"
          onClick={onOpenMenu}
        >
          <MoreVertIcon />
        </IconButton>

        <InputBase
          className={classes.input}
          placeholder="住所、施設名、地番を入力"
          inputProps={{ "aria-label": "住所、施設名、地番を入力" }}
        />

        <IconButton className={classes.searchButton} aria-label="検索">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
