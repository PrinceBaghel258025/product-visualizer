"use client";

import { Box } from "@chakra-ui/react";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import * as THREE from "three";
import { HeroSection } from "./HeroSection";
import MediaContentIn360 from "./MediaContentIn360";
import { SplashScreen } from "./generic/SplashScreen";

const Sphere = ({ data }) => {
  const image_360 = data?.find((info) => info?.type === "360_image");

  const texture = useTexture(image_360?.image_url);

  return (
    <>
      <ambientLight intensity={2} />
      <mesh>
        <sphereGeometry args={[1, 100, 100]} />
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      <MediaContentIn360 data={image_360} />
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
        <Suspense fallback={null}>{data && <Sphere data={data} />}</Suspense>
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
