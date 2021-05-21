import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { About } from "../views/About";
import { Projects } from "../views/Projects";
import { Home } from "../views/Home";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <>
      <Router>
        <Navbar />

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
  const location = useLocation();
  return (
    <>
      No match for <code>{location.pathname}</code>
    </>
  );
}
