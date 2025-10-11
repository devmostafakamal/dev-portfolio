function About() {
  return (
    <div className="flex items-center justify-center flex-col mt-40">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        About Me
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
        I'm <span className="font-semibold text-primary">Mostafa Kamal</span>, a
        passionate <span className="font-semibold">Full-Stack Developer</span>
        <br />
        who loves crafting clean, modern, and scalable web applications.
        <br /> My goal is to build impactful digital experiences using <br />
        technologies like{" "}
        <span className="font-semibold">
          React, Next.js, Firebase, and Node.js
        </span>
        .
      </p>
      <button className="px-6 mt-6 py-3 border border-primary text-primary rounded-xl font-medium hover:bg-blue-700 hover:text-white transition">
        Contact Me
      </button>
    </div>
  );
}

export default About;
