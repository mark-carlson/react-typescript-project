import React from 'react';
import renderer from 'react-test-renderer';
import App from 'App';

describe('App', () => {
    it('Shows Hello World initially', (): void => {
        const app = renderer.create(<App />);

        expect(app).toMatchSnapshot();
    });
});
