import { JSX } from "react";

// Define allowed categories
export type Category =
  | "Frontend"
  | "Backend"
  | "Tools"
  | "SoftSkills"
  | "Others"
  | "All";

export interface Project {
  id: string;
  name: string;
  image: string;
  techStack: string[];
  description: string;
  liveLink: string;
  githubClient: string;
  challenges: string;
  improvements: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  summary: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}
export interface Skill {
  name: string;
  category: Exclude<Category, "All">; // exclude "All"
  icon: JSX.Element;
}
