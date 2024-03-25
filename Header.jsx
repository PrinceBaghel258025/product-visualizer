import { Text } from "@chakra-ui/react";
import React from "react";

export const Header = ({ headerTitle }) => {
  return (
    <Text fontSize={"large"} fontWeight={"semibold"} w={"100%"} bg={"white"}>
      {headerTitle}
    </Text>
  );
};
