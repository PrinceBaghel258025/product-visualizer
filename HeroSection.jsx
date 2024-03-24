"use client";

import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { DrawerInfo } from "./DrawerInfo";
import { GoInfo } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import { HiMiniXMark } from "react-icons/hi2";
import DraggableDrawer from "./generic/DraggableDrawer";

export const HeroSection = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [heartLiked, setHeartLiked] = useState(false);

  //   const pulse = keyframes`
  //   0% { box-shadow: 0 0 0 0 rgba(0, 184, 148, 0.7); }
  //   50% { box-shadow: 0 0 0 15px rgba(0, 184, 148, 0); }
  //   100% { box-shadow: 0 0 0 0 rgba(0, 184, 148, 0); }
  // `;

  return (
    <>
      <VStack position={"absolute"} top={10} right={5} spacing={3}>
        {/* <IconButton
          borderRadius={50}
          onClick={onOpen}
          icon={
            <GoInfo size={24} />
            // <HiMiniXMark size={24} />
          }
          bg={"white"}
          color={"green"}
          sx={{
            animation: `${pulse} 2s infinite`,
          }}
        />

        <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerInfo />
          </DrawerContent>
        </Drawer> */}

        <IconButton
          onClick={() => setHeartLiked((prev) => !prev)}
          icon={heartLiked ? <FaHeart size={22} /> : <FaRegHeart size={22} />}
          color={"red"}
          borderRadius={50}
        />
      </VStack>
      <DraggableDrawer>
        <DrawerInfo />
      </DraggableDrawer>
    </>
  );
};
