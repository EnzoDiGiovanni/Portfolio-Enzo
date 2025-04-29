import projects from "$lib/data/projects.json";
import { error } from "@sveltejs/kit";

/** @type {import('../$types.js').PageServerLoad} */
export function load({ params }) {
  const { slug } = params;

  const project = projects[slug];

  if (!project) {
    throw error(404, "Projet non trouvé");
  }

  return { project };
}
