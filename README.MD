# jimmytangdotdev

## Overview
This is the code repository for my personal web page. Nothing special.

## Features
### Atomic Design, Styled-Components, Storybook...
Because the application is built with atomic design pattern and styled-styled components there is a Storybook to render
components used.

### Route Configuration though Config File
The routing in the application is configured through a JSON configuration file. It allows the user to specify what 
widgets are rendered in each page using which layout. This is a pattern to allow configurable routes and pages as
needed.

## Application Running
There are a few commands in the `package.json` to support development and deployment (obviously, prefix with the `yarn` 
command):
### `yarn dev`
Will run a website in a local dev server on port 8080

### `yarn build`
Will build the website into the `./dist` folder...K

### `yarn lint`
Runs ESLint on all js and jsx files

### `yarn preview`
Changed this from the usual `vite preview` command. Made it build into the `./dist` folder first before attempting to
serve the files inside of it on port 4173

### `yarn storybook`
Runs the Storybook locally to preview components.

### `yarn build-storybook`
Builds a deployable version of the Storybook of components. Probably won't really need this but let's see.

Will need to set up some commands in the future to trigger automated deployments but let's see. Or I may even convert
to using `makefiles` so it's a more standardised process compatible with linux...

## Application Deployment
Will talk about the deployment process some other time... Once I figure out the full process using AWS...

## Dependencies Manifest
Below is a dependencies manifest. I find that it's all too easy to forget why we use certain dependencies in the first
place...

### Dependencies
* @brainhubeu/react-carousel
* react
* react-dom
* react-router-dom
* styled-components

### Dev Dependencies
* @storybook/addon-essentials
* @storybook/addon-interactions
* @storybook/addon-links
* @storybook/addon-mdx-gfm
* @storybook/addon-styling
* @storybook/blocks
* @storybook/react
* @storybook/react-vite
* @storybook/testing-library
* @types/react
* @types/react-dom
* @vitejs/plugin-react
* eslint
* eslint-plugin-react
* eslint-plugin-react-hooks
* eslint-plugin-react-refresh
* eslint-plugin-storybook
* prop-types
* storybook
* vite
* vite-plugin-svgr
