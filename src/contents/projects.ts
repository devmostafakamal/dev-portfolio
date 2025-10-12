import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    name: "HomeHunt",
    image: "/images/homehunt-1.png", // Replace with your real image URL
    techStack: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Stripe"],
    description:
      "A real estate platform for users, agents, and admins to list, manage, and buy properties with integrated payment and wishlist features.",
    liveLink: "https://homehunt-c60d6.web.app/",
    githubClient: "https://github.com/devmostafakamal/homeHunt-client-side",
    challenges:
      "Role-based authentication, secure payment integration, and building an intuitive dashboard for different user roles.",
    improvements:
      "Adding AI-based property recommendations and enhanced search filters.",
  },
  {
    id: "2",
    name: "Marathon Management",
    image: "/images/marathon-project-1.png", // Replace with your real image URL
    techStack: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    description:
      "A full-fledged marathon event management system where organizers can add marathons, users can register, and admins can manage approvals and reports.",
    liveLink: "https://marathon-management-syst-2261d.web.app/",
    githubClient:
      "https://github.com/devmostafakamal/marathon-management-client--side",
    challenges:
      "Handling real-time registration counts, secure authentication, and dynamic date/time management for events.",
    improvements:
      "Implementing a payment gateway for registration fees and adding social sharing features.",
  },
  {
    id: "3",
    name: "Garden Apps",
    image: "/images/garden hub.png", // Replace with your real image URL
    techStack: ["React", "Firebase", "Express", "Tailwind CSS", "MongoDB"],
    description:
      "A mobile app for garden enthusiasts to track plant growth, schedule watering, and share gardening tips with a community.",
    liveLink: "https://garden-client-app.web.app/",
    githubClient: "https://github.com/devmostafakamal/GardenHub",
    challenges:
      "Implementing offline support for plant tracking and building an interactive community chat feature.",
    improvements:
      "Integrating AI to diagnose plant diseases and suggesting care tips.",
  },
];
