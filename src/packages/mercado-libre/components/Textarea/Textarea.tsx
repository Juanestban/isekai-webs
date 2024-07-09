import { ComponentProps, FC, Ref } from 'react';
import clsx from 'clsx';

import s from './Textarea.module.css';

type PrimitiveTextarea = Omit<ComponentProps<'textarea'>, 'ref'>;

interface TextareaProps extends PrimitiveTextarea {
  innerRef?: Ref<HTMLTextAreaElement>;
  fullWidth?: boolean;
}

const Textarea: FC<TextareaProps> = ({
  innerRef,
  fullWidth,
  autoComplete = 'off',
  maxLength = 2000,
  rows = 1,
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx(s.container, fullWidth && s.fullWidth)}>
      <textarea
        ref={innerRef}
        className={clsx(s.textarea, className)}
        autoComplete={autoComplete}
        maxLength={maxLength}
        rows={rows}
        {...props}
      >
        {children}
      </textarea>
    </div>
  );
};

export { Textarea };
export type { TextareaProps };
