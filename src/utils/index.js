import theme from '../config/theme.json';

export const getTheme = (themeValue, component, attribute) => {
  // console.log(`getTheme ${themeValue} ${component} ${attribute}`);
  return theme['blaze']?.[themeValue]?.[component]?.[attribute];
};

export const getFontSize = (component, referenceValue) => {
  // console.log(`getFontSize ${component} ${referenceValue}`);
  return theme['blaze']?.fontSize?.[component]?.[referenceValue];
};
