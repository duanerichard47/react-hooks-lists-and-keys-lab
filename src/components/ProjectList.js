import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const newProjects = projects.Map(project=> {
return( 
  <div key= {project.id}>
    {project}
  </div>
)
 })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{newProjects}</div>
      <ProjectItem  name={projects.name} about={projects.about} technologies={projects.technologies} />
    </div>
  );
}

export default ProjectList;


