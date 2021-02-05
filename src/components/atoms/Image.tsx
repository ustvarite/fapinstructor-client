import React, { FC } from "react";

export interface ImageProps {
  alt: string;
  src: string;
}

const Image: FC<ImageProps> = ({ alt, src }) => {
  return (
    <img
      style={{ objectFit: "contain", width: "100%", height: "100%" }}
      alt={alt}
      src={src}
    />
  );
};

export default Image;
