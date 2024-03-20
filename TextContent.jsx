import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";

export const TextContent = ({
  textFontSize,
  textAlign,
  headerTitle,
  headerFontSize,
  headerAlign,
  textContent,
}) => {
  const size =
    textFontSize === "medium"
      ? "medium"
      : textFontSize === "large"
      ? "large"
      : "small";

  const textContentAlign =
    textAlign === "center" ? "center" : textAlign === "end" ? "end" : "start";

  return (
    <Stack>
      <Header
        headerTitle={headerTitle}
        headerFontSize={headerFontSize}
        headerAlign={headerAlign}
      />

      <Text fontSize={size} align={textContentAlign}>
        {textContent}
      </Text>
    </Stack>
  );
};
