import { createBrowserRouter } from 'react-router-dom';

import pagesConfig from '../config/pages.json';
import routeFactory from '../utils/route-factory.js';

const router = createBrowserRouter(routeFactory(pagesConfig));

export default router;
