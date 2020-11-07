import React from 'react';
import './submitbutton.scss';

export type tSubmitButton = {
    className?: string;
    clickHandler: (val: string) => void;
    disabled?: boolean;
    text: string;
    value?: string;
};

export const SubmitButton = (props: tSubmitButton): JSX.Element => {
    const { className, clickHandler, disabled, text, value } = props;
    return (
        <>
            <button
                className={`submit-btn ${className ? className : ''}`}
                onClick={(): void => clickHandler(value)}
                disabled={disabled}
            >
                {text}
            </button>
        </>
    );
};
