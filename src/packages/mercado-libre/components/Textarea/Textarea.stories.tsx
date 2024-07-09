import { Meta, StoryFn } from '@storybook/react';

import { Wrapper } from '@/config/Wrapper';
import { getContext } from '@/config/decoratorContext';
import { ThemeProvider } from '../ThemeProvider';
import { Textarea, type TextareaProps } from './Textarea';

const meta = {
  title: 'MercadoLibre/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    rows: { control: 'number' },
    fullWidth: { control: 'boolean' },
  },
} satisfies Meta<TextareaProps>;

export default meta;

export const Main: StoryFn<TextareaProps> = ({ rows, fullWidth }) => {
  return (
    <Wrapper width="50vw">
      <Textarea rows={rows} fullWidth={fullWidth}>
        hi
      </Textarea>
    </Wrapper>
  );
};

Main.args = {
  rows: 1,
  fullWidth: false,
};
