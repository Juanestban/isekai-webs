/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, JSX, PropsWithChildren, ComponentProps, Ref } from 'react';
import clsx from 'clsx';

import { Color, HeadingSize, Weight } from 'packages/meli/models';

import s from './Heading.module.css';

type PrimitiveHeading = PropsWithChildren & Omit<ComponentProps<'h1'>, 'ref' | 'size' | 'color'>;
type Accessory = keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

interface HeadingProps extends PrimitiveHeading {
  innerRef?: Ref<ComponentProps<'h1'>>;
  as?: Accessory;
  size?: HeadingSize;
  weight?: Weight;
  color?: Color;
}

const Heading: FC<HeadingProps> = ({
  innerRef,
  as = 'h1',
  size = 'lg',
  weight = 'normal',
  color = 'black',
  children,
  ...props
}) => {
  const Wrapper = as;
  return (
    <Wrapper
      ref={innerRef}
      className={clsx(s.heading, s[`font-${size}`], `font-${weight}`, `font-${color}`)}
      {...(props as any)}
    >
      {children}
    </Wrapper>
  );
};

export { Heading };
export type { HeadingProps };
