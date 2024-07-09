import { ComponentProps, FC, Ref } from 'react';
import clsx from 'clsx';

import s from './Input.module.css';

type PrimitiveInput = Omit<ComponentProps<'input'>, 'ref'>;

interface InputProps extends PrimitiveInput {
  innerRef?: Ref<HTMLInputElement>;
  isDisabled?: boolean;
}

const Input: FC<InputProps> = ({ innerRef, autoComplete = 'off', className, ...props }) => {
  return (
    <div className={s.container}>
      <input
        ref={innerRef}
        className={clsx(s.input, className)}
        autoComplete={autoComplete}
        {...props}
      />
    </div>
  );
};

export { Input };
export type { InputProps };
