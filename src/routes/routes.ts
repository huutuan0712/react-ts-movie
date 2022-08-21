import { IRoutes } from 'types/route';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';

export const ROUTE: IRoutes = {
  HOME: {
    path: '',
    component: Home,
    hasLayout: true,
  },
  NOTFOUND: {
    path: '*',
    component: NotFound,
  },
};
