import { HStack, Text } from "@chakra-ui/react";
import React from "react";

export const Header = ({ headerTitle, headerFontSize, headerAlign }) => {
  const size =
    headerFontSize === "small"
      ? "small"
      : headerFontSize === "large"
      ? "large"
      : "medium";

  const textPosition =
    headerAlign === "center"
      ? "center"
      : headerAlign === "end"
      ? "end"
      : "start";

  return (
    <HStack justifyContent={textPosition}>
      <Text fontSize={size}>{headerTitle}</Text>
    </HStack>
  );
};
