import layoutFactory from './layout-factory.js';

const routeFactory = (routes) => {
  const builtRoutes = routes.reduce((accRoutes, currentRoute) => {
    accRoutes.push({
      path: currentRoute.path,
      element: layoutFactory(currentRoute.layout, currentRoute.areas),
    });

    return accRoutes;
  }, []);

  console.log('builtRoutes', builtRoutes);

  return builtRoutes;
};

export default routeFactory;
