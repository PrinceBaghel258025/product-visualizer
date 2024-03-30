"use client";

import { Flex, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { DrawerInfo } from "./DrawerInfo";
import { FiExternalLink } from "react-icons/fi";
import DraggableDrawer from "./generic/DraggableDrawer";
import { Tb360View } from "react-icons/tb";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Image from "next/image";
import AgSpeakLogo from "../../public/agspeak_logo.png";

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const IconWithAnimation = styled(Icon)`
  animation: ${blink} 1.3s linear infinite;
  animation-delay: 2s;
`;

export const HeroSection = ({ data }) => {
  const [display, setDisplay] = useState("flex");
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const iconTimer = setTimeout(() => {
      setShowIcon(false);
    }, 8000);

    const splashScreenTimer = setTimeout(() => {
      setDisplay("none");
    }, 1500);

    return () => {
      clearTimeout(iconTimer);
      clearTimeout(splashScreenTimer);
    };
  }, []);

  useEffect(() => {}, []);
  return (
    <>
      <VStack position={"absolute"} top={10} right={5} spacing={3}>
        <a
          href="https://woolahtea.com/products/rare-assam-green-tea"
          target="_blank"
        >
          <IconButton
            icon={<FiExternalLink size={20} />}
            color={"black"}
            borderRadius={50}
            bg={"whiteAlpha.800"}
          />
        </a>
      </VStack>

      {showIcon && (
        <IconWithAnimation
          as={Tb360View}
          color={"#ffffff"}
          position={"absolute"}
          top={"20%"}
          right={"25%"}
          fontSize={"12rem"}
          zIndex={"100000000"}
        />
      )}

      {/* Splash screen */}
      <Flex
        backgroundColor={"#00B894"}
        h={"100vh"}
        w={"100vw"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        position={"absolute"}
        top={0}
        left={0}
        display={display}
        zIndex={"1000000000"}
      >
        <Image src={AgSpeakLogo} width={250} />

        <Text position={"absolute"} bottom={65} color={"white"} fontSize={15}>
          © AgSpert Technologies Pvt. Ltd.
        </Text>
      </Flex>

      <DraggableDrawer data={data}>
        <DrawerInfo data={data} />
      </DraggableDrawer>
    </>
  );
};
