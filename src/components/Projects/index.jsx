import { useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import studyCase from '../../data/study-case.js';
import DisplayProject from 'components/DisplayProject';

const Projects = () => {
  let { projectSlug } = useParams();
  let [currentProject, setCurrentProject] = useState(undefined);

  useEffect(() => {
    let foundProject = studyCase.find((project) => project.slug === projectSlug);
    setCurrentProject(foundProject);
  }, [ projectSlug ])

  return(
    <div>
      {currentProject === undefined ? "" : <DisplayProject companyName={currentProject.companyName} title={currentProject.title} story={currentProject.story}/>}
    </div>
  )
};

export default Projects;
