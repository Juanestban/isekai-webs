import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

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
