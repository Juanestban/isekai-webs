import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { Wrapper } from '@/config/Wrapper';
import { getContext } from '@/config/decoratorContext';
import { ThemeProvider } from 'packages/meli/components/ThemeProvider';
import { Link, type LinkProps } from './Link';

const meta = {
  title: 'MercadoLibre/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    external: { control: 'boolean' },
    variant: { control: 'select', options: ['primary', 'secondary'] },
  },
  args: { onClick: fn() },
} satisfies Meta<LinkProps>;

export default meta;

export const Main: StoryFn<LinkProps> = ({ to, size, variant, external, children }) => {
  return (
    <Link to={to} variant={variant} size={size} external={external}>
      {children}
    </Link>
  );
};

Main.args = {
  to: '/',
  size: 'md',
  external: false,
  variant: 'primary',
  children: 'Link based on Mercado Libre',
};

export const Size: StoryFn<LinkProps> = ({ to, variant, external }) => {
  return (
    <Wrapper flexDirection="column">
      <Link to={to} variant={variant} size="xs" external={external}>
        link size: xs
      </Link>
      <Link to={to} variant={variant} size="sm" external={external}>
        link size: sm
      </Link>
      <Link to={to} variant={variant} size="md" external={external}>
        link size: md
      </Link>
      <Link to={to} variant={variant} size="lg" external={external}>
        link size: lg
      </Link>
    </Wrapper>
  );
};

Size.args = {
  to: '/',
  variant: 'primary',
  external: false,
};

export const Variant: StoryFn<LinkProps> = ({ to, size, external }) => {
  return (
    <Wrapper>
      <Link to={to} variant="primary" size={size} external={external}>
        link variant: primary
      </Link>
      <Link to={to} variant="secondary" size={size} external={external}>
        link variant: secondary
      </Link>
    </Wrapper>
  );
};

Variant.args = {
  to: '/',
  size: 'md',
  external: false,
};
