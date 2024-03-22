"use client";

import React from "react";
import { Header } from "./Header";
import { TextContent } from "./TextContent";
import { MediaContent } from "./MediaContent";
import { SocialLinks } from "./SocialLinks";
import { Image, Stack, Text, VStack } from "@chakra-ui/react";

export const DrawerInfo = () => {
  return (
    <Stack
      h={"80vh"}
      zIndex={100}
      p={3}
      overflowY={"scroll"}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      justifyContent={"space-between"}
      mb={10}
    >
      <VStack alignItems={"start"}>
        <Header headerTitle={"Welcome to our Farm!"} />

        <TextContent
          headerTitle={"Assam"}
          textContent={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quam voluptatibus 
      recusandae ab architecto voluptatum, atque dicta sit assumenda? Aperiam aliquid perspiciatis expedita
       a recus`}
        />

        <MediaContent
          media={[
            "https://www.livelaw.in/h-upload/2023/02/08/457819-tea-garden-pti-assam1200x768.jpg",
            "https://www.shutterstock.com/image-photo/assam-tea-garden-grown-lowland-600nw-1250472067.jpg",
            "https://t3.ftcdn.net/jpg/03/10/89/56/360_F_310895608_nwdLX25mCtGxeEkZv4ijqstmPcMnFqVs.jpg",
            "https://pyt-blogs.imgix.net/2020/05/49727809908_a769f2d7c3_k.jpg?auto=format&fit=scale&h=578&ixlib=php-3.3.0&w=1024&wpsize=large",
            "https://www.livelaw.in/h-upload/2023/02/08/457819-tea-garden-pti-assam1200x768.jpg",
            "https://www.shutterstock.com/image-photo/assam-tea-garden-grown-lowland-600nw-1250472067.jpg",
            "https://t3.ftcdn.net/jpg/03/10/89/56/360_F_310895608_nwdLX25mCtGxeEkZv4ijqstmPcMnFqVs.jpg",
            "https://pyt-blogs.imgix.net/2020/05/49727809908_a769f2d7c3_k.jpg?auto=format&fit=scale&h=578&ixlib=php-3.3.0&w=1024&wpsize=large",
          ]}
        />

        <TextContent
          headerTitle={"Tea Farm"}
          textContent={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quam voluptatibus 
      recusandae ab architecto voluptatum.`}
        />
        <MediaContent
          media={[
            "https://pyt-blogs.imgix.net/2020/05/49727809908_a769f2d7c3_k.jpg?auto=format&fit=scale&h=578&ixlib=php-3.3.0&w=1024&wpsize=large",
          ]}
        />
      </VStack>

      <VStack>
        <SocialLinks
          socialLinks={[
            "https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg",
            "https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg",
            "https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg",
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
