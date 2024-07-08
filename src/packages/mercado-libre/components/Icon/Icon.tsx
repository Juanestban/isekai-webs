import { FC } from 'react';
import * as Icons from 'react-icons/go';
import { IconBaseProps } from 'react-icons';

interface IconProps extends Omit<IconBaseProps, 'name'> {
  name: keyof typeof Icons;
}

const Icon: FC<IconProps> = ({ name, color = 'var(--font-color-base)', size, ...props }) => {
  const RawIcon = Icons[name];

  return <RawIcon color={color} size={size} {...props} />;
};

export { Icon };
export type { IconProps };
