import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Dashboard";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
