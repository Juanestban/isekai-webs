import { Meta, StoryFn } from '@storybook/react';

import { Content, type ContentProps } from './Content';
import { getContext } from '@/config/decoratorContext';
import { ThemeProvider } from '../ThemeProvider';
import { Card } from '../Card';

const meta = {
  title: 'Mercado-Libre/Content',
  component: Content,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  tags: ['autodocs'],
  argTypes: {
    alignment: { control: 'select', options: ['column', 'row'] },
    gap: { control: 'number' },
  },
} satisfies Meta<ContentProps>;

export default meta;

export const Main: StoryFn<ContentProps> = ({ alignment, gap }) => {
  return (
    <Content alignment={alignment} gap={gap}>
      <Card
        title="Xiaomi Redmi 13c Dual Sim 128 Gb Midnight Black 4 Gb Ram"
        content="en 36x $9163"
        price={100}
        priceBefore={120}
        discount={0}
        link="link"
        src="https://http2.mlstatic.com/D_Q_NP_2X_780144-MLA72668121499_112023-T.webp"
        alt="source image from meli"
        external
        isFreeShipping
      />
      <Card
        title="Xiaomi Redmi 13c Dual Sim 128 Gb Midnight Black 4 Gb Ram"
        content="en 36x $9163"
        price={100}
        priceBefore={120}
        discount={0}
        link="link"
        src="https://http2.mlstatic.com/D_Q_NP_2X_780144-MLA72668121499_112023-T.webp"
        alt="source image from meli"
        external
        isFreeShipping
      />
      <Card
        title="Xiaomi Redmi 13c Dual Sim 128 Gb Midnight Black 4 Gb Ram"
        content="en 36x $9163"
        price={100}
        priceBefore={120}
        discount={0}
        link="link"
        src="https://http2.mlstatic.com/D_Q_NP_2X_780144-MLA72668121499_112023-T.webp"
        alt="source image from meli"
        external
        isFreeShipping
      />
    </Content>
  );
};

Main.args = {
  alignment: 'row',
  gap: 10,
};
