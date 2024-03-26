import { Image } from "@chakra-ui/react";
import React from "react";

export const BrandBanner = ({ data }) => {
  const brandBanner = data[0].sphereInfo.find(
    (info) => info.type === "brand_banner"
  );

  return (
    <Image
      src={brandBanner?.brand_banner}
      position={"absolute"}
      top={0}
      left={0}
      borderTopRightRadius={"18px"}
      borderTopLeftRadius={"18px"}
      zIndex={10}
    />
  );
};
