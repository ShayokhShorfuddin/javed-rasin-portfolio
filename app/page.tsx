"use client";

import { useState } from "react";
import Hero from "./Hero";
import Loader from "./Loader";
import Writer from "./Writer";
import Years from "./Years";
import HorizontalBooks from "./HorizontalBooks";
import LawText from "./LawText";

export default function Page() {
  const [loaderComplete, setLoaderComplete] = useState(true);

  const handleComplete = () => {
    setLoaderComplete(true);
  };

  return (
    <main>
      {/* <Loader onComplete={handleComplete} /> */}
      {loaderComplete && (
        <>
          <Hero />
          <Writer />
          <HorizontalBooks />
          <Years />
          <LawText />
          <div className="h-svh">Hello World</div>
        </>
      )}
    </main>
  );
}
