import { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import {
  Notification as INotification,
  Severity,
} from "common/store/notifications";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import StarIcon from "@material-ui/icons/Grade";
import CloseIcon from "@material-ui/icons/Close";
import ProgressBar from "components/atoms/ProgressBar";

type StyleProps = {
  severity?: Severity;
  dismissible?: boolean;
};

const useStyles = makeStyles((theme) => ({
  root: ({ severity }: StyleProps) => {
    let backgroundColor = "white";
    let color = "black";

    switch (severity) {
      case Severity.ERROR: {
        backgroundColor = theme.palette.error.main;
        color = "white";
      }
    }

    return {
      backgroundColor,
      color,
      height: 47,
    };
  },
  message: {
    userSelect: "none",
    overflow: "hidden",
  },
  progress: {
    height: 3,
  },
  dismissIcon: ({ dismissible }: StyleProps) => ({
    visibility: dismissible ? "visible" : "hidden",
  }),
}));

export type NotificationProps = {
  notification: INotification;
  dismissNotification: (id: string) => void;
};

const iconSeverityMap = {
  [Severity.ERROR]: <ErrorIcon />,
  [Severity.INFO]: <StarIcon />,
};

export default function Notification({
  notification: {
    id,
    message,
    severity,
    duration = -1,
    dismissible,
    showProgress,
    delay = 0,
  },
  dismissNotification,
}: NotificationProps) {
  const [isOpen, setOpen] = useState(false);
  const isAutoDismiss = duration >= 0;
  const isDismissible = dismissible ? true : !isAutoDismiss;
  const isProgressShown = showProgress && duration >= 0;
  const classes = useStyles({ dismissible: isDismissible, severity });

  useEffect(() => {
    let timeout: number;

    if (!isOpen) {
      timeout = window.setTimeout(() => {
        setOpen(true);
      }, delay);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isOpen, delay]);

  useEffect(() => {
    if (isOpen && isAutoDismiss) {
      const timer = setTimeout(handleDismiss, duration);
      return () => clearInterval(timer);
    }
    // eslint-disable-next-line
  }, [isOpen]);

  const handleDismiss = () => {
    dismissNotification(id);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Slide in={true} direction="right">
      <Paper elevation={10} square className={classes.root}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pl={2}
        >
          {iconSeverityMap[severity]}
          <Box ml={2} mr={1}>
            <Typography className={classes.message} variant="subtitle2">
              {message}
            </Typography>
          </Box>
          <IconButton
            disabled={!isDismissible}
            onClick={handleDismiss}
            color="inherit"
          >
            <CloseIcon fontSize="small" className={classes.dismissIcon} />
          </IconButton>
        </Box>
        {isProgressShown && (
          <ProgressBar className={classes.progress} duration={duration} />
        )}
      </Paper>
    </Slide>
  );
}
