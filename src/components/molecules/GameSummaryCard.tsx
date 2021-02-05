import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import Group from "components/molecules/Group";
import Tags from "components/molecules/Tags";
import Game from "common/types/Game";

export interface GameSummaryCardProps {
  game: Game;
}

const GameSummaryCard: FC<GameSummaryCardProps> = ({ game }) => {
  return (
    <Group title="Game Summary">
      <Typography variant="h6" gutterBottom>
        {game.title}
      </Typography>
      <Typography variant="body1">Game Length</Typography>
      <Typography variant="body2" gutterBottom>
        {game.config.minimumGameTime}-{game.config.maximumGameTime} min
      </Typography>
      {game.tags && game.tags.length > 0 && (
        <>
          <Typography variant="body1">Tags</Typography>
          <Tags tags={game.tags} />
        </>
      )}
    </Group>
  );
};

export default GameSummaryCard;
