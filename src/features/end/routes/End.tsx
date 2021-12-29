import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import store from "@/store";
import BackgroundImage from "@/assets/images/background.jpg";
import { SupportSiteBanner } from "@/components/SupportSiteBanner";
import { Head } from "@/components/Head";
import { NavBar } from "@/components/NavBar";

import { BookmarkList } from "../components/BookmarkList";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
});

export function End() {
  const classes = useStyles();
  const navigate = useNavigate();

  if (!store.game) {
    // If the page is refreshed, we lose game state, so redirect to home
    navigate("/");
    return null;
  }

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Head title="End" />
        <SupportSiteBanner />
        <br />
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
          bookmarks={store.game.bookmarks.map((bookmark) => ({
            href: bookmark.href,
            src: bookmark.src,
          }))}
        />
      </div>
    </>
  );
}
