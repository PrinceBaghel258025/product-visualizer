import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ImageScreen = ({ data }) => {
  const imageUrl = data?.find((info) => info?.type === "2d_image");
  return (
    <Stack
      position={"absolute"}
      top={0}
      w={"100vw"}
      h={"100%"}
      backgroundImage={imageUrl?.image_url}
      backgroundSize={"cover"}
    ></Stack>
  );
};

export default ImageScreen;
