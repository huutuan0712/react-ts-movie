import React from 'react';

interface IRoute {
  path: string;
  component: React.ReactNode<any>;
  hasLayout?: boolean;
}
interface IRoutes {
  [x: string]: IRoute;
}
export type { IRoute, IRoutes };
