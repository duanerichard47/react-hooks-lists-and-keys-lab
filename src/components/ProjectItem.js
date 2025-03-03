import React from "react";

function ProjectItem({ name, about, technologies }) {

  const newA = technologies.map((tech, index)=>{
    return(
      <span key={index}>{tech}</span>

    )
  }
  )

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {newA}
      </div>
    </div>
  );
}

export default ProjectItem;
