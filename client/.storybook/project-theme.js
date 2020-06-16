import { create } from '@storybook/theming/create';

export default create({
    base: 'light',

    colorPrimary: '#EF5045',
    colorSecondary: '#4CA092',

    // UI
    appBg: 'white',
    appContentBg: '#F8F8F8',
    appBorderColor: '#D3D3D3',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Muli", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#363738',
    textInverseColor: '#FFFFFF',

    // Toolbar default and active colors
    barTextColor: '#797979',
    barSelectedColor: '#363738',
    barBg: '#EEEEEE',

    // Form colors
    inputBg: 'white',
    inputBorder: '#333333',
    inputTextColor: '#363738',
    inputBorderRadius: 4,

    brandTitle: 'TypeScript/React Project',
    brandUrl: 'https://github.com/mark-carlson/react-typescript-project',
    brandImage: 'https://miro.medium.com/max/872/0*pf_e5mrU5F7NhlnP.png',
});
