import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import store from "store";
import StatusPanel from "containers/StatusPanel";
import TriggerPanel from "containers/TriggerPanel";
import PersistentTriggerPanel from "containers/PersistentTriggerPanel";
import FullScreenButton from "components/molecules/buttons/FullScreenButton";
import BookmarkButton from "components/molecules/buttons/BookmarkButton";
import SkipButton from "components/molecules/buttons/SkipButton";
import HomeButton from "components/atoms/HomeButton";
import { nextSlide } from "game/utils/fetchPictures";
import { Notify } from "common/store/notifications";
import BeatMeter from "components/organisms/BeatMeter";
import { strokeEmitterObservable } from "game/loops/strokeEmitter";
import { ProxyStoreConsumer } from "containers/StoreProvider";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    pointerEvents: "none",
  },
}));

export interface HUDProps {
  createNotification: (notification: Notify) => void;
}

const HUD: FC<HUDProps> = ({ createNotification }) => {
  const classes = useStyles();

  const bookmark = () => {
    const link = store.game.activeLink;

    createNotification({
      message: "Bookmarked",
      dismissible: true,
    });

    store.game.bookmarks[link.sourceLink] = link;
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div>
              <StatusPanel />
              <PersistentTriggerPanel />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row-reverse",
                  pointerEvents: "auto",
                  color: "white",
                }}
              >
                <FullScreenButton />
                <HomeButton />
                <SkipButton onClick={nextSlide} />
                <BookmarkButton onClick={bookmark} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <TriggerPanel />

          <ProxyStoreConsumer>
            {({ enableBeatMeter }: { enableBeatMeter: boolean }) => (
              <>
                {enableBeatMeter && (
                  <BeatMeter
                    strokeEmitterObservable={strokeEmitterObservable}
                  />
                )}
              </>
            )}
          </ProxyStoreConsumer>
        </div>
      </div>
    </div>
  );
};

export default HUD;
