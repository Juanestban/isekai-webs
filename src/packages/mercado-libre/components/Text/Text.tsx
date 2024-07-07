/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX, Ref, FC, PropsWithChildren, ComponentProps } from 'react';
import clsx from 'clsx';

import { Color, TextSize, Weight } from 'packages/meli/models';

import s from './Text.module.css';

type PrimitiveText = PropsWithChildren & Omit<ComponentProps<'p'>, 'ref' | 'size' | 'color'>;
type Accessory = keyof Pick<
  JSX.IntrinsicElements,
  'p' | 'span' | 'details' | 'b' | 'i' | 'caption'
>;

interface TextProps extends PrimitiveText {
  innerRef?: Ref<ComponentProps<'p'>>;
  as?: Accessory;
  size?: TextSize;
  weight?: Weight;
  color?: Color;
}

const Text: FC<TextProps> = ({
  innerRef,
  as = 'p',
  size = 'md',
  weight = 'normal',
  color = 'black',
  className,
  children,
  ...props
}) => {
  const Wrapper = as;
  return (
    <Wrapper
      ref={innerRef}
      className={clsx(s.text, s[`font-${size}`], `font-${weight}`, `font-${color}`, className)}
      {...(props as any)}
    >
      {children}
    </Wrapper>
  );
};

export { Text };
export type { TextProps, Accessory };
