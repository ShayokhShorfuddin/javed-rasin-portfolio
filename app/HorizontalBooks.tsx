import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Thriller book covers
import BisonnoProhor from "./images/books/Bisonno-Prohor.jpeg";
import MonerVidorKe from "./images/books/Moner-Vidor-Ke.jpeg";
import MoreJayNokkhotrera from "./images/books/More-Jay-Nokkhotrera.jpeg";

// Horror books covers
import BistritoAdhar from "./images/books/Bistrito-Adhar.jpeg";
import Osua from "./images/books/Osua.jpeg";
import Tomisra from "./images/books/Tomisra.jpeg";

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

      markers: true,
      invalidateOnRefresh: true,
    });
  });

  return (
    <div className="overflow-x-hidden h-screen" ref={parentDivRef}>
      <div className="flex items-center h-full px-10" ref={contentRef}>
        {/* Thriller Div */}
        <TextAndBooksDiv
          text="Thriller"
          images={[BisonnoProhor, MonerVidorKe, MoreJayNokkhotrera]}
        />

        {/* <HorrorDiv /> */}
        <TextAndBooksDiv
          text="Horror"
          images={[BistritoAdhar, Tomisra, Osua]}
        />
      </div>
    </div>
  );
}

function TextAndBooksDiv({
  text,
  images,
}: {
  text: string;
  images: StaticImageData[];
}) {
  return (
    <div className="flex items-center min-w-max">
      <h1 className="text-4xl font-bold w-[30rem]">{text}</h1>

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

// TODO: Fix texts and its appearance
// Fix color transition (might need to ask on forum)
