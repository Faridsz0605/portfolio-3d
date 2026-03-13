import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  // Memoize the white material override to prevent allocation on every render
  const whiteMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: "white" }), []);

  useEffect(() => {
    // Auto-center the model based on its bounding box so all models
    // sit at the origin regardless of how the GLB was exported.
    const box = new THREE.Box3().setFromObject(scene.scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.scene.position.sub(center);

    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = whiteMaterial;
        }
      });
    }
  }, [scene, model.name, whiteMaterial]);

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ powerPreference: "high-performance", antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={model.scale}
          rotation={model.rotation}
          position={model.position ?? [0, 0, 0]}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
