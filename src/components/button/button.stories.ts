import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        type: 'button',
        children: 'Button',
        onClick: () => null,
    },
    argTypes: {
        type: { table: { disable: true } },
        children: { table: { disable: true } },
        onClick: { table: { disable: true } },
        style: { control: { type: 'select' } },
        size: { control: { type: 'select' } },
        disabled: { control: { type: 'boolean' } },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};

export const Outline: Story = {
    args: {
        style: 'outline',
    },
};

export const Text: Story = {
    args: {
        style: 'text',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};
