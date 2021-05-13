import work1Image from 'assets/images/work1.jpg';
import work2Image from 'assets/images/work2.jpg';
import work3Image from 'assets/images/work3.jpg';
import React, { useContext, useState } from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const DisplayProject = (props) => {
  let [selectPhoto, setSelectPhoto] = useState();
  const {theme} = useContext(ThemeContext);

  if(props.companyName === "Platon"){
    selectPhoto = work2Image;
  }else if(props.companyName === "Solane") {
    selectPhoto = work3Image;
  } else {
    selectPhoto = work1Image;
  }

  return(
    <div className="fieldProject">
      <div>
        <hr className={theme ? 'hr-work dark' : 'hr-work'} />
        <p className={theme ? 'work-cName dark' : 'work-cName'}>{props.companyName}</p>
        <p className={theme ? 'work-title dark' : 'work-title'}>{props.title}</p>
        <p className={theme ? 'work-story dark' : 'work-story'}>{props.story}</p>
      </div>
      <div>
        <img className={theme ? 'img-work dark' : 'img-work'} src={selectPhoto} alt="On working" />
      </div>
    </div>
    )
};

export default DisplayProject;
