"use client";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { DrawerInfo } from "./DrawerInfo";
import { GoInfo } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from "react";

export const DraggableDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [heartLiked, setHeartLiked] = useState(false);

  return (
    <>
      <VStack position={"absolute"} top={5} right={5} spacing={3}>
        <IconButton
          borderRadius={50}
          onClick={onOpen}
          icon={<GoInfo size={24} />}
        />

        <IconButton
          onClick={() => setHeartLiked((prev) => !prev)}
          icon={heartLiked ? <FaHeart size={22} /> : <FaRegHeart size={22} />}
          color={"red"}
          borderRadius={50}
        />
      </VStack>

      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerInfo />
        </DrawerContent>
      </Drawer>
    </>
  );
};
