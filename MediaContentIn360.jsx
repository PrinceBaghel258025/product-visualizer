import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import UserProfile from "../../public/farmer.jpg";

const MediaContentIn360 = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  return (
    <Html position={[-50, -5, 50]}>
      <Box position={"relative"}>
        <Box
          as={motion.div}
          position={"absolute"}
          top={0}
          border={"1px solid white"}
          boxShadow={"0px 0px 15px 8px rgba(255,255,255,0.6)"}
          borderRadius={50}
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
        >
          <Image
            src={UserProfile}
            style={{
              height: "2rem",
              width: "2rem",
              borderRadius: "25rem",
            }}
            onClick={() => {
              setShowUserInfo((prev) => !prev);
            }}
            alt="person image"
          />

          <Text w={"2rem"} />
        </Box>

        {!showUserInfo && (
          <Flex
            as={motion.div}
            position={"absolute"}
            top={-90}
            left={"-7.5rem"}
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
            <Image
              src={UserProfile}
              style={{
                height: "5rem",
                width: "5rem",
                borderRadius: "25rem",
              }}
              alt="person image"
            />

            <Box
              w={"fit-content"}
              bg={"rgb(255, 255, 255, 0.8)"}
              p={8}
              borderRadius={10}
              fontWeight={500}
              fontSize={"small"}
            >
              <Text>Name: Sailen Phukan </Text>
              <Text>Age: 45 Years </Text>
              <Text>Location: GP Tea Farm</Text>
            </Box>
          </Flex>
        )}
      </Box>
    </Html>
  );
};

export default MediaContentIn360;
