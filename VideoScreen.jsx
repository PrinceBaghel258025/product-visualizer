import { Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { HeroSection } from "./HeroSection";
import { useInView } from 'react-intersection-observer';
import { LoadingBox } from "./Scene";

const VideoScreen = ({ header, data, setIsInteracting }) => {
  const videoUrl = data?.find((info) => info?.type === "2d_video");
  const { ref, inView } = useInView({
    threshold: 0.6, onChange: (inView, entry) => {
      console.log("value of changing view", header, inView, entry)
    }
    // triggerOnce: true, // Only trigger once for optimization
  });

  return (
    <Box ref={ref} position={"relative"} w={"100dvw"} h={"100dvh"}>
      {inView ? <>
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
      </> : <LoadingBox />
      }
    </Box>
  );
};

export default VideoScreen;
