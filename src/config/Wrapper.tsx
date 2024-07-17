import { PropsWithChildren, CSSProperties } from 'react';

type WrapperProps = PropsWithChildren &
  Pick<CSSProperties, 'width' | 'flexDirection' | 'flexWrap'> & { style?: CSSProperties };

export const Wrapper = ({
  width,
  flexDirection = 'row',
  flexWrap,
  style,
  children,
}: WrapperProps) => {
  return (
    <div style={{ ...style, display: 'flex', flexDirection, flexWrap, gap: 10, width }}>
      {children}
    </div>
  );
};
