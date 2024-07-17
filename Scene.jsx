"use client";

import { Box, Stack, Text } from "@chakra-ui/react";
import {
  Html,
  OrbitControls,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { HeroSection } from "./HeroSection";
import MediaContentIn360 from "./MediaContentIn360";
import { SplashScreen } from "./generic/SplashScreen";

const Sphere = ({ data, setIsInteracting }) => {
  const image_360 = data?.find((info) => info?.type === "360_image");
  const video_360 = data?.find((info) => info?.type === "360_video");

  const { gl } = useThree();

  let texture;

  if (image_360) {
    texture = useTexture(image_360?.image_url);
  } else if (video_360) {
    texture = useVideoTexture(video_360?.image_url);
  } else return;

  useEffect(() => {
    const handlePointerDown = () => setIsInteracting(true);
    const handlePointerUp = () => setIsInteracting(false);

    gl.domElement.addEventListener("pointerdown", handlePointerDown);
    gl.domElement.addEventListener("pointerup", handlePointerUp);

    return () => {
      gl.domElement.removeEventListener("pointerdown", handlePointerDown);
      gl.domElement.removeEventListener("pointerup", handlePointerUp);
    };
  }, [gl, setIsInteracting]);

  return (
    <>
      {texture ? (
        <>
          <ambientLight intensity={2} />
          <mesh>
            <sphereGeometry args={[1, 100, 100]} />
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
          </mesh>
          <MediaContentIn360 data={image_360?.farmer_info} />
        </>
      ) : (
        <Html>
          <Stack w={"50vw"} left={50} position={"relative"}>
            <Text position={"absolute"} left={-120}>
              Texture is Loading...
            </Text>
          </Stack>
        </Html>
      )}
    </>
  );
};

const FrameUpdater = ({ setIsInsideSphere }) => {
  useFrame(({ camera }) => {
    setIsInsideSphere(camera.position.length() <= 1);
  });
  return null;
};

export const Scene = ({ data, setIsInteracting }) => {
  const [isInsideSphere, setIsInsideSphere] = useState(true);
  return (
    <Box w={"100vw"} h={"100vh"}>
      <Canvas camera={{ position: [0, 0, 0.001], fov: 70 }}>
        <ambientLight intensity={0.1} />
        <Suspense fallback={null}>
          {data && <Sphere setIsInteracting={setIsInteracting} data={data} />}
        </Suspense>
        <OrbitControls enableRotate={true} enableZoom={false} />
        <FrameUpdater setIsInsideSphere={setIsInsideSphere} />
      </Canvas>
      {isInsideSphere && (
        <>
          <HeroSection data={data} />
          <SplashScreen inScene />
        </>
      )}
    </Box>
  );
};
