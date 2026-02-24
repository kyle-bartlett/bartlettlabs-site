"use client";
"use no memo";

import { useRef, useState, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, RoundedBox } from "@react-three/drei";
import type { Mesh, Group } from "three";

/* ── reduced-motion check ────────────────────────────────── */
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
  color: string;
  targetPos: [number, number, number];
  size: [number, number, number];
  delay: number;
}

const BLOCKS: BlockData[] = [
  {
    label: "LEAD CAPTURE",
    color: "#C05746",
    targetPos: [-2.2, 0.6, -2.2],
    size: [2, 1.2, 2],
    delay: 0,
  },
  {
    label: "AI FOLLOW-UP",
    color: "#84A59D",
    targetPos: [2.2, 0.6, -2.2],
    size: [2, 1.2, 2],
    delay: 0.3,
  },
  {
    label: "SCHEDULING",
    color: "#1B263B",
    targetPos: [-2.2, 0.6, 2.2],
    size: [2, 1.2, 2],
    delay: 0.6,
  },
  {
    label: "INVOICING",
    color: "#C05746",
    targetPos: [2.2, 0.6, 2.2],
    size: [2, 1.2, 2],
    delay: 0.9,
  },
];

/* ── baseplate ───────────────────────────────────────────── */
function BasePlate() {
  return (
    <group>
      {/* Main slab */}
      <mesh receiveShadow position={[0, -0.25, 0]}>
        <boxGeometry args={[10, 0.5, 10]} />
        <meshStandardMaterial color="#1B263B" roughness={0.8} />
      </mesh>

      {/* LEGO studs */}
      {Array.from({ length: 10 }).map((_, x) =>
        Array.from({ length: 10 }).map((_, z) => (
          <mesh
            key={`${x}-${z}`}
            position={[x - 4.5, 0.1, z - 4.5]}
            castShadow
          >
            <cylinderGeometry args={[0.25, 0.25, 0.2, 16]} />
            <meshStandardMaterial color="#1B263B" roughness={0.6} />
          </mesh>
        )),
      )}
    </group>
  );
}

/* ── animated block ──────────────────────────────────────── */
function WorkshopBlock({
  label,
  color,
  targetPos,
  size,
  delay,
  paused,
}: BlockData & { paused: boolean }) {
  const ref = useRef<Group>(null!);
  const [arrived, setArrived] = useState(false);
  const startTime = useRef<number | null>(null);

  useFrame(({ clock }) => {
    if (paused) {
      ref.current.position.set(targetPos[0], targetPos[1], targetPos[2]);
      setArrived(true);
      return;
    }

    if (startTime.current === null) {
      startTime.current = clock.elapsedTime;
    }

    const elapsed = clock.elapsedTime - startTime.current - delay;
    if (elapsed < 0) {
      ref.current.position.set(-12, targetPos[1] + 4, targetPos[2]);
      return;
    }

    // Spring-like slide in from left
    const progress = Math.min(1, elapsed * 1.5);
    const spring = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    const overshoot = progress < 1 ? Math.sin(progress * Math.PI) * 0.3 : 0;

    const x = -12 + (targetPos[0] + 12) * spring;
    const y = targetPos[1] + (1 - spring) * 4 + overshoot;

    ref.current.position.set(x, y, targetPos[2]);

    if (progress >= 1 && !arrived) {
      setArrived(true);
    }
  });

  const isLight = color === "#84A59D" || color === "#C05746";

  return (
    <group ref={ref} position={[-12, targetPos[1] + 4, targetPos[2]]}>
      <RoundedBox args={size} radius={0.1} smoothness={4} castShadow>
        <meshStandardMaterial color={color} roughness={0.5} />
      </RoundedBox>
      {arrived && (
        <Html
          position={[0, 0, size[2] / 2 + 0.01]}
          center
          style={{ pointerEvents: "none" }}
        >
          <span className="hero3d-label" style={{ color: isLight ? "#fff" : "#fff" }}>
            {label}
          </span>
        </Html>
      )}
    </group>
  );
}

/* ── scene ────────────────────────────────────────────────── */
function Scene() {
  const paused = useReducedMotion();

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} castShadow intensity={1} />
      <spotLight
        position={[-10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={0.5}
      />

      <BasePlate />

      {BLOCKS.map((block) => (
        <WorkshopBlock key={block.label} {...block} paused={paused} />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 3}
      />
    </>
  );
}

/* ── canvas wrapper ──────────────────────────────────────── */
export default function HeroCanvas() {
  return (
    <div className="hero3d-container">
      <Canvas
        shadows
        camera={{
          position: [10, 10, 10],
          fov: 35,
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
