import { ComponentProps, CSSProperties, FC, Ref } from 'react';
import clsx from 'clsx';

import s from './Content.module.css';

type PrimitiveContentProps = Omit<ComponentProps<'section'>, 'ref'>;
type Gap = CSSProperties['gap'];
type Alignment = CSSProperties['flexDirection'];
type Margin = CSSProperties['margin'];
type Padding = CSSProperties['padding'];

interface ContentProps extends PrimitiveContentProps {
  innerRef?: Ref<HTMLElement>;
  gap?: Gap;
  alignment?: Alignment;
  margin?: Margin;
  padding?: Padding;
}

const Content: FC<ContentProps> = ({
  innerRef,
  alignment = 'row',
  gap = 10,
  margin,
  padding,
  className,
  children,
  style,
  ...props
}) => {
  const styleMap: CSSProperties = { ...style, gap, flexDirection: alignment, margin, padding };

  return (
    <section ref={innerRef} className={clsx(s.content, className)} style={styleMap} {...props}>
      {children}
    </section>
  );
};

export { Content };
export type { ContentProps };
