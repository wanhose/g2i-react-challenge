import { Redirect, Route, Switch } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/:slug" />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
