import Home from "containers/Home";
import { Redirect, Route, Switch } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route exact path="/results" />
    <Route exact path="/step/:slug?" />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
