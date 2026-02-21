"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Html, Line } from "@react-three/drei";
import type { Mesh } from "three";

/* ── reduced-motion check (client only, ssr: false) ─────── */
function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/* ── block config ────────────────────────────────────────── */
interface BlockData {
  label: string;
  pos: [number, number, number];
  size: [number, number, number];
  href: string;
  phase: number;
}

const BLOCKS: BlockData[] = [
  { label: "CRM",   pos: [-3,   0, -2],   size: [1,   0.6, 0.8],  href: "/services#lead-capture",  phase: 0 },
  { label: "SMS",   pos: [ 3,   0, -1.5], size: [0.9, 0.55, 0.7], href: "/services#ai-assistant",  phase: 1.2 },
  { label: "DATA",  pos: [-2.5, 0,  2.5], size: [1,   0.6, 0.8],  href: "/services#automation",    phase: 2.4 },
  { label: "LEADS", pos: [ 2.8, 0,  2],   size: [1.1, 0.55, 0.75],href: "/services#lead-capture",  phase: 3.6 },
];

const CENTER: [number, number, number] = [0, 0, 0];

/* ── floating outer block ────────────────────────────────── */
function FloatingBlock({
  pos,
  size,
  label,
  href,
  phase,
  paused,
}: BlockData & { paused: boolean }) {
  const ref = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (paused) return;
    ref.current.position.y =
      pos[1] + Math.sin(clock.elapsedTime * 1.8 + phase) * 0.4;
  });

  return (
    <mesh ref={ref} position={pos}>
      <boxGeometry args={size} />
      <meshBasicMaterial color="#ffffff" />
      <Edges color="#000000" />
      <Html center style={{ pointerEvents: "none" }}>
        <a
          href={href}
          className="hero3d-label"
          style={{ pointerEvents: "auto" }}
        >
          {label}
        </a>
      </Html>
    </mesh>
  );
}

/* ── center AI block ─────────────────────────────────────── */
function CenterBlock({ paused }: { paused: boolean }) {
  const ref = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (paused) return;
    ref.current.position.y = Math.sin(clock.elapsedTime * 1.2) * 0.25;
  });

  return (
    <mesh ref={ref} position={CENTER}>
      <boxGeometry args={[1.4, 1.4, 1.4]} />
      <meshBasicMaterial color="#ffffff" />
      <Edges color="#000000" />
      <Html center style={{ pointerEvents: "none" }}>
        <a
          href="/services"
          className="hero3d-label hero3d-label--center"
          style={{ pointerEvents: "auto" }}
        >
          AI
        </a>
      </Html>
    </mesh>
  );
}

/* ── data pulse (small blue cube along connector) ────────── */
function Pulse({
  target,
  offset,
  paused,
}: {
  target: [number, number, number];
  offset: number;
  paused: boolean;
}) {
  const ref = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (paused) return;
    const t = (Math.sin(clock.elapsedTime * 2.5 + offset) + 1) / 2;
    ref.current.position.set(
      CENTER[0] + (target[0] - CENTER[0]) * t,
      0,
      CENTER[2] + (target[2] - CENTER[2]) * t,
    );
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.12, 0.12, 0.12]} />
      <meshBasicMaterial color="#2563EB" />
    </mesh>
  );
}

/* ── scene composition ───────────────────────────────────── */
function Scene() {
  const paused = useReducedMotion();

  return (
    <>
      <ambientLight intensity={1} />

      {/* Thin black connector lines */}
      {BLOCKS.map((b) => (
        <Line
          key={`ln-${b.label}`}
          points={[CENTER, b.pos]}
          color="#000000"
          lineWidth={1}
        />
      ))}

      {/* Data pulses — two per line (opposite directions) */}
      {BLOCKS.map((b) => (
        <Pulse
          key={`p1-${b.label}`}
          target={b.pos}
          offset={b.phase}
          paused={paused}
        />
      ))}
      {BLOCKS.map((b) => (
        <Pulse
          key={`p2-${b.label}`}
          target={b.pos}
          offset={b.phase + Math.PI}
          paused={paused}
        />
      ))}

      {/* Center AI block */}
      <CenterBlock paused={paused} />

      {/* Outer blocks */}
      {BLOCKS.map((b) => (
        <FloatingBlock key={b.label} {...b} paused={paused} />
      ))}
    </>
  );
}

/* ── canvas wrapper ──────────────────────────────────────── */
export default function HeroCanvas() {
  return (
    <div className="hero3d-container">
      <Canvas
        orthographic
        camera={{
          position: [8, 6, 8],
          zoom: 50,
          near: 0.1,
          far: 100,
        }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
