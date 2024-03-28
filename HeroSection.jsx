"use client";

import { IconButton, VStack } from "@chakra-ui/react";
import { DrawerInfo } from "./DrawerInfo";
import { FiExternalLink } from "react-icons/fi";
import DraggableDrawer from "./generic/DraggableDrawer";

export const HeroSection = ({ data }) => {
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

      <DraggableDrawer data={data}>
        <DrawerInfo data={data} />
      </DraggableDrawer>
    </>
  );
};
