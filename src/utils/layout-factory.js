import { createElement } from 'react';
import widgetsFactory from './widgets-factory.js';
import layouts from '../layouts';

const layoutFactory = (layoutName, areas) => {
  const areasEntries = Object.entries(areas);

  const populatedAreasWithWidgets = areasEntries.reduce(
    (accAreas, [areaName, areaWidgetList]) => {
      return {
        ...accAreas,
        [areaName]: widgetsFactory(areaWidgetList, layoutName, areaName)
      };
    },
    {}
  );

  return createElement(layouts[layoutName], { ...populatedAreasWithWidgets });
};

export default layoutFactory;
