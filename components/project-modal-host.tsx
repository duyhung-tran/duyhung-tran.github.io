"use client"

import { createContext, useCallback, useContext, useState } from "react";
import ProjectModal from "@/components/project-modal";
import type { ProjectOverview } from "@/lib/project-overviews";

// Renders the project modal from the root layout instead of inside a page, so it
// stays on screen while the scroll ring navigates to the project page underneath,
// then slides away to reveal it.
// The tile it was opened from (if any), so the modal can grow out of it and shrink back into it
const ProjectModalContext = createContext<(project: ProjectOverview, origin?: HTMLElement) => void>(() => {});

export const useOpenProjectModal = () => useContext(ProjectModalContext);

export function ProjectModalHost({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<{ project: ProjectOverview; origin?: HTMLElement } | null>(null);
  const openModal = useCallback((project: ProjectOverview, origin?: HTMLElement) => setOpen({ project, origin }), []);
  return (
    <ProjectModalContext.Provider value={openModal}>
      {children}
      {/* The home page's modal is the wide one; the archive page renders its own, normal width */}
      <ProjectModal project={open?.project ?? null} origin={open?.origin} onClose={() => setOpen(null)} wide />
    </ProjectModalContext.Provider>
  );
}
