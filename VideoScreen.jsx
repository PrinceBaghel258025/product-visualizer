import { Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { HeroSection } from "./HeroSection";

const VideoScreen = ({header, data, setIsInteracting }) => {
  const videoUrl = data?.find((info) => info?.type === "2d_video");

  return (
    <Box position={"relative"} w={"100dvw"} h={"100dvh"}>
      <Box>
        <video style={{ height: "100dvh", objectFit: 'fill' }}
          src={videoUrl?.image_url}
          // controls
          autoPlay
          loop
          muted
          playsInline
        />
      </Box>
      <HeroSection header={header} setIsBottomSheetOpen={(val) => setIsInteracting(!val)} data={data} isVideo />
    </Box>
  );
};

export default VideoScreen;
