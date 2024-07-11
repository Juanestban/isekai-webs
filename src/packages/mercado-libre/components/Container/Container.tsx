import { ComponentProps, FC, Ref } from 'react';
import clsx from 'clsx';

import s from './Container.module.css';

type PrimitiveDivProps = Omit<ComponentProps<'div'>, 'ref'>;

interface ContainerProps extends PrimitiveDivProps {
  innerRef?: Ref<HTMLDivElement>;
  max?: boolean;
}

const Container: FC<ContainerProps> = ({ innerRef, className, max, children, ...props }) => {
  return (
    <div ref={innerRef} className={clsx(s.container, max && s.max, className)} {...props}>
      {children}
    </div>
  );
};

export { Container };
export type { ContainerProps };
