"use client";

import { Canvas, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import CarModel from "./CarModel";
import {
  ContactShadows,
  useGLTF,
  CameraControls,
  OrbitControls,
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload("/models/car.glb");

function ResponsiveShadows() {
  const { size } = useThree();
  const posY = size.width < size.height ? -0.1 : -0.2;
  return <ContactShadows position={[0, posY, 0]} opacity={0.5} blur={2} />;
}

export default function Scene() {
  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [6, 3, -5], fov: 60 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 3]} intensity={2} />

        <CarModel />

        <OrbitControls enableZoom={false} enablePan={false} />
        <ResponsiveShadows />
      </Canvas>
    </div>
  );
}
