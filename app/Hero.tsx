"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Hero() {
  const handRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (handRef.current) {
      gsap.to(handRef.current, {
        delay: 0.5,
        rotation: 20,
        duration: 0.7,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    gsap.from(".name-letter", {
      y: 200,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="container flex flex-col items-center mt-10 mx-auto">
      <p className="text-2xl font-outfit mb-5">
        Hello there{" "}
        <span
          ref={handRef}
          style={{ display: "inline-block", transformOrigin: "bottom right" }}
        >
          👋🏻
        </span>
      </p>

      <h1
        className="text-[11.5vw] font-outfit self-center leading-none overflow-hidden"
        ref={nameRef}
      >
        {"JAVED RASIN".split("").map((letter, index) => (
          <span key={index} className="name-letter inline-block">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
    </section>
  );
}
