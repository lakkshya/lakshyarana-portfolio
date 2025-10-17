"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Strip from "@/components/Strip";
import Skills from "@/components/Skills";
import Contact from "./contact/page";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navHeight = navRef.current.offsetHeight;
        const nextSection = document.getElementById("mid-section");
        if (!nextSection) return;

        const rect = nextSection.getBoundingClientRect();
        const distanceFromNavBottom = rect.top - navHeight;
        // Change color when scroll position reaches the bottom of the navbar
        setScrolled(distanceFromNavBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <Navbar scrolled={scrolled} navRef={navRef} />
      {/* HERO SECTION - Fixed, doesn't scroll */}

      <div className="pin-spacer w-full h-[85vh] lg:h-[110vh] relative box-border overflow-visible">
        <div
          className="w-full h-[85vh] lg:h-[120vh] fixed left-0 top-0 box-border"
          style={{ transform: "translate(0px, 0px)" }}
        >
          <div className="bg-[#ffff] relative overflow-hidden min-h-[80vh] flex flex-col">
            <div className="w-full mx-auto px-5 lg:px-10 pt-16 lg:pt-6 flex-grow">
              <div className="relative py-20">
                <p className="absolute text-6xl left-50 lg:left-130 top-6 lg:top-8">
                  👋
                </p>
                <p className="text-4xl lg:text-8xl lg:tracking-[5px] font-extrabold uppercase text-left z-10 relative whitespace-nowrap lg:whitespace-normal">
                  Welcome to <br />
                  my Website
                </p>
              </div>
            </div>
            <div className=" pb-40 lg:pb-20">
              <div className="flex justify-between items-end lg:items-center relative mx-auto px-5 lg:px-10">
                <div className="relative">
                  <Image
                    src="/avatar.png"
                    alt="Lakshya"
                    width={100}
                    height={100}
                    className="lg:ml-5 w-20 lg:w-30 block mr-auto"
                  />
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-right mb-5 lg:mb-0 z-10 relative">
                    I&apos;m Lakshya
                  </p>
                </div>
              </div>
            </div>
            <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
              <span className="text-xl text-black font-medium">Scroll</span>
              <span className="text-xl text-[#FFC83D]">▼</span>
            </div>
          </div>
        </div>
      </div>

      {/* BLACK SECTION - Slides up over hero */}
      <section
        id="mid-section"
        className="w-full flex flex-col gap-40 bg-black text-white pt-90 pb-30 relative z-10"
      >
        {/* about */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-20 px-5 lg:px-10">
          <div className="w-full lg:w-1/2 flex flex-col space-y-10">
            <h1 className="text-6xl font-bold">About Me</h1>
            <p className="text-xl lg:text-4xl font-extralight">
              I’m Lakshya Rana, a Full Stack Developer based in Delhi,
              passionate about creating clean, modern, and impactful web
              experiences. I love bringing ideas to life through code — turning
              concepts into functional, visually engaging digital products.
            </p>
            <div className="">
              <Image
                src="/sign.png"
                alt="Signature"
                width={100}
                height={100}
                className="w-1/2"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex lg:justify-end">
            <Image
              src="/personal.jpg"
              alt="Lakshya Rana"
              width={100}
              height={100}
              className="w-3/4 lg:w-auto lg:mt-30"
            />
          </div>
        </div>

        {/* strip */}
        <Strip />

        {/* skills */}
        <Skills />
      </section>

      <Contact />
    </div>
  );
}
