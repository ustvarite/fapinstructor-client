import React, { useEffect } from "react";
import { Story, Meta } from "@storybook/react";
import { strokeEmitterObservable } from "game/loops/strokeEmitter";

import BeatMeter, { BeatMeterProps } from "./BeatMeter";
import { CircleFlash, Circle, Dot, HR, Bar } from "./styled-components";

export default {
  title: "organisms/BeatMeter",
  component: BeatMeter,
} as Meta;

const Template: Story<BeatMeterProps> = (args) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (strokeEmitterObservable) {
        strokeEmitterObservable.notify({
          type: "emit",
          strokeTime: Date.now(),
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return <BeatMeter {...args} />;
};

export const RandomBeats = Template.bind({});
RandomBeats.args = {
  strokeEmitterObservable,
};

export const StandardDot = () => <Dot />;

export const StandardHR = () => <HR />;

export const StandardCircle = () => <Circle />;

export const StandardFlash = () => <CircleFlash />;

export const StandardBar = () => <Bar />;
