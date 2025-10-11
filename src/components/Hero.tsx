"use client";
import Image from "next/image";

import { Typewriter } from "react-simple-typewriter";
// import "react-simple-typewriter/dist/index.css";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-60 transition-colors duration-500">
      {/* ===== Left Content ===== */}
      <div className="flex-1 text-center md:text-left space-y-5">
        <h2 className="text-lg uppercase tracking-widest text-blue-600 font-semibold">
          Welcome to my portfolio
        </h2>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
          Hi, I’m <span className="text-blue-600">Mostafa</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
          <Typewriter
            words={[
              "MERN Specialist",
              "Frontend Developer",
              "Project Management Expert",
              "Problem Solver",
            ]}
            loop={0} // 0 = infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={100} // typing speed in ms
            deleteSpeed={50} // deleting speed in ms
            delaySpeed={2000} // delay before typing next word
          />
        </h2>
        <p className="max-w-lg text-gray-600 dark:text-gray-400 leading-relaxed mx-auto md:mx-0">
          I’m a MERN Stack Developer focused on building modern, scalable, and
          maintainable web applications with clean, reusable code.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition-all duration-300">
            Get In Touch
          </button>
          <button className="px-6 py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300">
            View Projects
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 pt-6 text-2xl">
          <a
            href="https://github.com/devmostafakamal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-300"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mostafa-kamal-731483379/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-300"
          >
            <SlSocialLinkedin />
          </a>
          <a
            href="dev.mostafa2025@email.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-300"
          >
            <MdOutlineMarkEmailUnread />
          </a>
        </div>
      </div>

      {/* ===== Right Image ===== */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-600/20">
          <Image
            src="/images/profile-fb.jpg"
            alt="Profile Photo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
