# TypeScript/React Project - Mark Carlson

React application scaffold - with Typescript, Storybook, Webpack, ESLint, and VSCode configs.

## Dependencies

Node JS: [https://nodejs.org/en/](https://nodejs.org/en/)

Check to see if node is installed first by running `node -v`

If node is not installed, use the link from [https://nodejs.org/en/](https://nodejs.org/en/) and choose the LTS version. Install Node before attempting to install Decanting UI.

## Installation

### `npm run install:dev`

This runs the install script for the root, server, and client.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://0.0.0.0:9000](http://0.0.0.0:9000) to view it in the browser.

You can also substitute your local IP in place of 0.0.0.0.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner and generates a coverage report. Run this code from the main project folder to run test suites in both `/client` and `/server` or run isolated tests in either folder using the same command.<br>

To update snapshots, run `npm run updateSnapshots` from either the root project folder or from `/client`.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Storybook

Stories for components should be included alongside the components in the `/client/src/components` folder. See example in `/client/src/components/example`. Some of the stories may have server integration. For those to work, you will need to have the server app running in another terminal. (http://localhost:3001)

Start Storybook with this script:

### `npm run storybook`
