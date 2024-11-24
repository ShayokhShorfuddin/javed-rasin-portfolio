"use client";

import { useState } from "react";
import Hero from "./Hero";
import Loader from "./Loader";
import Writer from "./Writer";
import Years from "./Years";
import HorizontalBooks from "./HorizontalBooks";
import LawText from "./LawText";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function Page() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  const handleComplete = () => {
    setLoaderComplete(true);
  };

  return (
    <main>
      <Loader onComplete={handleComplete} />
      {loaderComplete && (
        <>
          <Hero />
          <Writer />
          <div className="hidden md:block">
            <HorizontalBooks />
          </div>
          <Years />
          <LawText />
          {/* <Gallery /> */}
          <Footer />
        </>
      )}
    </main>
  );
}
