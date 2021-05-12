import workImage from 'assets/images/work.jpg';
import React, { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const DisplayProject = (props) => {

  const {theme} = useContext(ThemeContext);

  return(
    <div className="fieldProject">
      <div>
        <hr className={theme ? 'hr-work dark' : 'hr-work'} />
        <p className={theme ? 'work-cName dark' : 'work-cName'} src={workImage}>{props.companyName}</p>
        <p className={theme ? 'work-title dark' : 'work-title'} src={workImage}>{props.title}</p>
        <p className={theme ? 'work-story dark' : 'work-story'} src={workImage}>{props.story}</p>
      </div>
      <div>
        <img className={theme ? 'img-work dark' : 'img-work'} src={workImage} alt="On working" />
      </div>
    </div>
    )
};

export default DisplayProject;
