import { memo } from 'react';
import { Route } from 'react-router-dom';

const RouteComponent = memo(({ ...args }) => <Route {...args} />);
RouteComponent.displayName = 'Route Component';
function RouteRenderer({ ...rest }) {
  return <Route render={<RouteComponent {...rest} />} />;
}

export default RouteRenderer;
