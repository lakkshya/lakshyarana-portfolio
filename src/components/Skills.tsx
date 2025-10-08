import { useEffect, useRef } from "react";
import Image from "next/image";

const Skills = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const scrollSpeed = 1; // adjust speed here
    let animationFrame: number;

    const scroll = () => {
      el.scrollLeft += scrollSpeed;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // Stop auto-scroll while user is dragging/touching
    const handleUserScrollStart = () => cancelAnimationFrame(animationFrame);
    const handleUserScrollEnd = () => {
      animationFrame = requestAnimationFrame(scroll);
    };

    el.addEventListener("touchstart", handleUserScrollStart);
    el.addEventListener("mousedown", handleUserScrollStart);
    el.addEventListener("touchend", handleUserScrollEnd);
    el.addEventListener("mouseup", handleUserScrollEnd);

    return () => {
      cancelAnimationFrame(animationFrame);
      el.removeEventListener("touchstart", handleUserScrollStart);
      el.removeEventListener("mousedown", handleUserScrollStart);
      el.removeEventListener("touchend", handleUserScrollEnd);
      el.removeEventListener("mouseup", handleUserScrollEnd);
    };
  }, []);

  const skills = [
    "java",
    "javascript",
    "nodejs",
    "express",
    "react",
    "git",
    "mongodb",
    "mysql",
    "postgresql",
    "postman",
    "tailwindcss",
    "vscode",
  ];

  return (
    <div className="w-full flex flex-col items-center gap-20">
      <h1 className="text-6xl font-extrabold text-center">My Skills</h1>

      <div className="relative w-2/3  overflow-hidden">
        {/* fade edges */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>

        {/* marquee container */}

        <div
          ref={marqueeRef}
          className="flex gap-10 overflow-x-scroll scroll-smooth cursor-grab active:cursor-grabbing scrollbar-none whitespace-nowrap py-5"
        >
          {[...skills, ...skills].map((skill, index) => (
            <Image
              key={index}
              src={`/skills/${skill}.svg`}
              alt={skill}
              width={80}
              height={80}
              className="hover:scale-110 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
