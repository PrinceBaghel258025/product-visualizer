"use client";

import { IconButton, VStack } from "@chakra-ui/react";
import { DrawerInfo } from "./DrawerInfo";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from "react";
import DraggableDrawer from "./generic/DraggableDrawer";

export const HeroSection = () => {
  const [heartLiked, setHeartLiked] = useState(false);

  return (
    <>
      <VStack position={"absolute"} top={10} right={5} spacing={3}>
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
