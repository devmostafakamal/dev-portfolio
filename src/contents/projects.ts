import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Marathon Event Manager",
    description:
      "A full-featured event management app with Firebase, JWT, and admin dashboard.",
    image: "/images/marathon.png",
    techStack: ["React", "Firebase", "Node.js", "JWT"],
    github: "https://github.com/yourusername/marathon-app",
    live: "https://marathon-app.vercel.app",
    slug: "marathon-event-manager",
  },
  {
    id: 2,
    title: "Parcel Delivery System",
    description:
      "Logistics management app with real-time tracking and Firebase authentication.",
    image: "/images/parcel.png",
    techStack: ["React", "Tailwind", "Firestore", "Mapbox"],
    github: "https://github.com/yourusername/parcel-delivery",
    live: "https://parcel-delivery.vercel.app",
    slug: "parcel-delivery-system",
  },
];
