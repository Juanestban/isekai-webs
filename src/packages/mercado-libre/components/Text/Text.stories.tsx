import type { Meta, StoryFn } from '@storybook/react';

import { Wrapper } from '@/config/Wrapper';
import { getContext } from '@/config/decoratorContext';
import { ThemeProvider } from 'packages/meli/components/ThemeProvider';
import { Text, type TextProps } from './Text';

const meta = {
  title: 'Mercado-Libre/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    as: { control: { type: 'select' }, options: ['p', 'span', 'details', 'b', 'i', 'caption'] },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg'] },
    weight: { control: { type: 'select' }, options: ['thin', 'normal', 'semi-bold'] },
    color: { control: { type: 'select' }, options: ['base', 'black', 'white', 'green', 'blue'] },
  },
} satisfies Meta<TextProps>;

export default meta;

export const Main: StoryFn<TextProps> = ({ as, size, weight, color, children }) => {
  return (
    <Text as={as} size={size} weight={weight} color={color}>
      {children}
    </Text>
  );
};

Main.args = {
  as: 'p',
  size: 'md',
  weight: 'normal',
  children: "I'm a UI design System inspired on Meli (Mercado Libre) 🌌",
  color: 'black',
};

export const FontSize: StoryFn<TextProps> = ({ as, weight, color }) => {
  return (
    <Wrapper>
      <Text as={as} size="xs" weight={weight} color={color}>
        Font-xs
      </Text>
      <Text as={as} size="sm" weight={weight} color={color}>
        Font-sm
      </Text>
      <Text as={as} size="md" weight={weight} color={color}>
        Font-md
      </Text>
      <Text as={as} size="lg" weight={weight} color={color}>
        Font-lg
      </Text>
    </Wrapper>
  );
};

FontSize.args = {
  as: 'p',
  weight: 'normal',
  color: 'black',
};

export const FontWeight: StoryFn<TextProps> = ({ as, size, color }) => {
  return (
    <Wrapper>
      <Text as={as} size={size} weight="thin" color={color}>
        Font-weight: thin
      </Text>
      <Text as={as} size={size} weight="normal" color={color}>
        Font-weight: normal
      </Text>
      <Text as={as} size={size} weight="semi-bold" color={color}>
        Font-weight: semi-bold
      </Text>
    </Wrapper>
  );
};

FontWeight.args = {
  as: 'p',
  size: 'md',
  color: 'black',
};

export const FontColor: StoryFn<TextProps> = ({ as, size, weight }) => {
  return (
    <Wrapper>
      <Text as={as} size={size} weight={weight} color="base">
        font-color: base
      </Text>
      <Text as={as} size={size} weight={weight} color="black">
        font-color: black
      </Text>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <Text as={as} size={size} weight={weight} color="white">
          font-color: white
        </Text>
      </div>
      <Text as={as} size={size} weight={weight} color="green">
        font-color: green
      </Text>
      <Text as={as} size={size} weight={weight} color="blue">
        font-color: blue
      </Text>
    </Wrapper>
  );
};

FontColor.args = {
  as: 'p',
  size: 'md',
  weight: 'normal',
};
