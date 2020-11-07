import React from 'react';
import { cleanup, render, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SubmitButton } from 'components/SubmitButton/SubmitButton';

afterAll(cleanup);

describe('<SubmitButton />', (): void => {
    const defaultProps = {
        clickHandler: jest.fn(),
        text: 'Click me',
    };
    it('should render correctly', (): void => {
        const { asFragment, container } = render(<SubmitButton {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
        const btn = getByText(container, defaultProps.text);
        btn.click();
        expect(defaultProps.clickHandler).toHaveBeenCalled();
    });
    it('should render correctly with a class', (): void => {
        const { asFragment } = render(<SubmitButton {...defaultProps} className="special-class" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
