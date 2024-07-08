import { Meta } from '@storybook/react';

import { Wrapper } from '@/config/Wrapper';
import { ThemeProvider } from '../ThemeProvider';
import { getContext } from '@/config/decoratorContext';
import { Text } from '../Text';
import { iconNames } from './IconNames';
import { Icon, type IconProps } from './Icon';

const meta = {
  title: 'MercadoLibre/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  decorators: [getContext(ThemeProvider)],
  argTypes: {},
} satisfies Meta<IconProps>;

export default meta;

export const Main = () => {
  return (
    <Wrapper width="70vw" flexWrap="wrap">
      {iconNames.map((name, index) => (
        <div
          key={index}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}
        >
          <Icon name={name} size={48} />
          <Text>{name}</Text>
        </div>
      ))}
    </Wrapper>
  );
};
