"use client";

import { useReducedMotion } from "motion/react";
import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function MotionOrb({ color, position, speed }: { color: string; position: [number, number, number]; speed: number }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.55, 1]} />
        <MeshDistortMaterial
          color={color}
          distort={0.28}
          speed={1.5}
          roughness={0.35}
          metalness={0.65}
        />
      </mesh>
    </Float>
  );
}

function Ring({ radius, color }: { radius: number; color: string }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2.5, 0, 0]}>
      <torusGeometry args={[radius, 0.025, 12, 64]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.25} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 4, 2]} intensity={1.1} color="#FFB547" />
      <directionalLight position={[-3, -2, 4]} intensity={0.5} color="#2563EB" />
      <MotionOrb color="#F97316" position={[-0.6, 0.2, 0]} speed={0.8} />
      <MotionOrb color="#2563EB" position={[0.8, -0.3, -0.2]} speed={0.6} />
      <Ring radius={1.4} color="#E8E3DA" />
      <Ring radius={1.8} color="#FFB547" />
    </>
  );
}

export function FunctionalMotionScene() {
  const reduceMotion = useReducedMotion();
  const dpr = useMemo(() => (typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1), []);

  if (reduceMotion) {
    return (
      <div
        className="hero-glow absolute inset-0 rounded-[2rem] border border-white/10"
        aria-hidden="true"
      >
        <div className="absolute inset-8 rounded-full border border-orange/20" />
        <div className="absolute inset-16 rounded-full border border-blue/15" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-graphite/40" aria-hidden="true">
      <Suspense fallback={<div className="hero-glow h-full w-full" />}>
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 42 }}
          dpr={dpr}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
    </div>
  );
}
