import { Meta, StoryFn } from '@storybook/react';

import { Wrapper } from '@/config/Wrapper';
import { ThemeProvider } from '../ThemeProvider';
import { getContext } from '@/config/decoratorContext';
import { Input, type InputProps } from './Input';

const meta = {
  title: 'Mercado-Libre/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    isDisabled: { control: 'boolean' },
  },
} satisfies Meta<InputProps>;

export default meta;

export const Main: StoryFn<InputProps> = () => {
  return (
    <Wrapper>
      <Input />
    </Wrapper>
  );
};

Main.args = {
  isDisabled: false,
};
