import React from 'react';
import { storiesOf } from '@storybook/react';

import { LANG } from 'utils/constants/LANG';

const langFlash = window.localStorage.getItem('i18n-flash');
if (langFlash) {
    window.localStorage.removeItem('i18n-flash');
}

storiesOf('Storybook Language Selection', module).add(
    'Switch Translations',
    (): JSX.Element => (
        <div>
            {LANG.filter((lang): any => lang.code !== localStorage.getItem('i18nextLng')).map((lang): any => (
                <button
                    key={lang.code}
                    onClick={(): void => {
                        window.location.replace(`${window.location.href}&lng=${lang.code}`);
                        window.localStorage.setItem('i18n-flash', `Language switched to ${lang.name}`);
                    }}
                >
                    Switch to {lang.name}
                </button>
            ))}
            <h2>{langFlash}</h2>
        </div>
    ),
);
