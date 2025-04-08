"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls } from "@react-three/drei";
import MyModel from "./MyModel";

export default function Scene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 3]} intensity={2} />

        <Float floatIntensity={1} speed={2}>
          <MyModel />
        </Float>

        <OrbitControls
        autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={1.3}
          minPolarAngle={1}
        />
        <ContactShadows opacity={0.6} blur={3} position={[0, -2.5, 0]} />
      </Canvas>
    </div>
  );
}
