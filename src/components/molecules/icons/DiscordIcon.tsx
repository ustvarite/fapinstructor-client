import React, { FC } from "react";
import DiscordImage from "images/discord.svg";
import Image from "components/atoms/Image";
import Icon, { IconProps } from "components/atoms/Icon";

const DiscordIcon: FC<IconProps> = ({ size }) => {
  return (
    <Icon size={size}>
      <Image alt="Discord" src={DiscordImage} />
    </Icon>
  );
};

export default DiscordIcon;
