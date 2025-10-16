"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

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

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 500);
  };

  useEffect(() => {
    let frameId: number;
    const scroll = () => {
      if (scrollRef.current && !isPaused) {
        scrollRef.current.scrollLeft += 0.5;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(scroll);
    };
    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  return (
    <section className="w-full flex flex-col items-center py-20">
      <h1 className="text-6xl font-extrabold text-center mb-20">My Skills</h1>

      <div className="relative w-full lg:w-2/3 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-10 py-5 overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
        >
          <div className={`flex gap-10 `}>
            {[...skills, ...skills, ...skills, ...skills, ...skills].map(
              (skill, index) => (
                <Image
                  key={index}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={80}
                  height={80}
                  draggable={false}
                  priority
                  className="flex-shrink-0 w-20 h-20 transition-transform duration-200 hover:scale-110 select-none"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
