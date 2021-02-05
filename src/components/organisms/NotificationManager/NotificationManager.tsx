import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Notification as INotification } from "common/store/notifications";
import Notification from "components/molecules/Notification";
import Grow from "components/atoms/Grow";

const useStyles = makeStyles(() => ({
  root: {
    pointerEvents: "none",
    position: "fixed",
    zIndex: 2000,
    width: "100%",
  },
  notifications: {
    pointerEvents: "auto",
  },
}));

export interface NotificationManagerProps {
  notifications: INotification[];
}

const NotificationManager: FC<NotificationManagerProps> = ({
  notifications,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="space-between" pt={10}>
        <Grow />
        <div className={classes.notifications}>
          {notifications.map((notification) => (
            <Box key={notification.id} m={2}>
              <Notification notification={notification} />
            </Box>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default NotificationManager;
