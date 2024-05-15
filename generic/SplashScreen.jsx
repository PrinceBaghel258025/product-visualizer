import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AgSpeakLogo from "../../../public/agspeak_logo.png";

export const SplashScreen = ({ isLoading }) => {
  const [display, setDisplay] = useState("flex");

  useEffect(() => {
    if (!isLoading) {
      const splashScreenTimer = setTimeout(() => {
        setDisplay("none");
      }, 1500);

      return () => {
        clearTimeout(splashScreenTimer);
      };
    }
  }, []);

  return (
    <Flex
      backgroundColor={"#00B894"}
      h={"100vh"}
      w={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      position={"absolute"}
      top={0}
      left={0}
      display={display}
      zIndex={"1000000000"}
    >
      <Image src={AgSpeakLogo} alt="logo" width={250} />

      <Text position={"absolute"} bottom={65} color={"white"} fontSize={15}>
        © AgSpert Technologies Pvt. Ltd.
      </Text>
    </Flex>
  );
};
