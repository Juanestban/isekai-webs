import { AriaRole, ComponentProps, Ref } from 'react';
import clsx from 'clsx';

import { TextSize } from 'packages/meli/models';
import { Text } from '../Text';

import s from './Button.module.css';

type PrimitiveButton = Omit<ComponentProps<'button'>, 'ref' | 'disabled' | 'role'>;

interface ButtonProps extends PrimitiveButton {
  innerRef?: Ref<HTMLButtonElement>;
  variant?: 'solid' | 'ghost';
  role?: 'primary' | 'secondary' | 'tertiary' | 'cuaternary';
  size?: TextSize;
  isDisabled?: boolean;
  ariaRole?: AriaRole;
  rounded?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  innerRef,
  variant = 'solid',
  role = 'primary',
  size = 'md',
  fullWidth,
  rounded,
  type = 'button',
  isDisabled,
  className,
  ariaRole,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      ref={innerRef}
      type={type}
      className={clsx(
        s.button,
        s[variant],
        s[role],
        s[`size-${size}`],
        fullWidth && s.fullWidth,
        rounded && s.rounded,
        isDisabled && s.disabled,
        className,
      )}
      role={ariaRole}
      disabled={isDisabled}
      {...props}
    >
      <Text as="span" className={s.text} size={size} weight="semi-bold">
        {children}
      </Text>
    </button>
  );
};

export { Button };
export type { ButtonProps };
