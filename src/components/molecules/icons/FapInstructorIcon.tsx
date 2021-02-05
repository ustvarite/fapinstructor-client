import React, { FC } from "react";
import FapInstructorImage from "images/logo.svg";
import Image from "components/atoms/Image";
import Icon, { IconProps } from "components/atoms/Icon";

const FapInstructorIcon: FC<IconProps> = ({ size }) => {
  return (
    <Icon size={size}>
      <Image alt="Fap Instructor" src={FapInstructorImage} />
    </Icon>
  );
};

export default FapInstructorIcon;
