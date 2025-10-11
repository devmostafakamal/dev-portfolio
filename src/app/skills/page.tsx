"use client";

import { useState } from "react";
import {
  Code,
  Lock,
  Layout,
  Settings,
  Brain,
  Users,
  MessageSquare,
} from "lucide-react";
import { Skill } from "@/types";
import { CubeIcon } from "@heroicons/react/24/outline";

type Category = "All" | "Frontend" | "Backend" | "Tools" | "SoftSkills";

const allSkills: Skill[] = [
  // === Frontend ===
  { name: "React", category: "Frontend", icon: <Layout className="w-6 h-6" /> },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
  },

  // === Backend ===
  { name: "Node.js", category: "Backend", icon: <Code className="w-6 h-6" /> },
  {
    name: "Express.js",
    category: "Backend",
    icon: <Code className="w-6 h-6" />,
  },
  { name: "Nest.js", category: "Backend", icon: <Code className="w-6 h-6" /> },
  {
    name: "MongoDB",
    category: "Backend",
    icon: <CubeIcon className="w-6 h-6" />,
  },
  {
    name: "Mongoose",
    category: "Backend",
    icon: <CubeIcon className="w-6 h-6" />,
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    icon: <CubeIcon className="w-6 h-6" />,
  },
  {
    name: "Prisma",
    category: "Backend",
    icon: <CubeIcon className="w-6 h-6" />,
  },
  {
    name: "Redis",
    category: "Backend",
    icon: <CubeIcon className="w-6 h-6" />,
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: <Code className="w-6 h-6" />,
  },
  { name: "JWT", category: "Backend", icon: <Lock className="w-6 h-6" /> },
  { name: "Python", category: "Backend", icon: <Code className="w-6 h-6" /> },
  { name: "Firebase", category: "Backend", icon: <Lock className="w-6 h-6" /> },
  { name: "Zod", category: "Backend", icon: <Code className="w-6 h-6" /> },

  // === Tools ===
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    name: "Postman",
    category: "Tools",
    icon: <Settings className="w-6 h-6" />,
  },

  // === Soft Skills ===
  {
    name: "Teamwork",
    category: "SoftSkills",
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Leadership",
    category: "SoftSkills",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    name: "Communication",
    category: "SoftSkills",
    icon: <MessageSquare className="w-6 h-6" />,
  },
];

const categories: Category[] = [
  "All",
  "Frontend",
  "Backend",
  "Tools",
  "SoftSkills",
];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="min-h-screen mt-30 py-16 px-6 bg-[#f6f3ff] dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          My <span className="text-indigo-500">Skills</span>
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I've worked with a range of technologies in the web development world,
          from back-end to front-end and project management.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              activeCategory === category
                ? "bg-indigo-500 text-white shadow"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-indigo-100 dark:bg-gray-800 dark:text-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-md transition-all text-indigo-500"
          >
            {skill.icon}
            <p className="mt-3 font-medium text-gray-800 dark:text-gray-200">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
