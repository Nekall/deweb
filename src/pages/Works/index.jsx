import { Switch, Route, Link } from 'react-router-dom';
import Projects from 'components/Projects';
import React, { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext';


const Works = () => {
  const {theme} = useContext(ThemeContext);

  return(
    <div className={theme ? 'WorksPage dark' : 'WorksPage'}>
      <div className="works-section1">
        <Link className={theme ? 'links-project dark' : 'links-project'} to="/works/platon-study-case" >Platon</Link>
        <Link className={theme ? 'links-project dark' : 'links-project'} to="/works/solane-study-case" >Solane</Link>
        <Link className={theme ? 'links-project dark' : 'links-project'} to="/works/sedal-study-case" >Sedal</Link>
      </div>
      <Switch>
        <Route path="/works/:projectSlug">
          <Projects />
        </Route>
      </Switch>
    </div>
    )
};

export default Works;
