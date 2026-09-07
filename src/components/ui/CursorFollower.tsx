"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 32, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 420, damping: 32, mass: 0.45 });
  const trailX = useSpring(x, { stiffness: 110, damping: 24, mass: 0.8 });
  const trailY = useSpring(y, { stiffness: 110, damping: 24, mass: 0.8 });
  const centeredTrailX = useTransform(trailX, (value) => value - 46);
  const centeredTrailY = useTransform(trailY, (value) => value - 46);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPreferences = () => {
      setEnabled(finePointer.matches);
      setReducedMotion(motionPreference.matches);
    };

    const move = (event: PointerEvent) => {
      if (!finePointer.matches) return;
      x.set(event.clientX - 1.25);
      y.set(event.clientY - 1.25);
    };

    syncPreferences();
    finePointer.addEventListener("change", syncPreferences);
    motionPreference.addEventListener("change", syncPreferences);
    window.addEventListener("pointermove", move, { passive: true });

    return () => {
      finePointer.removeEventListener("change", syncPreferences);
      motionPreference.removeEventListener("change", syncPreferences);
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);

  if (!enabled || reducedMotion) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-24 w-24 rounded-full bg-[#d7ff69]/25 blur-2xl md:block"
        style={{ x: centeredTrailX, y: centeredTrailY }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[101] hidden h-2.5 w-2.5 rounded-full bg-[#0e6b4f] shadow-[0_0_0_5px_rgba(215,255,105,0.25)] md:block"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
