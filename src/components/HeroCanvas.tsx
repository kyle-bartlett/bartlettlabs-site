"use client";

import { useRef, useEffect, useSyncExternalStore } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges, Html, Line } from "@react-three/drei";
import Link from "next/link";
import * as THREE from "three";

/* ── reduced-motion check (client only, ssr: false) ─────── */
function subscribeToMotionPreference(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerSnapshot,
  );
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
const WHITE_MAT = new THREE.MeshBasicMaterial({ color: 0xffffff });
const BLUE_MAT = new THREE.MeshBasicMaterial({ color: 0x2563eb });

/* ── floating outer block (imperative geometry) ──────────── */
function FloatingBlock({
  pos,
  size,
  label,
  href,
  phase,
  paused,
}: BlockData & { paused: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    const geo = new THREE.BoxGeometry(...size);
    meshRef.current.geometry = geo;
    meshRef.current.material = WHITE_MAT;
    groupRef.current.position.set(...pos);
    return () => { geo.dispose(); };
  }, [pos, size]);

  useFrame(({ clock }) => {
    if (paused) return;
    groupRef.current.position.y =
      pos[1] + Math.sin(clock.elapsedTime * 1.8 + phase) * 0.4;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <Edges color="#000000" />
        <Html center style={{ pointerEvents: "none" }}>
          <Link
            href={href}
            className="hero3d-label"
            style={{ pointerEvents: "auto" }}
          >
            {label}
          </Link>
        </Html>
      </mesh>
    </group>
  );
}

/* ── center AI block (imperative geometry) ───────────────── */
function CenterBlock({ paused }: { paused: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    const geo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    meshRef.current.geometry = geo;
    meshRef.current.material = WHITE_MAT;
    return () => { geo.dispose(); };
  }, []);

  useFrame(({ clock }) => {
    if (paused) return;
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 1.2) * 0.25;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <Edges color="#000000" />
        <Html center style={{ pointerEvents: "none" }}>
          <Link
            href="/services"
            className="hero3d-label hero3d-label--center"
            style={{ pointerEvents: "auto" }}
          >
            AI
          </Link>
        </Html>
      </mesh>
    </group>
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
  const ref = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    const geo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    ref.current.geometry = geo;
    ref.current.material = BLUE_MAT;
    return () => { geo.dispose(); };
  }, []);

  useFrame(({ clock }) => {
    if (paused) return;
    const t = (Math.sin(clock.elapsedTime * 2.5 + offset) + 1) / 2;
    ref.current.position.set(
      CENTER[0] + (target[0] - CENTER[0]) * t,
      0,
      CENTER[2] + (target[2] - CENTER[2]) * t,
    );
  });

  return <mesh ref={ref} />;
}

/* ── ambient light setup ─────────────────────────────────── */
function SceneLight() {
  const { scene } = useThree();

  useEffect(() => {
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);
    return () => { scene.remove(light); };
  }, [scene]);

  return null;
}

/* ── scene composition ───────────────────────────────────── */
function Scene() {
  const paused = useReducedMotion();

  return (
    <>
      <SceneLight />

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
