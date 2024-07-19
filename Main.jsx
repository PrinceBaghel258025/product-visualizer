"use client";

import { Stack, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useGetProduct } from "../apiHooks/useGetProduct";
import { SplashScreen } from "./generic/SplashScreen";
import ErrorImage from "../../public/404_error.jpg";
import Image from "next/image";
import CarouselComponent from "./CarouselComponent";
const dummyData = [
  [
    {
      id: 1,
      type: "360_video",
      image_url:
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/test_360video.mp4",
    },
    {
      id: 2,
      type: "text_content",
      text_content: {
        name: "Subscribe",
        content: "You can subscribe to AgSpeak to display content!",
      },
    },
  ],
  [
    {
      id: 1,
      type: "360_image",
      image_url: "https://360-images-v1.s3.ap-south-1.amazonaws.com/1.jpg",
      farmer_info: {
        age: 45,
        name: "Sailen Phukan",
        image:
          "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/360_media/farmer.jpg",
        location: "GP Tea Farm",
      },
    },
    {
      id: 2,
      type: "text_content",
      text_content: {
        name: "Wondering what you just saw?",
        content:
          "You can see the exact tea garden from where the box in your hand was processed! That is how transparent we are about our minimally hand processed tea!",
      },
    },
    {
      id: 3,
      type: "image_content",
      image_urls: [
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/images/Woolah+farm+(1).jpeg",
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/images/Woolah+farm+(2).jpeg",
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/images/Woolah+farm+(3).jpeg",
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/images/Woolah+farm+(5).jpeg",
      ],
    },
    {
      id: 4,
      type: "text_content",
      text_content: {
        name: "What makes the tea box in your hand so special?",
        content:
          "Woolah TrueDips is nothing like you have ever tasted or experienced. Woolah TrueDips is the World’s First Bagless Tea, which in the shape of a tablet locks in the most authentic and exotic Assam tea flavours you have ever tasted.",
      },
    },
    {
      id: 5,
      type: "video_content",
      video_urls: [
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/videos/WOOLAH+TEA+FEATURE_+THE+PLATE+-+upamanyu+borkakoty.mp4",
      ],
    },
    {
      id: 6,
      type: "text_content",
      text_content: {
        name: "‘Source transparency’ for you, the consumer:",
        content:
          "In the heart of Woolah is a meticulously curated value chain which provides gainful earning sources to organically grown micro tea farm owners, tea workers, packaging specialists. It has also delegated women workers to participate and earn a livelihood for themselves. \n              Woolah also contributes towards funding quality education for the children of tea workers. The idea is to empower our smallholder tea growers with more visibility, while keeping our sourcing 100% transparent for our consumers!\n              ",
      },
    },
    {
      id: 7,
      type: "header",
      header_text: "Our Team",
    },
    {
      id: 8,
      type: "image_content",
      image_urls: [
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/images/Woolah+farm+(4).jpeg",
      ],
    },
    {
      type: "brand_banner",
      brand_banner:
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/Woolah_banner2.webp",
    },
    {
      link: {
        url: "https://woolahtea.com/products/rare-assam-green-tea",
        label: "View Product",
      },
      type: "redirect_url",
    },
    {
      type: "social_links",
      social_links: [
        {
          url: "https://www.youtube.com/@woolahtea",
          label: "Youtube",
          thumbnail:
            "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/social_icons/youtube.png",
        },
        {
          url: "https://www.facebook.com/WoolahTea/",
          label: "Facebook",
          thumbnail:
            "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/social_icons/facebook.png",
        },
        {
          url: "https://www.instagram.com/be_woolah/",
          label: "Instagram",
          thumbnail:
            "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/social_icons/instagram.png",
        },
      ],
    },
  ],
];

export const Main = () => {
  const searchParams = useSearchParams();

  let urlProductId;
  let urlEnterpriseName;

  if (typeof window !== "undefined") {
    // Product Id
    urlProductId = searchParams.get("id");
    // Enterprise name
    urlEnterpriseName = window.location.hostname.split(".")[0];
  }

  console.log("SEARCH: ", urlEnterpriseName, "Product: ", urlProductId);

  // Fake Data
  const productId = 32;
  const enterpriseName = "kvkdt";

  const {
    data: productData,
    isPending,
    isSuccess,
  } = useGetProduct({
    productId: productId,
    enterpriseName: enterpriseName,
  });

  console.log("productData: ", productData);

  return (
    <>
      {isPending ? (
        <SplashScreen />
      ) : isSuccess ? (
        <CarouselComponent productData={productData} />
      ) : (
        <Error404 />
      )}
    </>
  );
};

const Error404 = () => {
  return (
    <Stack
      h={"100vh"}
      w={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image src={ErrorImage} alt="logo" width={250} />
      <Text textAlign={"center"} fontSize={14} marginX={50}>
        Something went wrong. If this issue persists, please contact us through
        our help center at{" "}
        <a
          href="https://agspert.com/"
          target="_blank"
          style={{ color: "#00B894" }}
        >
          help.agspeak.com
        </a>
      </Text>
    </Stack>
  );
};
