"use client";

import { useState } from "react";
import Hero from "./Hero";
import Loader from "./Loader";
import Writer from "./Writer";
import Years from "./Years";
import HorizontalBooks from "./HorizontalBooks";

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
          <Years />
          <HorizontalBooks />
          <div className="h-screen bg-blue-200"></div>
        </>
      )}
    </main>
  );
}
