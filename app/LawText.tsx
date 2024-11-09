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

    // Animate background color change
    timeline.to(divRef.current, {
      backgroundColor: "#09090b",
      duration: 1,

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top top",
        markers: true,
      },
    });

    // Animate opacity of each word
    timeline.from(".law-letter", {
      opacity: 0,
      duration: 2,
      stagger: 1,
      ease: "power2.out",

      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "top top",
        markers: true,
        scrub: 1,
      },
    });
  });

  // useGSAP(() => {
  //   const timeline = gsap.timeline();

  //   timeline
  //     .to(divRef.current, {
  //       backgroundColor: "#09090b",
  //       duration: 1,

  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 80%", // Changed to trigger at center of viewport
  //         end: "top top",
  //         markers: true,
  //       },
  //     })
  //     .from(".law-letter", {
  //       opacity: 0.05,
  //       duration: 0.7,
  //       stagger: 0.5,
  //       ease: "power2.out",

  //       scrollTrigger: {
  //         trigger: textRef.current,
  //         markers: true,
  //         pin: true,
  //         scrub: 1,
  //       },
  //     });
  // });

  return (
    <section className="h-svh" ref={sectionRef}>
      <div
        className="flex justify-center items-center h-full bg-white"
        ref={divRef}
      >
        <h1
          className={`before:content-["Law"] before:text-xl before:border before:rounded-full before:px-3 before:py-[.5px] before:mr-3 text-6xl leading-tight text-white max-w-[60vw] text-center overflow-hidden ${libre.className}`}
          ref={textRef}
        >
          {splitSentence(
            "The people are not just abstract numbers or cases, but individuals with real hopes, fears, and struggles."
          ).map((letter, index) => (
            <span className="law-letter inline-block" key={index}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
