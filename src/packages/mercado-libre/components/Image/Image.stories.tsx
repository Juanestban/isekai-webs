import { Meta, StoryFn } from '@storybook/react';

import { ThemeProvider } from '../ThemeProvider';
import { getContext } from '@/config/decoratorContext';
import { Image, type ImageProps } from './Image';

const meta = {
  title: 'MercadoLibre/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [getContext(ThemeProvider)],
  argTypes: {
    src: { control: 'text' },
    alt: { content: 'text' },
    decoding: { control: 'select', options: ['async', 'auto', 'sync'] },
    loading: { control: 'boolean' },
    fetchPriority: { control: 'select', options: ['auto', 'high', 'low'] },
    withoutPointerEvent: { control: 'boolean' },
    fit: { control: 'select', options: ['contain', 'fill', 'cover'] },
  },
} satisfies Meta<ImageProps>;

export default meta;

export const Main: StoryFn<ImageProps> = ({
  src,
  alt,
  decoding,
  fetchPriority,
  fallback,
  loading,
  fit,
  withoutPointerEvent,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      fit={fit}
      loading={loading}
      decoding={decoding}
      fallback={fallback}
      fetchPriority={fetchPriority}
      withoutPointerEvent={withoutPointerEvent}
    />
  );
};

Main.args = {
  src: 'https://img.freepik.com/premium-photo/cat-photo-with-color-background-generative-ai_631248-690.jpg',
  alt: 'cat image',
  loading: 'lazy',
  fallback: '',
  fit: 'contain',
  decoding: 'sync',
  fetchPriority: 'auto',
  withoutPointerEvent: false,
};
