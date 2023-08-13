import {createElement, Fragment} from 'react';
import widgets from '../widgets/';

const widgetsFactory = (widgetList, layoutName, areaName) => {
  const instantiatedWidgets = widgetList.map(
      ({name: WidgetName, props: WidgetProps}) => {
      // even though createElement is a part of React LegacyAPIs there's no plans to migrate this for now

        return createElement(widgets[WidgetName], {
          key: `${WidgetName} ${Math.random()}`,
          ...WidgetProps,
        });
      },
  );

  const Widgets = () => createElement(Fragment, null, instantiatedWidgets);

  Widgets.displayName = `${layoutName}-${areaName}`;

  return Widgets;
};

export default widgetsFactory;
