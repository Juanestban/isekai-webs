import { ComponentProps, FC, Ref } from 'react';
import clsx from 'clsx';

import s from './Image.module.css';

type PrimitiveImageProps = Omit<ComponentProps<'img'>, 'ref'>;

interface ImageProps extends PrimitiveImageProps {
  innerRef?: Ref<HTMLImageElement>;
  fit?: 'contain' | 'cover' | 'fill';
  fallback?: string;
  withoutPointerEvent?: boolean;
}

const Image: FC<ImageProps> = ({
  innerRef,
  decoding = 'sync',
  loading = 'lazy',
  fit = 'contain',
  fetchPriority = 'auto',
  withoutPointerEvent,
  className,
  ...props
}) => {
  return (
    <img
      ref={innerRef}
      decoding={decoding}
      draggable={!withoutPointerEvent}
      fetchPriority={fetchPriority}
      className={clsx(
        s.image,
        s[`object-${fit}`],
        withoutPointerEvent && s.withoutPointerEvent,
        className,
      )}
      loading={loading}
      {...props}
    />
  );
};

export { Image };
export type { ImageProps };
