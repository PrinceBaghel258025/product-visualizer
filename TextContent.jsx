import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export const TextContent = ({ textContent }) => {
  return (
    <>
      <Stack spacing={1}>
        <Text fontSize={"medium"} ftextContentontWeight={500}>
          {textContent?.name}
        </Text>

        <Text fontSize={"small"} align={"justify"}>
          {textContent?.content}
        </Text>
      </Stack>
    </>
  );
};
