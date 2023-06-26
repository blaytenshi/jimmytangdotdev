import theme from '../config/theme.json';

export const getTheme = (themeValue, component, attribute) => {
  return theme["blaze"]?.[themeValue]?.[component]?.[attribute];
}
