import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Projects from 'components/Projects';


const Works = () => (
  <div className="WorksPage">
    <Link to="/works/platon-study-case" >Platon</Link>
    <Link to="/works/solane-study-case" >Solane</Link>
    <Link to="/works/sedal-study-case" >Sedal</Link>

    <Switch>
      <Route path="/works/:projectSlug">
        <Projects />
      </Route>
    </Switch>

  </div>
);

export default Works;
