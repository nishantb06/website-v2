// ProjectPosts.tsx

"use client";

import ReviewCard from "@/components/project-showcase-vertical";
import { projectsData } from "@/components/data/projects";

const ProjectPosts = () => {
  const projects = projectsData;

  return projects.map((project) => (
    <ReviewCard key={project.slug} {...project} />
  ));
};

export default ProjectPosts;