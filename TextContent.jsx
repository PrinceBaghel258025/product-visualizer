import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export const TextContent = ({ headerTitle, textContent }) => {
  return (
    <Stack>
      <Text fontSize={"medium"}>{headerTitle}</Text>

      <Text fontSize={"small"} align={"justify"}>
        {textContent}
      </Text>
    </Stack>
  );
};
