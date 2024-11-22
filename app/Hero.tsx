"use client";

import Image from "next/image";
import JavedImage from "./images/javed/javed.jpg";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Outfit } from "next/font/google";
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Draggable);

export default function Hero() {
  const handRef = useRef<HTMLSpanElement>(null);
  const dragAreaRef = useRef<HTMLDivElement>(null);

  function pickDeg(): number {
    return gsap.utils.random(-7, 7, 1);
  }

  // Generating random degrees for each element
  const sedDeg = pickDeg();
  const courtDeg = -sedDeg;
  const writerDeg = pickDeg();

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to("#hello", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Hand wave animation
    if (handRef.current) {
      timeline.to(handRef.current, {
        delay: 0.5,
        rotation: 20,
        duration: 0.7,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    // Name stagger animation
    timeline.from(".name-letter", {
      y: 200,

      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });

    timeline.to("#javed, #sed, #court, #writer", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });
  });

  useGSAP(
    () => {
      // Setting up the draggable elements
      Draggable.create("#sed", {
        type: "x,y",
        bounds: dragAreaRef.current,
        zIndexBoost: false,
      });

      Draggable.create("#court", {
        type: "x,y",
        bounds: dragAreaRef.current,
        zIndexBoost: false,
      });

      Draggable.create("#writer", {
        type: "x,y",
        bounds: dragAreaRef.current,
        zIndexBoost: false,
      });

      Draggable.create("#javed", {
        type: "x,y",
        bounds: dragAreaRef.current,
        zIndexBoost: false,
      });
    },
    {
      scope: dragAreaRef,
    }
  );

  return (
    <section className="container flex flex-col items-center pt-10 mx-auto min-h-screen">
      <Sidebar />
      <p
        className={`text-lg md:text-2xl mb-2 lg:mb-5 opacity-0 font-extralight md:font-light ${outfit.className}`}
        id="hello"
      >
        Hello there{" "}
        <span
          className="hidden md:inline-block origin-bottom-right"
          ref={handRef}
        >
          👋🏻
        </span>
      </p>

      <h1
        className={`text-[11vw] self-center leading-none overflow-hidden ${outfit.className}`}
      >
        {"JAVED RASIN".split("").map((letter, index) => (
          <span className="name-letter inline-block" key={index}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>

      <div
        className="w-full h-[40rem] md:h-[35rem] lg:h-[32rem] xl:h-[29rem] mt-9 lg:mt-12 relative"
        ref={dragAreaRef}
      >
        <div
          className="absolute size-[55vw] sm:size-[15rem] lg:size-[17rem] left-0 right-0 mx-auto top-5 opacity-0"
          id="javed"
        >
          <Image src={JavedImage} alt="Javed" className="rounded-full" />
        </div>

        <TextBox
          className={`bg-green-300 bottom-52 lg:top-0 lg:left-0 opacity-0`}
          sentence="Founder & CEO at SED Foundation 🌿"
          id="sed"
          deg={sedDeg}
        />

        <TextBox
          className={`bg-purple-200 bottom-40 lg:top-0 right-0 opacity-0`}
          sentence="Advocate at Supreme Court of Bangladesh ⚖️"
          id="court"
          deg={courtDeg}
        />
        <TextBox
          className={`bg-orange-200 bottom-16 lg:bottom-0 left-[25%] md:left-[35%] opacity-0`}
          sentence="Writer, Editor & Publisher at ঈহা প্রকাশ ✒️"
          id="writer"
          deg={writerDeg}
        />
      </div>
    </section>
  );
}

function TextBox({
  sentence,
  className,
  id,
  deg,
}: {
  sentence: string;
  className?: string;
  id?: string;
  deg: number;
}) {
  return (
    <div
      className={`p-2 mx-1 h-min w-fit text-base md:text-xl rounded-md absolute cursor-grab ${className}`}
      style={{
        transform: `rotate(${deg}deg)`,
      }}
      id={id}
    >
      <p>{sentence}</p>
    </div>
  );
}

// Sidebar
function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className="absolute top-5 right-7 md:top-8 md:right-10">
        <Menu className="w-5 h-5 md:w-6 md:h-6" />
      </SheetTrigger>

      <SheetContent>
        <div className="flex flex-col gap-y-2 mx-5">
          <Link href="/blogs">Blogs</Link>
          <Link href="/books">Books</Link>
          <Link href="/about">About</Link>
          <Link href="/uploads">Uploads</Link>

          <AlertDialog>
            <AlertDialogTrigger>
              <p className="text-left">Contact</p>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Contact</AlertDialogTitle>
                <AlertDialogDescription>
                  Let's get in touch.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <div className="flex flex-col gap-y-5 text-neutral-800">
                <ContactPhone />
                <ContactEmail />
                <ContactAddress />
              </div>

              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Link href="/social-legal-works">Social & Legal Works</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function ContactPhone() {
  return (
    <div className="flex">
      <Phone className="mr-4" />
      <p>+8801553657919</p>
    </div>
  );
}

function ContactEmail() {
  return (
    <div className="flex">
      <Mail className="mr-4" />
      <p>
        <Link href="mailto:javed.rasin@gmail.com" className="hover:underline">
          javed.rasin@gmail.com
        </Link>
      </p>
    </div>
  );
}

function ContactAddress() {
  return (
    <div className="flex">
      <MapPin className="mr-4" />

      <Link
        href="https://maps.app.goo.gl/4G3GuXeUcgA7P1BR8"
        className="hover:underline"
        target="_blank"
      >
        Iha Prokash, 803/A, Khilgaon Tilpapara, Road 14, Dhaka-1219.
      </Link>
    </div>
  );
}
