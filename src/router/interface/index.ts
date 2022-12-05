export interface MetaProps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title: string;
  key?: string;
}

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  // https://github.com/remix-run/react-router/pull/9343
  // index?: boolean;
  path?: string;
  meta?: MetaProps;
  isLink?: string;
}
