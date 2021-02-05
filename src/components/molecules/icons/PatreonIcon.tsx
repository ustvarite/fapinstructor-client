import React, { FC } from "react";
import Icon, { IconProps } from "components/atoms/Icon";
import Image from "components/atoms/Image";
import PatreonImage from "images/patreon.svg";

const PatreonIcon: FC<IconProps> = ({ size }) => {
  return (
    <Icon size={size}>
      <Image alt="Patreon" src={PatreonImage} />
    </Icon>
  );
};

export default PatreonIcon;
