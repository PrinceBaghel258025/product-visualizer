"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Html, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import * as THREE from "three";
import { HeroSection } from "./HeroSection";
import { motion } from "framer-motion";
import LocationMarker from "../../public/location.png";
import UserProfile from "../../public/userProfile.jpg";
import Image from "next/image";

const Sphere = ({ data }) => {
  const [showVideo, setShowVideo] = useState(true);
  const imageUrl = data?.find((info) => info?.type === "360_image");

  const texture = useTexture(
    "https://360-images-v1.s3.ap-south-1.amazonaws.com/1.jpg"
  );
  return (
    <>
      <ambientLight intensity={2} />
      <mesh>
        <sphereGeometry args={[1, 100, 100]} />
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>

      <Html position={[-50, 3, 50]}>
        <Box position={"relative"} h={"24rem"}>
          <Box
            as={motion.div}
            position={"absolute"}
            top={0}
            w={"4rem"}
            h={"100%"}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Image
              src={LocationMarker}
              alt="location-icon"
              onClick={() => {
                setShowVideo((showVideo) => !showVideo);
              }}
            />
            <Text w={"3.5rem"} />
          </Box>
          {!showVideo && (
            <Flex
              as={motion.div}
              p={4}
              w={"17rem"}
              h={"fit-content"}
              ml={"3rem"}
              borderRadius={12}
              alignItems={"center"}
              gap={5}
              bg={"transparent"}
              overflowY={"auto"}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Box borderRadius={"25rem"} w={100} h={100} overflow={"auto"}>
                <Image
                  src={UserProfile}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  alt="person image"
                />
              </Box>
              <Box
                // px={8}
                w={"fit-content"}
                bg={"rgb(255, 255, 255, 0.8)"}
                p={8}
                borderRadius={10}
                fontWeight={500}
              >
                <Text>Name: Ramu</Text>
                <Text>Location: Assam</Text>
              </Box>
            </Flex>
          )}
        </Box>
      </Html>
    </>
  );
};

const FrameUpdater = ({ setIsInsideSphere }) => {
  useFrame(({ camera }) => {
    setIsInsideSphere(camera.position.length() <= 1);
  });
  return null;
};

export const Scene = ({ data }) => {
  const [isInsideSphere, setIsInsideSphere] = useState(true);

  return (
    <Box w={"100vw"} h={"100vh"}>
      <Canvas camera={{ position: [0, 0, 0.001], fov: 70 }}>
        <ambientLight intensity={0.1} />
        <Suspense fallback={null}>
          <Sphere data={data} />
        </Suspense>
        <OrbitControls enableRotate={true} enableZoom={false} />
        <FrameUpdater setIsInsideSphere={setIsInsideSphere} />
      </Canvas>
      {isInsideSphere && <HeroSection data={data} />}
    </Box>
  );
};
