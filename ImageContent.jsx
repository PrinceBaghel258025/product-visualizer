"use client";

import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageContent = ({ media }) => {
  const splitMedia = (media) => {
    const images = media?.filter((item) => !item.endsWith(".mp4"));
    return { images };
  };

  const { images } = splitMedia(media);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      {images?.length === 1 ? (
        <Image w={"100%"} borderRadius={8} src={images[0]} />
      ) : (
        <HStack as={Slider} {...settings} width={"100%"} my={3}>
          {images?.map((img) => (
            <Image key={img} borderRadius={8} src={img} />
          ))}
        </HStack>
      )}
    </>
  );
};
