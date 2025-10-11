import Hero from "@/components/Hero";
import About from "./about/page";
import Project from "./projects/page";
import Skills from "./skills/page";
import ContactPage from "./contact/page";
export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="contact">
        <ContactPage />
      </div>
    </div>
  );
}
