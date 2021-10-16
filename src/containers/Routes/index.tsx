import Home from "containers/Home";
import Step from "containers/Step";
import { Redirect, Route, Switch } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route exact path="/results" />
    <Route component={Step} exact path="/step/:slug?" />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
