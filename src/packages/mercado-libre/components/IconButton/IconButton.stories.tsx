import { Meta, StoryFn } from '@storybook/react';

import { iconNames } from '../Icon/IconNames';
import { ThemeProvider } from '../ThemeProvider';
import { getContext } from '@/config/decoratorContext';
import { IconButton, type IconButtonProps } from './IconButton';

const meta = {
  title: 'MercadoLibre/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: iconNames },
    size: { control: 'number' },
    color: { control: 'color' },
    rounded: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} satisfies Meta<IconButtonProps>;

export default meta;

export const Main: StoryFn<IconButtonProps> = ({ icon, size, color, rounded, isDisabled }) => {
  return (
    <IconButton icon={icon} size={size} color={color} rounded={rounded} isDisabled={isDisabled} />
  );
};

Main.args = {
  icon: 'GoAlert',
  size: 32,
  rounded: false,
  isDisabled: false,
};
