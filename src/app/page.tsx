"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [midWidth, setMidWidth] = useState(90);
  const [contactWidth, setContactWidth] = useState(60);
  const navRef = useRef<HTMLElement>(null);
  const midRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

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

  // Smooth expansion of mid-section tied directly to scroll
  useEffect(() => {
    const handleMidScroll = () => {
      if (!midRef.current) return;

      const rect = midRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startTrigger = viewportHeight * 0.8;
      const endTrigger = viewportHeight * 0.5;

      let progress = (startTrigger - rect.top) / (startTrigger - endTrigger);
      progress = Math.min(Math.max(progress, 0), 1);

      // Slightly softer easing for real-time sync
      const eased = progress * progress * (3 - 2 * progress);

      const width = 90 + eased * 10;
      setMidWidth(width);
    };

    window.addEventListener("scroll", handleMidScroll, { passive: true });
    handleMidScroll();
    return () => window.removeEventListener("scroll", handleMidScroll);
  }, []);

  // Smooth expansion of contact-section tied directly to scroll
  useEffect(() => {
    const handleContactScroll = () => {
      if (!contactRef.current) return;

      const rect = contactRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startTrigger = viewportHeight * 0.8;
      const endTrigger = viewportHeight * 0.5;

      let progress = (startTrigger - rect.top) / (startTrigger - endTrigger);
      progress = Math.min(Math.max(progress, 0), 1);

      const eased = progress * progress * (3 - 2 * progress);

      const width = 60 + eased * 40;
      setContactWidth(width);
    };

    window.addEventListener("scroll", handleContactScroll, { passive: true });
    handleContactScroll();
    return () => window.removeEventListener("scroll", handleContactScroll);
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
        ref={midRef}
        id="mid-section"
        className="w-full flex flex-col gap-10 bg-black text-white pt-90 relative z-10 mx-auto"
        style={{
          width: `${midWidth}%`,
          willChange: "width",
        }}
      >
        {/* about */}
        <section id="about" className="pt-10">
          <About />
        </section>

        {/* skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact section with ultra-smooth expansion */}
        <section
          ref={contactRef}
          id="contact"
          className="mx-auto"
          style={{
            width: `${contactWidth}%`,
            willChange: "width",
          }}
        >
          <Contact />
        </section>
      </section>
    </div>
  );
}
