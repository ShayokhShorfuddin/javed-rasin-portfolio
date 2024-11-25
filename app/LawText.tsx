import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Libre_Baskerville } from "next/font/google";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});

function splitSentence(sentence: string) {
  // Regular expression to match words and spaces
  const regex = /\S+|\s+/g;

  // Use regex to match words and spaces
  const result = sentence.match(regex);

  if (!result) return [];

  return result;
}

export default function LawText() {
  const sectionRef = useRef(null);
  const divRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline();

    // Animate opacity of each word
    timeline.from(".law-letter", {
      opacity: 0.04,
      duration: 5,
      stagger: 1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });
  });

  return (
    <section className="h-svh" ref={sectionRef}>
      <div
        className="flex justify-center items-center h-full bg-zinc-950"
        ref={divRef}
      >
        <h1
          className={`before:content-["Law"] before:text-sm before:md:text-base before:border before:rounded-full before:px-3 before:py-[.5px] before:mr-3 text-2xl md:text-3xl lg:text-5xl xl:text-6xl md:max-w-[80vw] lg:max-w-[80vw] xl:max-w-[60vw] px-7 text-white text-center overflow-hidden ${libre.className}`}
          ref={textRef}
        >
          {splitSentence(
            "The people are not just abstract numbers or cases, but individuals with real hopes, fears, and struggles."
          ).map((letter, index) => (
            <span
              className="law-letter inline-block leading-[1.15]"
              key={index}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
