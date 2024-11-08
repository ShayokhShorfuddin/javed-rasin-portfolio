"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NotFound() {
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.set("#status-code", {
      opacity: 1,
    });

    timeline.from(".status-code-letter", {
      y: 100,
      stagger: 0.2,
      duration: 0.5,
      ease: "power1.out",
    });

    timeline.to("#not-found-text", {
      opacity: 1,
      duration: 0.5,
    });
  });

  return (
    <section className="flex justify-center items-center h-svh">
      <div className="flex flex-col items-center gap-y-1">
        <h1
          className="text-7xl font-mono overflow-hidden opacity-0"
          id="status-code"
        >
          {"404".split("").map((letter, index) => (
            <span className="status-code-letter inline-block" key={index}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <p className="opacity-0" id="not-found-text">
          Page not found
        </p>
      </div>
    </section>
  );
}
