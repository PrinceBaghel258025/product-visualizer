import { Image } from "@chakra-ui/react";
import React from "react";

export const BrandBanner = () => {
  return (
    <Image
      src="https://360-images-v1.s3.ap-south-1.amazonaws.com/Woolah_banner2.webp"
      position={"absolute"}
      top={0}
      left={0}
      borderTopRightRadius={"18px"}
      borderTopLeftRadius={"18px"}
      zIndex={10}
    />
  );
};
