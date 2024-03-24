import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export const TextContent = ({ headerTitle, textContent }) => {
  return (
    <Stack spacing={1}>
      <Text fontSize={"medium"} fontWeight={500}>
        {headerTitle}
      </Text>

      <Text fontSize={"small"} align={"justify"}>
        {textContent}
      </Text>
    </Stack>
  );
};
