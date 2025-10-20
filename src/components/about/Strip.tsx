import { useState, useEffect } from "react";

const Strip = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text1 = "Lakshya Rana • ";
  const text2 = "Personal Website • ";

  // Repeat enough times to fill the screen and beyond
  const repeatedText1 = text1.repeat(100);
  const repeatedText2 = text2.repeat(100);

  return (
    <div className="relative flex flex-col bg-white/10 border-y border-gray-700 py-2 overflow-hidden">
      {/* Top strip - scrolls right */}
      <div className="flex whitespace-nowrap will-change-transform">
        <div
          className="inline-block"
          style={{
            transform: `translateX(${scrollY * 0.2 - 1000}px)`,
          }}
        >
          <span className="text-4xl tracking-[2px] font-extrabold italic mx-4">
            {repeatedText1}
          </span>
        </div>
      </div>

      {/* Bottom strip - scrolls left */}
      <div className="flex whitespace-nowrap will-change-transform">
        <div
          className="inline-block"
          style={{
            transform: `translateX(-${scrollY * 0.2}px)`,
          }}
        >
          <span className="text-2xl tracking-[2px] font-extralight mx-4">
            {repeatedText2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Strip;
