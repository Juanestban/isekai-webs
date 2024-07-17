import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'base',
      values: [
        { name: 'base', value: '#fff' },
        { name: 'meli', value: '#ebebeb' },
        { name: 'base-dark', value: '#06080e' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
