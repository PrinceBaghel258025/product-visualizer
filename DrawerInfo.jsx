"use client";

import React from "react";
import { Header } from "./Header";
import { TextContent } from "./TextContent";
import { ImageContent } from "./ImageContent";
import { SocialLinks } from "./SocialLinks";
import { Image, Stack, Text } from "@chakra-ui/react";
import RedirectButton from "./RedirectButton";
import VideoContent from "./VideoContent";
import { BusinessPartner } from "./BusinessPartner";

export const DrawerInfo = ({ data }) => {
  return (
    <Stack
      zIndex={100}
      p={3}
      overflowY={"scroll"}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      justifyContent={"space-between"}
      mt={"6.5rem"}
      spacing={5}
    >
      {data.map((item) =>
        item?.sphereInfo?.map((info) => {
          switch (info.type) {
            case "header":
              return <Header headerTitle={info.header_text} />;
            case "text_content":
              return <TextContent textContent={info.text_content} />;
            case "image_content":
              return <ImageContent media={info.image_urls} />;
            case "partners":
              return <BusinessPartner partner={info.partners} />;
            case "video_content":
              return <VideoContent media={info.video_urls} />;
            case "redirect_url":
              return <RedirectButton link={info.link} />;
            case "social_links":
              return <SocialLinks socialLinks={info.social_links} />;
            default:
              return null;
          }
        })
      )}

      <Text
        display={"inline-flex"}
        alignItems={"center"}
        gap={2}
        w={"100%"}
        justifyContent={"center"}
        fontSize={10}
      >
        Powered by
        <a href="https://agspert.com/" target="_blank">
          <Image
            h={"1rem"}
            src="https://360-images-v1.s3.ap-south-1.amazonaws.com/Logo_agspeak.png"
            alt=""
          />
        </a>
      </Text>
    </Stack>
  );
};
