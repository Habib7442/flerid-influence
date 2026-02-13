"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import { useTheme } from "@/components/site/ThemeContext";

function ThreeStars({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const positions = useMemo(() => {
    const count = 220;
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      data[i * 3] = (Math.random() - 0.5) * 18;
      data[i * 3 + 1] = (Math.random() - 0.5) * 12;
      data[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return data;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y += delta * 0.01;
    groupRef.current.rotation.x += delta * 0.005;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#c9d6ff"
          size={0.03}
          sizeAttenuation
          transparent
          opacity={0.6}
        />
      </points>
    </group>
  );
}

export default function StarfieldBackground() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const theme = useTheme();

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: reducedMotion ? 30 : 60,
      detectRetina: true,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: false, mode: [] },
          onClick: { enable: false, mode: [] },
          onDiv: [],
          resize: true,
        },
        modes: {
          repulse: { distance: 80, duration: 0.3 },
        },
      },
      particles: {
        number: { value: 320, density: { enable: true, area: 1000 } },
        color: { value: ["#ffffff", "#c9d6ff", "#9fb3ff"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.3, max: 1.0 },
          animation: { enable: !reducedMotion, speed: 0.5, minimumValue: 0.3, sync: false },
        },
        size: { value: { min: 0.5, max: 3 }, random: true },
        move: {
          enable: !reducedMotion,
          speed: 0.15,
          direction: "none",
          outModes: { default: "out" },
        },
        links: { enable: false },
      },
    }),
    [reducedMotion]
  );

  if (theme?.theme === "light") {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000011_0%,#001122_100%)]" />
      <Particles id="global-stars" init={particlesInit} options={options} className="absolute inset-0" />
      <div className="absolute inset-0 opacity-60">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <ThreeStars reducedMotion={reducedMotion} />
        </Canvas>
      </div>
    </div>
  );
}
