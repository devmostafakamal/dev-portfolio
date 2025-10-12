"use client";
import React from "react";
import Image from "next/image";
import { projects } from "@/contents/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="mt-30 py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="font-bold text-3xl md:text-4xl text-center mb-12 text-gray-800 dark:text-white">
        Featured Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden  transition-transform duration-300 border border-gray-200 dark:border-gray-700"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-start h-full">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold  transition"
                >
                  Live Site
                </a>
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
              {/* <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                Live site
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
