import Layout from '../layouts';
import { Route, Routes as RouteWrapper } from 'react-router-dom';
import { ROUTE } from './routes';

export default function Routes() {
  return (
    <RouteWrapper>
      {Object.values(ROUTE).map((route, index) =>
        route.hasLayout ? (
          <Route key={index} element={<Layout />}>
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          </Route>
        ) : (
          <Route key={index} path={route.path} element={<route.component />} />
        )
      )}
    </RouteWrapper>
  );
}
