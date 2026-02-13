"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

type HeroSceneProps = {
  highlight?: "roi" | "authenticity" | "speed" | "cta" | null;
  reducedMotion?: boolean;
  onReady?: () => void;
};

const baseColor = "#1e63ff";
const highlightColor = "#00c49a";
const accentColor = "#ff4d8d";

function Nodes({
  highlight,
  reducedMotion,
}: {
  highlight?: HeroSceneProps["highlight"];
  reducedMotion?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const positions = useMemo<Array<[number, number, number]>>(
    () =>
      Array.from({ length: 80 }, () => [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3,
      ]),
    []
  );
  const lines = useMemo<Array<[[number, number, number], [number, number, number]]>>(
    () =>
      Array.from({ length: 60 }, (_, index) => [
        positions[index % positions.length],
        positions[(index * 3 + 7) % positions.length],
      ]),
    [positions]
  );

  useFrame((_, delta) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((points, index) => (
        <Line
          key={`line-${index}`}
          points={points}
          color={highlight ? highlightColor : baseColor}
          lineWidth={0.6}
          transparent
          opacity={0.35}
        />
      ))}
      {positions.map((position, index) => {
        const isActive = hovered === index || highlight === "cta";
        const color =
          highlight === "speed"
            ? accentColor
            : highlight
            ? highlightColor
            : baseColor;
        return (
          <mesh
            key={`node-${index}`}
            position={position}
            onPointerOver={() => setHovered(index)}
            onPointerOut={() => setHovered(null)}
            scale={isActive ? 1.4 : 1}
          >
            <sphereGeometry args={[0.05, 10, 10]} />
            <meshStandardMaterial
              color={color}
              emissive={isActive ? highlightColor : baseColor}
              emissiveIntensity={isActive ? 0.8 : 0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function HeroScene({
  highlight = null,
  reducedMotion = false,
  onReady,
}: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      aria-label="Interactive 3D visualisation of influencer network"
      role="img"
      onCreated={() => onReady?.()}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      <Nodes highlight={highlight} reducedMotion={reducedMotion} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}
