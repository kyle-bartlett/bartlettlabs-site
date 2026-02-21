"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div
      className="hero3d-container"
      aria-label="Loading 3D visualization"
      style={{ background: "transparent" }}
    />
  ),
});

export default function HeroVisual() {
  return <HeroCanvas />;
}
