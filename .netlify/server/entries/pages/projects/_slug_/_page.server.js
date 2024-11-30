import { p as projects } from "../../../../chunks/projects.js";
import { e as error } from "../../../../chunks/index2.js";
function load({ params }) {
  const { slug } = params;
  const project = projects[slug];
  if (!project) {
    throw error(404, "Projet non trouvé");
  }
  return { project };
}
export {
  load
};
