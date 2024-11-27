import { Orbit } from "next/font/google";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Thriller book covers
import BisonnoProhor from "./images/books/Bisonno-Prohor.jpeg";
import MonerVidorKe from "./images/books/Moner-Vidor-Ke.jpeg";
import MoreJayNokkhotrera from "./images/books/More-Jay-Nokkhotrera.jpeg";

// Horror books covers
import BistritoAdhar from "./images/books/Bistrito-Adhar.jpeg";
import Binti from "./images/books/Binti.jpg";
import Tomisra from "./images/books/Tomisra.jpeg";

// Sci-fi books covers
import SomoyerSiri from "./images/books/Somoyer-Siri.jpeg";
import VoiceParisa from "./images/books/Voice-Parisa.jpg";

const orbit = Orbit({
  subsets: ["latin"],
  weight: ["400"],
});

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalBooks() {
  const contentRef = useRef<HTMLDivElement>(null);
  const parentDivRef = useRef<HTMLDivElement>(null); // Necessary for pin to work

  function getScrollAmount() {
    if (contentRef.current) {
      let contentWidth = contentRef.current.scrollWidth + 100; // 100 for extra space at the end
      return -(contentWidth - window.innerWidth);
    }

    // Due to the ref checking above, had to return 0 to avoid TS error.
    return 0;
  }

  useGSAP(() => {
    const ScrollTween = gsap.to(contentRef.current, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: parentDivRef.current,
      scroller: "body",

      start: "top 0%",
      end: () => `+=${getScrollAmount() * -1}`,

      scrub: 1.5,
      pin: true,
      animation: ScrollTween,

      invalidateOnRefresh: true,
    });
  });

  return (
    <div className="overflow-x-hidden h-svh bg-white" ref={parentDivRef}>
      <div
        className="flex items-center h-full pl-20 gap-x-[8rem]"
        ref={contentRef}
      >
        {/* Thriller Div */}
        <TextAndBooksDiv
          text="Every page ignites a new thrill."
          style={{ fontFamily: "sans" }}
          images={[BisonnoProhor, MonerVidorKe, MoreJayNokkhotrera]}
        />

        {/* <HorrorDiv /> */}
        <TextAndBooksDiv
          text="Face the horror that creeps beyond."
          style={{ fontFamily: "DieDieDie" }}
          images={[BistritoAdhar, Tomisra, Binti]}
        />

        {/* Sci-fi Div */}
        <TextAndBooksDiv
          text="Traverse into distant future of possibilities."
          style={{ fontFamily: orbit.style.fontFamily }}
          images={[SomoyerSiri, VoiceParisa]}
        />
      </div>
    </div>
  );
}

function TextAndBooksDiv({
  text,
  style,
  images,
}: {
  text: string;
  style: React.CSSProperties;
  images: StaticImageData[];
}) {
  return (
    <div className="flex items-center min-w-max gap-x-10">
      <h1 className={`text-4xl max-w-96`} style={{ ...style }}>
        {text}
      </h1>

      <div className="flex gap-8">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Book${index + 1}`}
            width={400}
            className="object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
