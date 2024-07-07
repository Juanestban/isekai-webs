import { FC, ComponentProps, Ref } from 'react';
import clsx from 'clsx';

import { Text } from '../Text';
import { TextSize } from 'packages/meli/models';

import s from './Link.module.css';

type PrimitiveAnchor = Omit<ComponentProps<'a'>, 'ref' | 'target' | 'rel'>;

interface LinkProps extends PrimitiveAnchor {
  innerRef?: Ref<HTMLAnchorElement>;
  to?: string;
  size?: TextSize;
  external?: boolean;
  variant?: 'primary' | 'secondary';
}

const Link: FC<LinkProps> = ({
  innerRef,
  to = '',
  size = 'md',
  external,
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  return (
    <a
      ref={innerRef}
      href={to}
      rel={external ? 'noopener' : undefined}
      target={external ? '_blank' : undefined}
      className={clsx(s.anchor, s[variant], className)}
      {...props}
    >
      <Text as="span" size={size} className={s.text}>
        {children}
      </Text>
    </a>
  );
};

export { Link };
export type { LinkProps };
