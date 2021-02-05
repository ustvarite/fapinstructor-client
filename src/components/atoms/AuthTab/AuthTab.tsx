import React, { FC } from "react";
import { useAuth0 } from "AuthProvider";
import { Tab, TabProps, Tooltip } from "@material-ui/core";

export type AuthTabProps = TabProps;

const AuthTab: FC<TabProps> = ({ ...props }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Tooltip
      title="Please login"
      disableFocusListener={isAuthenticated}
      disableHoverListener={isAuthenticated}
      disableTouchListener={isAuthenticated}
    >
      <span>
        <Tab disabled={!isAuthenticated} {...props} />
      </span>
    </Tooltip>
  );
};

export default AuthTab;
