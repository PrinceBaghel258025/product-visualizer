import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const ImageScreen = ({ data }) => {
  return (
    <Stack backgroundColor={"red"}>
      <Text>{data?.type}</Text>
    </Stack>
  );
};

export default ImageScreen;
