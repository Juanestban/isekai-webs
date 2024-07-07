import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { getContext } from '@/config/decoratorContext';
import { ThemeProvider } from 'packages/meli/components/ThemeProvider';
import { Button, ButtonProps } from './Button';

const meta = {
  title: 'MercadoLibre/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid'] },
    role: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'cuaternary'] },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    rounded: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

const style = {
  display: 'flex',
  placeContent: 'center',
  width: '50vw',
  padding: 10,
};

export const Main: StoryFn<ButtonProps> = ({
  variant,
  role,
  size,
  fullWidth,
  rounded,
  isDisabled,
  onClick,
  children,
}) => {
  return (
    <div
      style={{ ...style, backgroundColor: role === 'tertiary' ? 'rgba(0, 0, 0)' : 'transparent' }}
    >
      <Button
        variant={variant}
        role={role}
        size={size}
        fullWidth={fullWidth}
        rounded={rounded}
        isDisabled={isDisabled}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

Main.args = {
  variant: 'solid',
  role: 'primary',
  size: 'md',
  fullWidth: false,
  rounded: false,
  isDisabled: false,
  children: 'Button',
};
