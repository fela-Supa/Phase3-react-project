import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import { Switch, Route, useParams } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Projects from './Projects';
import AddProject from './AddProject';
import ProjectMembers from './ProjectMembers';

function App() {
  const [user, setUser] = useState(true);
  const [projects, setProjects] = useState([])
  const { id } = useParams();

  return (
    <div className='App'>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path='/login'>
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path='/projects'>
          <Projects projects={projects} setProjects={setProjects} />
        </Route>
        <Route exact path='/add-project'>
          <AddProject />
        </Route>
        <Route exact path='/project/:id'>
          <ProjectMembers />
        </Route>
        <Route exact path='/'>
          <Home user={user} setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
