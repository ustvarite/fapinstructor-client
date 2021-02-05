import React from "react";
import store from "store";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import executeAction from "engine/executeAction";
import { ruinedOrgasm } from "game/actions/orgasm/ruin";
import punishment from "../game/actions/punishment";

const styles = () => ({
  root: {
    pointerEvents: "auto",
  },
});

class PersistentTriggerPanel extends React.Component {
  state = {
    ruinedOrgasmDisabled: false,
    edgeDisabled: false,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          style={{ opacity: 0.8, margin: 10 }}
          disabled={this.state.ruinedOrgasmDisabled}
          onClick={() => {
            this.setState({ ruinedOrgasmDisabled: true });
            executeAction(ruinedOrgasm, true).then(() => {
              this.setState({ ruinedOrgasmDisabled: false });
            });
          }}
        >
          Ruin
        </Button>
        <Button
          variant="contained"
          color="inherit"
          size="medium"
          style={{ opacity: 0.8, margin: 10 }}
          disabled={this.state.edgeDisabled}
          onClick={() => {
            this.setState({ edgeDisabled: true });
            store.game.edges++;
            executeAction(punishment, true).then(() => {
              this.setState({ edgeDisabled: false });
            });
          }}
        >
          Edge
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(PersistentTriggerPanel);
