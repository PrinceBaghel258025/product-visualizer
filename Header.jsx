import { Text } from "@chakra-ui/react";
import React from "react";

export const Header = ({ headerTitle }) => {
  return (
    <Text
      fontSize={"large"}
      fontWeight={"semibold"}
      position={"absolute"}
      top={7}
      bg={"white"}
      w={"100%"}
      py={1}
    >
      {headerTitle}
    </Text>
  );
};
