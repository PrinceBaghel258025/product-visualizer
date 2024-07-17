import { Stack } from "@chakra-ui/react";
import React from "react";

const VideoScreen = ({ data }) => {
  const videoUrl = data?.find((info) => info?.type === "2d_video");
  return (
    <Stack position={"absolute"} top={0} w={"100vw"} h={"100%"}>
      <video
        src={videoUrl?.image_url}
        controls
        autoPlay
        loop
        muted
        playsInline
      />
    </Stack>
  );
};

export default VideoScreen;
