import type { Meta, StoryFn } from '@storybook/react';

import { Wrapper } from '@/config/Wrapper';
import { getContext } from '@/config/decoratorContext';
import { ThemeProvider } from 'packages/meli/components/ThemeProvider';
import { Heading, type HeadingProps } from './Heading';
import { HeadingSize } from 'packages/meli/models';

const sizes: HeadingSize[] = ['lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];

const meta = {
  title: 'Mercado-Libre/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    as: { control: { type: 'select' }, options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h6'] },
    size: { control: { type: 'select' }, options: sizes },
    weight: { control: { type: 'select' }, options: ['thin', 'normal', 'semi-bold'] },
    color: { control: { type: 'select' }, options: ['base', 'black', 'white', 'green', 'blue'] },
  },
} satisfies Meta<HeadingProps>;

export default meta;

export const Main: StoryFn<HeadingProps> = ({ as, size, weight, color, children }) => {
  return (
    <Heading as={as} size={size} weight={weight} color={color}>
      {children}
    </Heading>
  );
};

Main.args = {
  as: 'h2',
  size: 'lg',
  weight: 'normal',
  color: 'black',
  children: 'Heading inspired on UI Design System from Mercado Libre 🌀',
};

export const FontSize: StoryFn<HeadingProps> = ({ as, weight, color }) => {
  return (
    <Wrapper flexDirection="column">
      {sizes.map((size) => (
        <Heading as={as} size={size} weight={weight} color={color}>
          Heading size: {size}
        </Heading>
      ))}
    </Wrapper>
  );
};

FontSize.args = {
  as: 'h2',
  weight: 'normal',
  color: 'black',
};

export const FontWeight: StoryFn<HeadingProps> = ({ as, size, color }) => {
  return (
    <Wrapper>
      <Heading as={as} size={size} weight="thin" color={color}>
        Heading thin
      </Heading>
      <Heading as={as} size={size} weight="normal" color={color}>
        Heading normal
      </Heading>
      <Heading as={as} size={size} weight="semi-bold" color={color}>
        Heading semi-bold
      </Heading>
    </Wrapper>
  );
};

FontWeight.args = {
  as: 'h2',
  size: 'lg',
  color: 'black',
};

export const FontColor: StoryFn<HeadingProps> = ({ as, size, weight }) => {
  return (
    <Wrapper>
      <Heading as={as} size={size} weight={weight} color="base">
        Heading font color: base
      </Heading>
      <Heading as={as} size={size} weight={weight} color="black">
        Heading font color: black
      </Heading>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <Heading as={as} size={size} weight={weight} color="white">
          Heading font color: white
        </Heading>
      </div>
      <Heading as={as} size={size} weight={weight} color="green">
        Heading font color: green
      </Heading>
      <Heading as={as} size={size} weight={weight} color="blue">
        Heading font color: blue
      </Heading>
    </Wrapper>
  );
};

FontColor.args = {
  as: 'h2',
  size: 'lg',
  weight: 'normal',
};
