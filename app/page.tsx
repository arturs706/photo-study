"use client"

import Image from "next/image";
import Lenis from 'lenis'
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
    <section className="flex flex-col h-[140vh] md:flex-row md:h-[85vh] lg:h-[100vh]">
      {/* Left side */}
      <div className="flex items-center justify-center bg-black w-full h-[50vh] md:w-5/12 md:h-full">
        1
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center md:justify-end bg-black w-full h-[90vh] md:w-7/12 md:h-full bg-red-500 md:bg-black">
        <div className="flex items-center justify-end h-full">
          <Image
            src="/shahin-khalaji-eHicGwTItUM-unsplash.avif"
            alt="logo"
            width={750}
            height={600}
            quality={100}
            priority
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>

    <section className="flex flex-col h-[100vh]">
      <div>
        <h1>
          <span>
            <span>2</span>
          </span>
        </h1>
      </div>
    </section>

    </main>
  );
}
