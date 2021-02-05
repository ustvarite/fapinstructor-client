import React, { FC } from "react";
import { Button } from "@material-ui/core";
import NodeRow from "components/templates/NodeRow";
import BackToConfigButton from "components/molecules/buttons/BackToConfigButton";

export interface SoloGameCardProps {
  onStart: () => void;
}

const SoloGameCard: FC<SoloGameCardProps> = ({ onStart }) => {
  return (
    <>
      <NodeRow>
        <Button onClick={onStart} variant="contained" color="secondary">
          start game
        </Button>
        <BackToConfigButton />
      </NodeRow>
    </>
  );
};

export default SoloGameCard;
