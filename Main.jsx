import { Flex } from "@chakra-ui/react";
import React from "react";
import { Scene } from "./Scene";
import { useSearchParams } from "next/navigation";
import { useGetProduct } from "../apiHooks/useGetProduct";

export const Main = () => {
  const searchParams = useSearchParams();
  const urlProductId = searchParams?.get("id");

  // Enterprise name
  const urlEnterpriseName = window?.location?.hostname?.split(".")[0];

  console.log("SEARCH: ", urlEnterpriseName, "Product: ", urlProductId);

  // Fake Data
  const productId = 200;
  const enterpriseName = "kvkdt";

  const { data: ProductData } = useGetProduct({
    productId: productId,
    enterpriseName: enterpriseName,
  });

  console.log("ProductData", ProductData);

  return (
    <Flex minW={"375px"} maxW={"100%"}>
      <Scene data={ProductData} />
    </Flex>
  );
};


