"use client";

import { Image } from "@chakra-ui/react";
import React from "react";
import { HorizontalScrollWrapper } from "./generic/HorizontalScrollWrapper";

export const MediaContent = ({ media }) => {
  return (
    <HorizontalScrollWrapper>
      {media?.length === 1 ? (
        <Image w={"100%"} h={"100%"} borderRadius={8} src={media[0]} />
      ) : (
        media?.map((img) => (
          <Image h={"8rem"} w={"100%"} borderRadius={8} src={img} />
        ))
      )}
    </HorizontalScrollWrapper>
  );
};
