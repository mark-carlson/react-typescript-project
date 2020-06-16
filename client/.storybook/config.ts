/*  eslint  @typescript-eslint/explicit-function-return-type: 0 */
import { configure, addParameters, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
//import { withInfo } from '@storybook/addon-info';
import 'styles/Main.css';
import 'styles/App.css';
import 'i18nLoader';
// Import all locales here.  English is not required.
import 'moment/locale/es';

//default to not show actions panel.  This can be overwritten in component stories.
addParameters({
    options: {
        showPanel: false,
    },
});

//addDecorator(withInfo);
addDecorator(StoryRouter());

// automatically import all files ending in *.stories.js
function loadStories() {
    const req = require.context('../stories', true, /\.stories\.tsx$/);
    req.keys().forEach(req);
}

configure(loadStories, module);
