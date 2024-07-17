import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { HeroSection } from "./HeroSection";

const ImageScreen = ({ data }) => {
  const imageUrl = data?.find((info) => info?.type === "2d_image");
  return (
    <Box position={"relative"} w={"100vw"} h={"100vh"}>
      <Box
        backgroundImage={imageUrl?.image_url}
        backgroundSize={"cover"}
        backgroundColor={"pink"}
        height={"100%"}
        width={"100%"}
      ></Box>
      <HeroSection data={data} />
    </Box>
  );
};

export default ImageScreen;
