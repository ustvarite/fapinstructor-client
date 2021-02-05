import React, { FC, ReactNode } from "react";
import Typography from "@material-ui/core/Typography";

export interface GroupProps {
  title: string;
  children: ReactNode;
}

const Group: FC<GroupProps> = ({ title, children }) => (
  <div style={{ marginBottom: 30 }}>
    <div style={{ marginBottom: 15 }}>
      <Typography variant="h6" color="primary">
        {title}
      </Typography>
    </div>
    <div>{children}</div>
  </div>
);

export default Group;
