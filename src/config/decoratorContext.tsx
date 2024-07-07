import type { Decorator } from '@storybook/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getContext = (Context: any): Decorator => {
  return (Story) => (
    <Context>
      <Story />
    </Context>
  );
};
