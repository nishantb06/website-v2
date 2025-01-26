export interface Project {
  name: string;
  body: string;
  slug: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    name: "SmolLM",
    body: "A lightweight language model implementation focused on efficiency and learning. Built with PyTorch, this project demonstrates core concepts of transformer architecture and natural language processing.",
    slug: "smolLm",
    image: "/images/projects/smolLm.png" // Add actual image path if you have one, or remove if not needed
  }
];