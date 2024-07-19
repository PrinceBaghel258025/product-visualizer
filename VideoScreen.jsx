import { Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { HeroSection } from "./HeroSection";

const VideoScreen = ({ data }) => {
  const videoUrl = data?.find((info) => info?.type === "2d_video");

  return (
    <Box position={"relative"} w={"100dvw"} h={"100dvh"}>
      <Box>
        <video
          src={videoUrl?.image_url}
          // controls
          autoPlay
          loop
          muted
          playsInline
        />
      </Box>
      <HeroSection data={data} isVideo />
    </Box>
  );
};

export default VideoScreen;
