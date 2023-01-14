import { Switch } from 'react-router-dom';
import getRoutesByRole from '../utils/getRoutesByRole';
import RouteRenderer from './RouteRenderer';

const Routes = () => {
  /**
   * TODO use a global state management to store values like auth user role and JWT
   * * such as Redux or Context API.
   * * also consider scale of project if the is going to be a lot of pages. Then it make more
   * * sense to lazy load components or consider migrating to a framework with SSR support
   */
  const role = null;
  return (
    <Switch>
      {getRoutesByRole(role).map((props, index) => (
        <RouteRenderer key={index} exact={true} {...props} />
      ))}
    </Switch>
  );
};

export default Routes;
