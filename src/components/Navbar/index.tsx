import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
  } from 'react-router-dom';
  import { About } from '../../views/About';
  import { Projects } from '../../views/Projects';
  import { Home } from '../../views/Home';

  
  import './style.scss';
  
  export const Navbar = () => {
    return (
      <>
        <Router>
          <nav className="navcont noselect">
            <h3 className="logo">Kruzus</h3>
            <div className="links">
              <Link className="item" to="/">
                Home
              </Link>
              <Link className="item" to="/projects">
                Projects
              </Link>
              <Link className="item" to="/about">
                About
              </Link>
            </div>
          </nav>
  
          <Switch>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </>
    );
  };
  
  function NoMatch() {
    let location = useLocation();
    return (
      <>
 
          No match for <code>{location.pathname}</code>
 
      </>
    );
  }