import {
  Box,
  Flex,
  IconButton,
  Image,
  keyframes,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

const ScreenInfoCard = ({ data }) => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 1); }
  50% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`;

  return (
    <Box position={"relative"}>
      <Box
        as={motion.div}
        position={"absolute"}
        top={0}
        border={"1px solid white"}
        boxShadow={"0px 0px 15px 8px rgba(255,255,255,0.6)"}
        borderRadius={50}
        backgroundColor={"rgb(255,255,255,0.7)"}
        display={showUserInfo ? "flex" : "none"}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        onClick={() => {
          setShowUserInfo((prev) => !prev);
        }}
        sx={{
          animation: `${pulse} 2s infinite`,
        }}
      >
        <IoInformationCircleOutline fontSize={28} />
      </Box>

      {!showUserInfo && (
        <Flex
          as={motion.div}
          position={"absolute"}
          top={-50}
          left={"-2rem"}
          p={4}
          w={"17rem"}
          borderRadius={12}
          alignItems={"center"}
          gap={5}
          bg={"transparent"}
          overflowY={"auto"}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          onClick={() => {
            setShowUserInfo((prev) => !prev);
          }}
        >
          <Box
            w={"fit-content"}
            bg={"rgb(255, 255, 255, 0.8)"}
            p={4}
            borderRadius={10}
            fontWeight={500}
            fontSize={"small"}
          >
            <Text mb={0} fontSize={12}>
              {data?.info}
            </Text>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default ScreenInfoCard;
