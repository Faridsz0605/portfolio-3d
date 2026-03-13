import { Environment, Float, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";

/**
 * Individual tech icon rendered inside the shared Canvas.
 * Auto-centers and auto-spins each GLB model.
 */
const TechIcon = ({ model, position }) => {
  const { scene } = useGLTF(model.modelPath);
  const groupRef = useRef();

  // Clone the scene so each instance has its own transform
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    // Auto-center based on bounding box
    const box = new THREE.Box3().setFromObject(clonedScene);
    const center = box.getCenter(new THREE.Vector3());
    clonedScene.position.sub(center);

    // Handle special material override for "Interactive Developer"
    if (model.name === "Interactive Developer") {
      clonedScene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [clonedScene, model.name]);

  // Gentle auto-rotation (delta-based for framerate independence)
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={5.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        <group
          scale={model.scale}
          rotation={model.rotation}
          position={model.position ?? [0, 0, 0]}
        >
          <primitive object={clonedScene} />
        </group>
      </group>
    </Float>
  );
};

/**
 * Single Canvas that renders ALL tech stack icons.
 * Replaces 5 individual Canvas elements → 1 WebGL context instead of 5.
 */
const TechStackScene = ({ techIcons }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1280px)" });

  // Calculate positions for each icon based on viewport
  const iconPositions = useMemo(() => {
    const count = techIcons.length;

    if (isMobile) {
      // Stack vertically on mobile
      const startY = ((count - 1) / 2) * 3;
      return techIcons.map((_, i) => [0, startY - i * 3, 0]);
    }

    if (isTablet) {
      // 3-column grid for tablet
      const cols = 3;
      const spacingX = 3.5;
      const spacingY = 3.5;
      return techIcons.map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const offsetX = ((cols - 1) / 2) * spacingX;
        return [col * spacingX - offsetX, -row * spacingY, 0];
      });
    }

    // Desktop: single row
    const spacing = 3.2;
    const offset = ((count - 1) / 2) * spacing;
    return techIcons.map((_, i) => [i * spacing - offset, 0, 0]);
  }, [techIcons, isMobile, isTablet]);

  // Camera config based on layout
  const cameraConfig = useMemo(() => {
    if (isMobile) {
      return { position: [0, 0, 8], fov: 50 };
    }
    if (isTablet) {
      return { position: [0, -1.5, 10], fov: 45 };
    }
    return { position: [0, 0, 12], fov: 45 };
  }, [isMobile, isTablet]);

  return (
    <Canvas
      camera={cameraConfig}
      dpr={[1, 1.5]}
      gl={{ powerPreference: "high-performance", antialias: true }}
      frameloop="always"
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
      <Environment preset="city" />

      {techIcons.map((icon, i) => (
        <TechIcon key={icon.name} model={icon} position={iconPositions[i]} />
      ))}
    </Canvas>
  );
};

export default TechStackScene;
