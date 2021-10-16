import Home from 'containers/Home';
import Results from 'containers/Results';
import Step from 'containers/Step';
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Results} exact path="/results" />
    <Route component={Step} exact path="/step/:index" />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
