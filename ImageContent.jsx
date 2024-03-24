"use client";

import { Image } from "@chakra-ui/react";
import React from "react";
import { HorizontalScrollWrapper } from "./generic/HorizontalScrollWrapper";

export const ImageContent = ({ media }) => {
  const splitMedia = (media) => {
    const images = media?.filter((item) => !item.endsWith(".mp4"));
    return { images };
  };

  const { images } = splitMedia(media);

  return (
    <>
      <HorizontalScrollWrapper>
        {images?.length === 1 ? (
          <Image w={"90vw"} borderRadius={8} src={images[0]} />
        ) : (
          images?.map((img) => <Image h={"9rem"} borderRadius={8} src={img} />)
        )}
      </HorizontalScrollWrapper>
    </>
  );
};
