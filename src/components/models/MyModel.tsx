import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MyModel({ ...props }) {
  const modelRef = useRef<THREE.Object3D>(null);

  const { scene } = useGLTF("/models/my_model.glb");

  useEffect(() => {
    if (!modelRef.current) return;

    const box = new THREE.Box3().setFromObject(modelRef.current);
    const center = box.getCenter(new THREE.Vector3());
    modelRef.current.position.sub(center);
  }, [modelRef]);

  return (
    <group {...props} dispose={null} scale={2} ref={modelRef}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/my_model.glb");
