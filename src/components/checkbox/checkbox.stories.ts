import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    args: {
        onChange: () => null,
        name: 'checkbox',
        value: 'val',
        checked: false,
    },
    argTypes: {
        name: { table: { disable: true } },
        value: { table: { disable: true } },
        onChange: { table: { disable: true } },
        disabled: { control: { type: 'boolean' } },
        checked: { control: { type: 'boolean' } },
        label: { control: { type: 'string' } },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        checked: false,
        label: 'Checkbox Label',
    },
};
