"use client";

import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { HorizontalScrollWrapper } from "./generic/HorizontalScrollWrapper";

const VideoContent = ({ media }) => {
  const splitMedia = (media) => {
    const videos = media?.filter((item) => item.endsWith(".mp4"));
    return { videos };
  };

  const { videos } = splitMedia(media);
  return (
    <HorizontalScrollWrapper>
      {videos?.length === 1 ? (
        <Flex borderRadius={"1rem"}>
          <video
            style={{
              borderRadius: "0.5rem",
            }}
            src={videos[0]}
            autoPlay
            loop
            muted="true"
          />
          <Text w={"90vw"} />
        </Flex>
      ) : (
        <>
          {videos?.map((video) => (
            <Flex key={video} borderRadius={"1rem"}>
              <video
                style={{
                  borderRadius: "0.5rem",
                }}
                src={video}
                autoPlay
                loop
                muted="true"
              />
              <Text w={"16rem"} h={"9rem"} />
            </Flex>
          ))}
        </>
      )}
    </HorizontalScrollWrapper>
  );
};

export default VideoContent;
