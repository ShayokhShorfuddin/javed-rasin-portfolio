"use client";

import { useState } from "react";
import Hero from "./Hero";
import Loader from "./Loader";
import Writer from "./Writer";

export default function Page() {
  const [loaderComplete, setLoaderComplete] = useState(true);

  const handleComplete = () => {
    setLoaderComplete(true);
  };

  return (
    <main>
      <Loader onComplete={handleComplete} />
      {loaderComplete && <Hero />}
      <Writer />
    </main>
  );
}

//TODO: First, fix the loader & hero issue.
// TODO: Finish optimizing the suggested code
