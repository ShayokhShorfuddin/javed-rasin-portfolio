import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import { Outfit } from "next/font/google";
import Javed from "./images/javed/javed.jpg";
import { useState, useEffect } from "react";

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
import { ContactAddress, ContactEmail, ContactPhone } from "./Hero";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export default function Footer() {
  const [time, setTime] = useState("");

  useGSAP(() =>
    gsap.to("#hr-line", {
      width: "100%",
      ease: "power3.out",
      duration: 2,

      scrollTrigger: {
        trigger: "#hr-line",
        start: "top bottom",
        toggleActions: "restart none none none",
      },
    })
  );

  function getBangladeshTime() {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const bangladeshOffset = 6 * 60 * 60 * 1000;
    const bangladeshTime = new Date(utcTime + bangladeshOffset);

    let hours = bangladeshTime.getHours();
    const AMPM = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const minutes = bangladeshTime.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes} ${AMPM}`;
  }

  useEffect(() => {
    // Initial update
    setTime(getBangladeshTime());

    // Update every second
    const interval = setInterval(() => {
      setTime(getBangladeshTime());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-svh bg-[#1C1D20]">
      <div className="flex flex-col justify-center text-gray-100">
        <span className="inline-flex items-center">
          <Image
            src={Javed}
            alt="Javed"
            className="size-24 mr-8 rounded-full hover:scale-110 transition-all duration-300"
          />

          <h1 className={`text-8xl  ${outfit.className}`}>
            Let's work together.
          </h1>
        </span>

        <hr className="w-[0%] border-[#ffffff33] mt-16" id="hr-line" />

        <div className="flex justify-between items-start mt-5">
          <div className="flex flex-col">
            <p className="text-stone-400 text-sm">Local Time</p>
            <h1 className="text-xl">
              {time} <span className="text-sm text-stone-400">GMT+6</span>
            </h1>
          </div>

          <AlertDialog>
            <AlertDialogTrigger>
              <p className="text-stone-400">Contact</p>
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
        </div>
      </div>
    </section>
  );
}
