import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { Wrapper } from '@/config/Wrapper';
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
    variant: { control: 'select', options: ['solid', 'ghost'] },
    role: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'cuaternary'] },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    rounded: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

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

export const Role: StoryFn<ButtonProps> = ({ variant, size, fullWidth, rounded, isDisabled }) => {
  return (
    <Wrapper>
      <Button
        variant={variant}
        size={size}
        role="primary"
        fullWidth={fullWidth}
        rounded={rounded}
        isDisabled={isDisabled}
      >
        button role: primary
      </Button>
      <Button
        variant={variant}
        size={size}
        role="secondary"
        fullWidth={fullWidth}
        rounded={rounded}
        isDisabled={isDisabled}
      >
        button role: secondary
      </Button>
      <div style={{ padding: '0 5px', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <Button
          variant={variant}
          size={size}
          role="tertiary"
          fullWidth={fullWidth}
          rounded={rounded}
          isDisabled={isDisabled}
        >
          button role: tertiary
        </Button>
      </div>
      <Button
        variant={variant}
        size={size}
        role="cuaternary"
        fullWidth={fullWidth}
        rounded={rounded}
        isDisabled={isDisabled}
      >
        button role: cuaternary
      </Button>
    </Wrapper>
  );
};

Role.args = {
  variant: 'solid',
  role: 'primary',
  size: 'md',
  fullWidth: false,
  rounded: false,
  isDisabled: false,
  children: 'Button',
};

export const Variant: StoryFn<ButtonProps> = ({ role, size, fullWidth, rounded, isDisabled }) => {
  return (
    <Wrapper>
      <Button
        variant="solid"
        role={role}
        size={size}
        fullWidth={fullWidth}
        rounded={rounded}
        isDisabled={isDisabled}
      >
        button variant: solid
      </Button>
      <Button
        variant="ghost"
        role={role}
        size={size}
        fullWidth={fullWidth}
        rounded={rounded}
        isDisabled={isDisabled}
      >
        button variant: ghost
      </Button>
    </Wrapper>
  );
};

Variant.args = {
  role: 'primary',
  size: 'md',
  fullWidth: false,
  rounded: false,
  isDisabled: false,
};

export const Size: StoryFn<ButtonProps> = ({ variant, role, fullWidth, rounded, isDisabled }) => {
  return (
    <Wrapper>
      <Button
        variant={variant}
        role={role}
        size="xs"
        fullWidth={fullWidth}
        rounded={rounded}
        isDisabled={isDisabled}
      >
        button size: xs
      </Button>
      <Button
        variant={variant}
        role={role}
        size="sm"
        fullWidth={fullWidth}
        rounded={rounded}
        isDisabled={isDisabled}
      >
        button size: sm
      </Button>
      <Button
        variant={variant}
        role={role}
        size="md"
        fullWidth={fullWidth}
        rounded={rounded}
        isDisabled={isDisabled}
      >
        button size: md
      </Button>
      <Button
        variant={variant}
        role={role}
        size="lg"
        fullWidth={fullWidth}
        rounded={rounded}
        isDisabled={isDisabled}
      >
        button size: lg
      </Button>
    </Wrapper>
  );
};

Size.args = {
  variant: 'solid',
  role: 'primary',
  fullWidth: false,
  rounded: false,
  isDisabled: false,
};

export const Rounded: StoryFn<ButtonProps> = ({ variant, role, size, fullWidth, isDisabled }) => {
  return (
    <Wrapper>
      <Button
        variant={variant}
        role={role}
        size={size}
        fullWidth={fullWidth}
        isDisabled={isDisabled}
        rounded
      >
        button rounded
      </Button>
      <Button
        variant={variant}
        role={role}
        size={size}
        fullWidth={fullWidth}
        isDisabled={isDisabled}
      >
        button without rounded
      </Button>
    </Wrapper>
  );
};

export const FullWidth: StoryFn<ButtonProps> = ({ variant, role, size, rounded, isDisabled }) => {
  return (
    <Wrapper flexDirection="column" width="50vw">
      <Button
        variant={variant}
        role={role}
        size={size}
        rounded={rounded}
        isDisabled={isDisabled}
        fullWidth
      >
        button fullWidth
      </Button>
      <Button variant={variant} role={role} size={size} rounded={rounded} isDisabled={isDisabled}>
        button without fullWidth
      </Button>
    </Wrapper>
  );
};

FullWidth.args = {
  variant: 'solid',
  role: 'primary',
  fullWidth: false,
  rounded: false,
  isDisabled: false,
};

export const Disabled: StoryFn<ButtonProps> = ({ variant, role, size, fullWidth, rounded }) => {
  return (
    <Wrapper>
      <Button
        variant={variant}
        role={role}
        size={size}
        rounded={rounded}
        fullWidth={fullWidth}
        isDisabled
      >
        button disabled
      </Button>
      <Button variant={variant} role={role} size={size} rounded={rounded} fullWidth={fullWidth}>
        button enabled
      </Button>
    </Wrapper>
  );
};

Disabled.args = {
  variant: 'solid',
  role: 'primary',
  fullWidth: false,
  rounded: false,
  isDisabled: false,
};
