"use client"

import { createContext, useContext, useState } from "react";
import ProjectModal from "@/components/project-modal";
import type { ProjectOverview } from "@/lib/project-overviews";

// Renders the project modal from the root layout instead of inside a page, so it
// stays on screen while the scroll ring navigates to the project page underneath,
// then slides away to reveal it.
const ProjectModalContext = createContext<(project: ProjectOverview) => void>(() => {});

export const useOpenProjectModal = () => useContext(ProjectModalContext);

export function ProjectModalHost({ children }: { children: React.ReactNode }) {
  const [project, setProject] = useState<ProjectOverview | null>(null);
  return (
    <ProjectModalContext.Provider value={setProject}>
      {children}
      <ProjectModal project={project} onClose={() => setProject(null)} />
    </ProjectModalContext.Provider>
  );
}
