import { Meta, StoryFn } from '@storybook/react';

import { Wrapper } from '@/config/Wrapper';
import { ThemeProvider } from '../ThemeProvider';
import { getContext } from '@/config/decoratorContext';
import { Card, type CardProps } from './Card';

const meta = {
  title: 'Mercado-Libre/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    price: {
      control: 'number',
    },
    priceBefore: {
      control: 'number',
    },
    discount: {
      control: 'number',
    },
    link: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    external: {
      control: 'boolean',
    },
    isFreeShipping: {
      control: 'boolean',
    },
  },
} satisfies Meta<CardProps>;

export default meta;

export const Main: StoryFn<CardProps> = ({
  title,
  content,
  price,
  priceBefore,
  discount,
  link,
  src,
  alt,
  external,
  isFreeShipping,
}) => {
  return (
    <Wrapper>
      <Card
        title={title}
        content={content}
        price={price}
        priceBefore={priceBefore}
        discount={discount}
        link={link}
        src={src}
        alt={alt}
        external={external}
        isFreeShipping={isFreeShipping}
      />
    </Wrapper>
  );
};

Main.args = {
  title: 'Xiaomi Redmi 13c Dual Sim 128 Gb Midnight Black 4 Gb Ram',
  content: 'en 36x $9163',
  price: 100,
  priceBefore: 120,
  discount: 0,
  link: '',
  src: 'https://http2.mlstatic.com/D_Q_NP_2X_780144-MLA72668121499_112023-T.webp',
  external: true,
  alt: 'source image from meli',
  isFreeShipping: true,
};
