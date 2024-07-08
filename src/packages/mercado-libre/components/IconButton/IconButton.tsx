import { ComponentProps, FC, Ref } from 'react';
import clsx from 'clsx';

import { Icon, type IconProps } from '../Icon';
import s from './IconButton.module.css';

type PrimitiveButton = Omit<ComponentProps<'button'>, 'ref' | 'disabled' | 'children'>;

interface IconButtonProps extends PrimitiveButton {
  innerRef?: Ref<HTMLButtonElement>;
  icon: IconProps['name'];
  size?: number | string;
  rounded?: boolean;
  isDisabled?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  innerRef,
  icon,
  size = 32,
  color = 'var(--font-color-blue)',
  rounded,
  isDisabled,
  className,
  ...props
}) => {
  return (
    <button
      ref={innerRef}
      className={clsx(s.button, rounded && s.rounded, isDisabled && s.isDisabled, className)}
      disabled={isDisabled}
      {...props}
    >
      <Icon name={icon} className={s.icon} size={size} color={color} />
    </button>
  );
};

export { IconButton };
export type { IconButtonProps };
