import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { getContext } from '@/config/decoratorContext';
import { ThemeProvider } from 'packages/meli/components/ThemeProvider';
import { Button } from './Button';

const meta = {
  title: 'MercadoLibre/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
