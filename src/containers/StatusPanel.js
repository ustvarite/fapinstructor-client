import React from "react";
// mui
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import DownIcon from "@material-ui/icons/ArrowDropDown";
import UpIcon from "@material-ui/icons/ArrowDropUp";
// internal
import elapsedGameTime from "game/utils/elapsedGameTime";
import { GripStrengthString } from "game/enums/GripStrength";
import { StrokeStyleString } from "game/enums/StrokeStyle";
import logo from "images/logo.svg";
import store from "store";
import { ProxyStoreConsumer } from "containers/StoreProvider";

const styles = (theme) => ({
  root: {
    padding: 5,
    background: "rgba(0, 0, 0, 0.6)",
    pointerEvents: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  labels: {
    display: "flex",
  },
  toggle: {
    color: "white",
  },
});

const Label = ({ value }) => (
  <Typography color="secondary" variant="body2">
    {value}
  </Typography>
);

class StatusPanel extends React.Component {
  state = {
    open: true,
  };

  handleCheckChange = (name) => (event, checked) => {
    try {
      localStorage.setItem(name, checked);
    } catch (e) {
      // local storage may not be supported on some devices
    }
    store[name] = checked;
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Button
            color="inherit"
            style={{ textTransform: "none", width: "100%" }}
            onClick={() => this.setState({ open: !open })}
          >
            <img style={{ width: 25, marginRight: 10 }} src={logo} alt="Logo" />
            <Typography color="inherit" variant="body2">
              Fap Instructor
            </Typography>
            {open ? <DownIcon /> : <UpIcon />}
          </Button>
        </div>
        {open && (
          <ProxyStoreConsumer>
            {({
              game: {
                gripStrength,
                strokeStyle,
                buttPlugInserted,
                rubberBands,
                clothespins,
                cockAndBallsBound,
                edges,
                ruins,
                orgasms,
              },
              enableVoice,
              enableMoans,
              enableTicks,
              enableBeatMeter,
              videoMuted,
            }) => (
              <div>
                <div className={classes.labels}>
                  <div style={{ marginRight: 10 }}>
                    <Label value="Elapsed Time (min)" />
                    <Label value="Stroke Grip" />
                    <Label value="Stroke Style" />
                    {buttPlugInserted && <Label value="Butt Plug" />}
                    {rubberBands > 0 && <Label value="Rubberbands" />}
                    {clothespins > 0 && <Label value="Clothepins" />}
                    {cockAndBallsBound && <Label value="Cock & Balls" />}
                    {edges > 0 && <Label value="Edges" />}
                    {ruins > 0 && <Label value="Ruins" />}
                    {orgasms > 0 && <Label value="Orgasms" />}
                  </div>
                  <div>
                    <Label value={elapsedGameTime("minutes")} />
                    <Label value={GripStrengthString[gripStrength]} />
                    <Label value={StrokeStyleString[strokeStyle]} />
                    {buttPlugInserted && <Label value="Inserted" />}
                    {rubberBands > 0 && <Label value={rubberBands} />}
                    {clothespins > 0 && <Label value={clothespins} />}
                    {cockAndBallsBound && <Label value="Bound" />}
                    {edges > 0 && <Label value={edges} />}
                    {ruins > 0 && <Label value={ruins} />}
                    {orgasms > 0 && <Label value={orgasms} />}
                  </div>
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={enableVoice}
                        onChange={this.handleCheckChange("enableVoice")}
                        value="enableVoice"
                      />
                    }
                    classes={{
                      label: classes.toggle,
                    }}
                    label="Voice"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={enableMoans}
                        onChange={this.handleCheckChange("enableMoans")}
                        value="enableMoans"
                      />
                    }
                    classes={{
                      label: classes.toggle,
                    }}
                    label="Moans"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={videoMuted}
                        onChange={this.handleCheckChange("videoMuted")}
                        value="videoMuted"
                      />
                    }
                    classes={{
                      label: classes.toggle,
                    }}
                    label="Mute Videos"
                  />
                  <div>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={enableTicks}
                          onChange={this.handleCheckChange("enableTicks")}
                          value="enableTicks"
                        />
                      }
                      classes={{
                        label: classes.toggle,
                      }}
                      label="Metronome"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={enableBeatMeter}
                          onChange={this.handleCheckChange("enableBeatMeter")}
                          value="enableBeatMeter"
                        />
                      }
                      classes={{
                        label: classes.toggle,
                      }}
                      label="Beat Meter"
                    />
                  </div>
                </div>
              </div>
            )}
          </ProxyStoreConsumer>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(StatusPanel);
