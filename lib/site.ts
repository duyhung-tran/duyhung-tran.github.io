// Projects Mr. Fork can show as cards in the chat. Images match the home grid.

export type Project = {
  id: "knoxagent" | "organizations" | "health" | "geofence";
  name: string;
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "knoxagent",
    name: "Samsung Knox in-console AI agent",
    href: "/knoxagent",
    image: "/yuhh.png",
  },
  {
    id: "organizations",
    name: "Knox Manage's organizations table",
    href: "/organizations",
    image: "/orga.png",
  },
  {
    id: "health",
    name: "Samsung Health research initiatives",
    href: "/health",
    image: "/health logo.png",
  },
  {
    id: "geofence",
    name: "Knox Manage's geofence creation",
    href: "/rules",
    image: "/geofenceee.png",
  },
];

export function getProject(id: Project["id"]) {
  return projects.find((p) => p.id === id)!;
}
