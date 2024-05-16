import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";

const MediaContentIn360 = ({ data }) => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  return (
    <Html position={[-50, -5, 50]}>
      <Box position={"relative"}>
        {data?.farmer_info?.image ? (
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
              src={data?.farmer_info?.image}
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
        ) : null}

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
            {data?.farmer_info?.image ? (
              <Image
                src={data?.farmer_info?.image}
                style={{
                  height: "5rem",
                  width: "5rem",
                  borderRadius: "25rem",
                }}
                alt="person image"
              />
            ) : null}

            <Box
              w={"fit-content"}
              bg={"rgb(255, 255, 255, 0.8)"}
              p={8}
              borderRadius={10}
              fontWeight={500}
              fontSize={"small"}
            >
              {data?.farmer_info?.name ? (
                <Text>Name: {data?.farmer_info?.name} </Text>
              ) : null}

              {data?.farmer_info?.age ? (
                <Text>Age: {data?.farmer_info?.age} Years </Text>
              ) : null}

              {data?.farmer_info?.location ? (
                <Text>Location: {data?.farmer_info?.location}</Text>
              ) : null}
            </Box>
          </Flex>
        )}
      </Box>
    </Html>
  );
};

export default MediaContentIn360;
