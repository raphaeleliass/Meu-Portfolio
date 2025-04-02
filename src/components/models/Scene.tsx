"use client";

import { Canvas, useThree } from "@react-three/fiber";
import React from "react";
import CarModel from "./CarModel";
import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei";

useGLTF.preload("/models/car.glb");

function ResponsiveShadows() {
  const { size } = useThree();
  const posY = size.width < size.height ? -0.1  : -0.4;
  return <ContactShadows position={[0, posY, 0]} opacity={0.4} blur={2} />;
}

export default function Scene() {
  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 3]} intensity={2} />

        <CarModel />

        <OrbitControls enableZoom={false} />
        <ResponsiveShadows />
      </Canvas>
    </div>
  );
}
