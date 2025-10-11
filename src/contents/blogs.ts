import { Blog } from "@/types";

export const blogs: Blog[] = [
  {
    id: 1,
    title: "How I Built My Portfolio with Next.js",
    slug: "built-portfolio-nextjs",
    summary:
      "Step by step guide on how I created a modern portfolio using Next.js and Tailwind CSS.",
    image: "/images/blog1.jpg",
    date: "2025-08-15",
    author: "Md Mostafa Kamal",
    tags: ["Next.js", "React", "Portfolio"],
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    slug: "understanding-react-hooks",
    summary:
      "A deep dive into React hooks like useState, useEffect, and custom hooks.",
    image: "/images/blog2.jpg",
    date: "2025-09-05",
    author: "Md Mostafa Kamal",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 3,
    title: "Tailwind CSS Tips for Beginners",
    slug: "tailwind-css-tips",
    summary:
      "Practical tips and tricks to make your Tailwind CSS development faster and cleaner.",
    image: "/images/blog3.jpg",
    date: "2025-09-20",
    author: "Md Mostafa Kamal",
    tags: ["Tailwind CSS", "CSS", "Frontend"],
  },
];
