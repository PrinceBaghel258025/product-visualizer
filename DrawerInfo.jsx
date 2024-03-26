"use client";

import React from "react";
import { Header } from "./Header";
import { TextContent } from "./TextContent";
import { ImageContent } from "./ImageContent";
import { SocialLinks } from "./SocialLinks";
import { Image, Stack, Text, VStack } from "@chakra-ui/react";
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
      mt={"4rem"}
      mb={"2rem"}
      spacing={5}
    >
      <VStack alignItems={"start"} spacing={5}>
        <Header headerTitle={"Welcome to our Farm!"} />

        <TextContent
          headerTitle={"Assam"}
          textContent={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quam voluptatibus 
      recusandae ab architecto voluptatum, atque dicta sit assumenda? Aperiam aliquid perspiciatis expedita
       a recus`}
        />

        <ImageContent
          media={[
            "https://www.livelaw.in/h-upload/2023/02/08/457819-tea-garden-pti-assam1200x768.jpg",
            "https://www.shutterstock.com/image-photo/assam-tea-garden-grown-lowland-600nw-1250472067.jpg",
            "https://t3.ftcdn.net/jpg/03/10/89/56/360_F_310895608_nwdLX25mCtGxeEkZv4ijqstmPcMnFqVs.jpg",
          ]}
        />

        <TextContent
          headerTitle={"Tea Farm"}
          textContent={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quam voluptatibus 
      recusandae ab architecto voluptatum.`}
        />

        <BusinessPartner
          partner={[
            {
              id: 1,
              partner: "Ramu",
              img_url:
                "https://img.freepik.com/free-photo/transparent-leaf-with-orange-backlight_23-2148239756.jpg?t=st=1711361074~exp=1711364674~hmac=6af2cd64f6aebc9910a7d4e74cfb9a5fa569eca9e23530d820ee00caa929e149&w=740",
            },
            {
              id: 2,
              partner: "Ramu1",
              img_url:
                "https://img.freepik.com/free-photo/transparent-leaf-with-orange-backlight_23-2148239756.jpg?t=st=1711361074~exp=1711364674~hmac=6af2cd64f6aebc9910a7d4e74cfb9a5fa569eca9e23530d820ee00caa929e149&w=740",
            },
            {
              id: 3,
              partner: "Ramu2",
              img_url:
                "https://img.freepik.com/free-photo/transparent-leaf-with-orange-backlight_23-2148239756.jpg?t=st=1711361074~exp=1711364674~hmac=6af2cd64f6aebc9910a7d4e74cfb9a5fa569eca9e23530d820ee00caa929e149&w=740",
            },
            {
              id: 4,
              partner: "Ramu3",
              img_url:
                "https://img.freepik.com/free-photo/transparent-leaf-with-orange-backlight_23-2148239756.jpg?t=st=1711361074~exp=1711364674~hmac=6af2cd64f6aebc9910a7d4e74cfb9a5fa569eca9e23530d820ee00caa929e149&w=740",
            },
            {
              id: 5,
              partner: "Ramu4",
              img_url:
                "https://img.freepik.com/free-photo/transparent-leaf-with-orange-backlight_23-2148239756.jpg?t=st=1711361074~exp=1711364674~hmac=6af2cd64f6aebc9910a7d4e74cfb9a5fa569eca9e23530d820ee00caa929e149&w=740",
            },
            {
              id: 6,
              partner: "Ramu5",
              img_url:
                "https://img.freepik.com/free-photo/transparent-leaf-with-orange-backlight_23-2148239756.jpg?t=st=1711361074~exp=1711364674~hmac=6af2cd64f6aebc9910a7d4e74cfb9a5fa569eca9e23530d820ee00caa929e149&w=740",
            },
          ]}
        />

        <VideoContent
          media={[
            "https://360-images-v1.s3.ap-south-1.amazonaws.com/videos/Tea-Ad.mp4",
            "https://360-images-v1.s3.ap-south-1.amazonaws.com/videos/Tea-Ad.mp4",
            "https://360-images-v1.s3.ap-south-1.amazonaws.com/videos/Tea-Ad.mp4",
          ]}
        />

        <RedirectButton label={"Click Me!"} link={"https://www.google.com"} />
      </VStack>

      <VStack spacing={2}>
        <SocialLinks
          socialLinks={[
            {
              label: "Youtube",
              url: "https://www.youtube.com/",
              thumbnail:
                "https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147838801.jpg?t=st=1711425566~exp=1711429166~hmac=e195c6dccb08e984deb7d93544a1783f2b3bcb272c13890b8721f2d99ca97a12&w=740",
            },
            {
              label: "X",
              url: "https://www.x.com/",
              thumbnail:
                "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1711425428~exp=1711429028~hmac=739f76a4ad829b65cda048d73b6936df60db35b4db096d9bf8df26405487ccb4&w=740",
            },
          ]}
        />

        <Text
          display={"inline-flex"}
          alignItems={"center"}
          gap={3}
          w={"100%"}
          justifyContent={"center"}
          fontSize={10}
        >
          Powered by{" "}
          <Image
            h={"1rem"}
            src="https://360-images-v1.s3.ap-south-1.amazonaws.com/Logo_agspeak.png"
            alt=""
          />
        </Text>
      </VStack>
    </Stack>
  );
};
