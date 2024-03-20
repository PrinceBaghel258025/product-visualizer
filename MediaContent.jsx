"use client";

import { Image } from "@chakra-ui/react";
import React from "react";
import { HorizontalScrollWrapper } from "./generic/HorizontalScrollWrapper";

export const MediaContent = ({ media }) => {
  return (
    <HorizontalScrollWrapper>
      {media?.length === 1 ? (
        <Image src={media[0]} />
      ) : (
        media?.map((img) => <Image w={"85%"} key={img} src={img} />)
      )}
    </HorizontalScrollWrapper>
  );
};
