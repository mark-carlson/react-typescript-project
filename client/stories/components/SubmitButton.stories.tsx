import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { SubmitButton, tSubmitButton } from 'components/SubmitButton/SubmitButton';

export default {
    title: 'Survey/Submit Button',
    component: SubmitButton,
    argTypes: {
        clickHandler: {
            action: 'Button clicked',
            table: { disable: true },
        },
    },
} as Meta;

const Template: Story<tSubmitButton> = args => <SubmitButton {...args} />;
export const SubmitBtn = Template.bind({});

SubmitBtn.args = {
    btnClassName: 'submit-btn__btn',
    text: 'Click me!',
    value: 'Clicked',
    wrapperClassName: 'submit-btn__wrapper',
};
