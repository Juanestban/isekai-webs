import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { Wrapper } from '@/config/Wrapper';
import { ThemeProvider } from '../ThemeProvider';
import { getContext } from '@/config/decoratorContext';
import { Search, type SearchProps } from './Search';

const meta = {
  title: 'Mercado-Libre/Search',
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    fullWidth: { control: 'boolean' },
  },
  args: { onSubmit: fn() },
} satisfies Meta<SearchProps>;

export default meta;

export const Main: StoryFn<SearchProps> = ({ fullWidth, onSubmit }) => {
  return (
    <Wrapper width="50vw">
      <Search fullWidth={fullWidth} onSubmit={onSubmit} />
    </Wrapper>
  );
};

Main.args = {
  fullWidth: true,
};
