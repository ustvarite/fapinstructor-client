import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import executeAction from "engine/executeAction";
import { ProxyStoreConsumer } from "containers/StoreProvider";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100vw",
    pointerEvents: "auto",
  },
});

const TriggerPanel = ({ classes }) => (
  <ProxyStoreConsumer>
    {({ engine }) => (
      <div className={classes.root}>
        {engine.actionTriggers &&
          engine.actionTriggers.map((trigger, index) => (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ margin: 10 }}
              key={index}
              onClick={() => executeAction(trigger)}
            >
              {trigger.label}
            </Button>
          ))}
      </div>
    )}
  </ProxyStoreConsumer>
);

export default withStyles(styles)(TriggerPanel);
