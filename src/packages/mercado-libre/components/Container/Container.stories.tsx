import { Meta, StoryFn } from '@storybook/react';

import { Container, type ContainerProps } from './Container';
import { Text } from '../Text';
import { Heading } from '../Heading';
import { getContext } from '@/config/decoratorContext';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Mercado-Libre/Container',
  component: Container,
  parameters: {},
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    max: { control: 'boolean' },
  },
} satisfies Meta<ContainerProps>;

export default meta;

export const Main: StoryFn<ContainerProps> = ({ max }) => {
  return (
    <Container style={{ border: '1px solid #09f' }} max={max}>
      <Heading as="h2" size="2xl" weight="semi-bold">
        Container Component
      </Heading>
      <Text as="p" size="lg">
        wrapper
      </Text>
    </Container>
  );
};

Main.args = {
  max: false,
};
