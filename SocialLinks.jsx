import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

export const SocialLinks = ({ socialLinks }) => {
  return (
    <Flex justifyContent={"center"} gap={1}>
      {socialLinks?.map((link) => (
        <Box key={link} w={"2rem"} h={"2rem"}>
          <Image borderRadius={100} w={"100%"} h={"100%"} src={link} />
        </Box>
      ))}
    </Flex>
  );
};
