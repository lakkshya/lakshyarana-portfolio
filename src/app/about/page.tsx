import Image from "next/image";
import Strip from "@/components/Strip";
import Timeline from "@/components/Timeline";

const About = () => {
  return (
    <section className="w-full flex flex-col gap-40">
      {/* about me */}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-20 px-5 lg:px-10">
        <div className="w-full lg:w-1/2 flex flex-col space-y-10">
          <h1 className="text-6xl font-bold">About Me</h1>
          <p className="text-xl lg:text-4xl font-extralight">
            I’m Lakshya Rana, a Full Stack Developer based in Delhi, passionate
            about creating clean, modern, and impactful web experiences. I love
            bringing ideas to life through code — turning concepts into
            functional, visually engaging digital products.
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

      {/* more about me */}
      <div className="flex flex-col items-center gap-30">
        <h1 className="text-6xl font-bold">More about me</h1>

        {/* timeline */}
        <Timeline />

        <p className="w-1/2 text-xl lg:text-4xl font-extralight text-center">
          My approach focuses on blending minimalist design with modern
          technology to create experiences that are intuitive, functional, and
          visually cohesive. I believe in thoughtful, user-centered development
          — where every decision serves a purpose and every project pushes
          creativity forward.
        </p>
      </div>
    </section>
  );
};

export default About;
