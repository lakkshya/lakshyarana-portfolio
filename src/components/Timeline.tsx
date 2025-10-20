import { useState } from "react";
import TimelineCard from "./TimelineCard";

const timelineObjects = [
  {
    title: "The Beginning",
    description:
      "Entered the world in Delhi, setting the stage for a journey driven by curiosity, creativity, and an eagerness to explore how things work.",
    year: "2002",
  },
  {
    title: "First Steps",
    description:
      "Started school and discovered the excitement of learning, building a strong foundation for curiosity, logic, and creative problem-solving.",
    year: "2007",
  },
  {
    title: "Digital Discovery",
    description:
      "Began my undergraduate journey in Computer Science at Delhi University, diving deep into coding, algorithms, and software development concepts.",
    year: "2020",
  },
  {
    title: "Leveling Up",
    description:
      "Pursued an MCA at Bharati Vidyapeeth to strengthen my technical expertise and explore the art of designing and building scalable digital systems.",
    year: "2023",
  },
  {
    title: "Craft Mastery",
    description:
      "Completed my MCA, ready to transform ideas into impactful digital experiences and contribute to meaningful, real-world technology solutions.",
    year: "2025",
  },
  {
    title: "Future Vision",
    description:
      "Continuing to grow, innovate, and collaborate — while exploring opportunities to craft solutions that inspire, connect, and create lasting impact.",
    year: "More",
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? timelineObjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % timelineObjects.length);
  };

  return (
    <div className="relative w-full max-w-5xl flex items-center justify-center">
      {/* Large screens - show all books */}
      <div className="hidden lg:flex items-end gap-2 h-64">
        {timelineObjects.map((event, index) => (
          <div
            key={index}
            className={`flex-shrink-0 transition-all duration-500 ease-in-out ${
              index === activeIndex ? "w-96" : "w-12"
            } h-64`}
          >
            {index === activeIndex ? (
              <TimelineCard event={event} />
            ) : (
              <div
                className={`h-full w-full flex items-end justify-center rounded-t-sm bg-gray-300 shadow-lg cursor-pointer hover:brightness-110 transition-all pb-4`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="text-black text-normal font-semibold tracking-widest transform mb-5 -rotate-90 select-none">
                  {event.year}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Small/Medium screens - show prev/active/next */}
      <div className="flex lg:hidden items-end gap-2 h-64 w-full max-w-md">
        {/* Previous book */}
        {activeIndex > 0 && (
          <div
            className="flex-shrink-0 w-12 h-64 flex items-end justify-center rounded-t-sm bg-gray-700 shadow-lg cursor-pointer hover:brightness-110 transition-all pb-4 border-t border-x border-gray-700"
            onClick={handlePrev}
          >
            <span className="text-gray-400 text-xs font-semibold tracking-wider transform mb-5 -rotate-90 select-none uppercase">
              Prev
            </span>
          </div>
        )}

        {/* Active card */}
        <div className="flex-1 h-64">
          <TimelineCard event={timelineObjects[activeIndex]} />
        </div>

        {/* Next book */}
        {activeIndex < timelineObjects.length - 1 && (
          <div
            className="flex-shrink-0 w-12 h-64 flex items-end justify-center rounded-t-sm bg-gray-700 shadow-lg cursor-pointer hover:brightness-110 transition-all pb-4 border-t border-x border-gray-700"
            onClick={handleNext}
          >
            <span className="text-gray-400 text-xs font-semibold tracking-wider transform mb-5 -rotate-90 select-none uppercase">
              Next
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
