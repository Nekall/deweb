import { useParams } from "react-router-dom";
import React from "react";

const Projects = () => {
  let { projectSlug } = useParams();

  return(
    <div>
      {projectSlug === 'platon-study-case' ? <p>Platon</p> : ""}
      {projectSlug === 'solane-study-case' ? <p>Solane</p> : ""}
      {projectSlug === 'sedal-study-case' ? <p>Sedal</p> : ""}
    </div>
  )
};

export default Projects;
