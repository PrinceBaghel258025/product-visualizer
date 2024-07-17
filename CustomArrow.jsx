import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomPrevArrow = ({ onClick, isVisible }) => {
  return (
    <IconButton
      icon={<FaArrowLeft />}
      onClick={onClick}
      position="absolute"
      top="50%"
      left="10px"
      transform="translateY(-50%)"
      zIndex={1}
      aria-label="Previous Slide"
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease"
    />
  );
};

const CustomNextArrow = ({ onClick, isVisible }) => {
  return (
    <IconButton
      icon={<FaArrowRight />}
      onClick={onClick}
      position="absolute"
      top="50%"
      right="10px"
      transform="translateY(-50%)"
      zIndex={1}
      aria-label="Next Slide"
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease"
    />
  );
};

export { CustomPrevArrow, CustomNextArrow };
