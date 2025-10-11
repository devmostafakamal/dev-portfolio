export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  live: string;
  slug: string;
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
