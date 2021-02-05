import React from "react";
import { useHistory } from "react-router-dom";
import store from "store";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BookmarkList from "components/molecules/BookmarkList";
import config from "config";

const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: `url(${config.imageUrl}/background.jpg)`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
});

function EndPage({ classes }) {
  const history = useHistory();

  if (!store.game) {
    // If the page is refreshed, we lose game state, so redirect to home
    history.push("/");
    return null;
  }

  return (
    <div className={classes.root}>
      <Typography
        gutterBottom
        variant="h2"
        style={{ fontFamily: "'Damion', cursive" }}
      >
        The End
      </Typography>
      <Typography variant="h6" noWrap gutterBottom>
        Bookmarks
      </Typography>
      <BookmarkList
        bookmarks={Object.values(store.game.bookmarks).map((bookmark) => ({
          href: bookmark.sourceLink,
          src: bookmark.directLink,
        }))}
      />
    </div>
  );
}

export default withStyles(styles)(EndPage);
