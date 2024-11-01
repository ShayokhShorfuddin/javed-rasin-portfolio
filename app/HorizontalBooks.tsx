import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Thriller book covers
import BisonnoProhor from "./images/books/thriller/Bisonno-Prohor.jpg";
import MonerVidorKe from "./images/books/thriller/Moner-Vidor-Ke.jpg";
import MoreJayNokkhotrera from "./images/books/thriller/More-Jay-Nokkhotrera.jpg";

// Horror books covers
import BistritoAdhar from "./images/books/horror/Bistrito-Adhar.jpg";
import Osua from "./images/books/horror/Osua.jpg";
import Tomisra from "./images/books/horror/Tomisra.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalBooks() {
  const contentRef = useRef<HTMLHeadingElement>(null);
  const parentDiv = useRef<HTMLDivElement>(null); // Necessary for pin to work

  useGSAP(() => {
    gsap.to(contentRef.current, {
      transform: "translateX(-110%)", // TODO: Fixed values gets you killed when screen size changes. Go understand the responsive approach.

      scrollTrigger: {
        trigger: parentDiv.current,
        scroller: "body",
        markers: true,

        start: "top 0%",
        end: "top -450%",

        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <div className="overflow-x-hidden h-screen" ref={parentDiv}>
      <div className="flex items-center h-full" ref={contentRef}>
        {/* Thriller Div */}

        <TextAndBooksDiv
          text="Thriller"
          images={[BisonnoProhor, MonerVidorKe, MoreJayNokkhotrera]}
        />

        {/* <HorrorDiv /> */}
        <TextAndBooksDiv
          text="Horror"
          images={[BistritoAdhar, Osua, Tomisra]}
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
