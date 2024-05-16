"use client";

import { Flex, Stack } from "@chakra-ui/react";
import { Scene } from "./Scene";
import { useSearchParams } from "next/navigation";
import { useGetProduct } from "../apiHooks/useGetProduct";
import { SplashScreen } from "./generic/SplashScreen";
import ErrorImage from "../../public/404_error.jpg";
import Image from "next/image";

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
  const productId = 203;
  const enterpriseName = "kvkdt";

  const {
    data: ProductData,
    isPending,
    isSuccess,
  } = useGetProduct({
    productId: urlProductId,
    enterpriseName: urlEnterpriseName,
  });

  return (
    <Flex minW={"375px"} maxW={"100%"}>
      {isPending ? (
        <SplashScreen />
      ) : isSuccess ? (
        <Scene data={ProductData} />
      ) : (
        <Error404 />
      )}
    </Flex>
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
    </Stack>
  );
};
