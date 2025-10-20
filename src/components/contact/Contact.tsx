import Link from "next/link";
import Image from "next/image";
import {
  LuCornerDownRight,
  LuInstagram,
  LuLinkedin,
  LuGithub,
} from "react-icons/lu";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center gap-16 px-5 lg:px-10 pt-50 pb-20 relative z-10">
      <div className="flex justify-center">
        <h1 className="text-[3rem] lg:text-[6rem] font-bold">Get in Touch</h1>
      </div>

      <div className="relative w-full flex flex-col gap-15">
        <div className="w-3/5">
          <p className="text-3xl lg:text-6xl font-medium">
            Got an idea brewing? Let&apos;s bring it to life!
          </p>
        </div>

        {/* Mail */}
        <div className="flex gap-3">
          <LuCornerDownRight className="text-3xl" />
          <p className="lg:text-3xl">work.lakshyarana@gmail.com</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5">
          <Link
            href="https://www.linkedin.com/in/lakshyarana21/"
            target="_blank"
          >
            <div className="w-12 h-12 flex justify-center items-center border border-gray-300 p-1 rounded-full hover:scale-110 transition-transform duration-200">
              <LuLinkedin className="text-3xl" />
            </div>
          </Link>
          <Link href="https://github.com/lakkshya" target="_blank">
            <div className="w-12 h-12 flex justify-center items-center border border-gray-300 p-1 rounded-full hover:scale-110 transition-transform duration-200">
              <LuGithub className="text-3xl" />
            </div>
          </Link>
          <Link href="https://www.instagram.com/_lakkshya" target="_blank">
            <div className="w-12 h-12 flex justify-center items-center border border-gray-300 p-1 rounded-full hover:scale-110 transition-transform duration-200">
              <LuInstagram className="text-3xl" />
            </div>
          </Link>
        </div>

        {/* Sign */}
        <Image
          src="/sign-contact.png"
          alt="Signature"
          width={100}
          height={100}
          className="w-1/2 lg:w-1/5"
        />

        {/* Back to top */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-90 flex items-center hover:scale-110 transition-transform duration-200 cursor-pointer"
        >
          <span className="text-3xl font-medium text-red-600">&lt; &nbsp;</span>
          <span className="text-xl font-medium text-red-600">Back to Top</span>
        </div>
      </div>

      <div className="flex justify-end">
        <p className="text-xl font-medium">
          Thank you for visiting! Let&apos;s stay connected.
        </p>
      </div>
    </section>
  );
};

export default Contact;
