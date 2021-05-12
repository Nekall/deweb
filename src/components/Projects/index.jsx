import { useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import studyCase from '../../data/study-case.js';

const Projects = () => {
  let { projectSlug } = useParams();
  let [currentProject, setCurrentProject] = useState(undefined);

  useEffect(() => {
    let foundProject = studyCase.find((project) => project.slug === projectSlug);
    setCurrentProject(foundProject);
  }, [ projectSlug ])

  return(
    <div>
      {currentProject === undefined ? <p>Can't view this infos</p> : <p>{currentProject.companyName}</p>}
      {currentProject === undefined ? <p>Can't view this infos</p> : <p>{currentProject.title}</p>}
      {currentProject === undefined ? <p>Can't view this infos</p> : <p>{currentProject.story}</p>}
    </div>
  )
};

export default Projects;
