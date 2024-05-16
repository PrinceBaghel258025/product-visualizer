"use client";

import { Icon, IconButton, VStack } from "@chakra-ui/react";
import { DrawerInfo } from "./DrawerInfo";
import { FiExternalLink } from "react-icons/fi";
import DraggableDrawer from "./generic/DraggableDrawer";
import { TbView360Number } from "react-icons/tb";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

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
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const iconTimer = setTimeout(() => {
      setShowIcon(false);
    }, 8000);

    return () => {
      clearTimeout(iconTimer);
    };
  }, []);

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
          as={TbView360Number}
          color={"#ffffff"}
          position={"absolute"}
          top={"20%"}
          right={"25%"}
          fontSize={"12rem"}
          zIndex={"100000000"}
        />
      )}

      <DraggableDrawer data={data}>
        <DrawerInfo data={data} />
      </DraggableDrawer>
    </>
  );
};
