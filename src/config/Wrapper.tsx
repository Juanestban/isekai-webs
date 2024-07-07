import { PropsWithChildren, CSSProperties } from 'react';

type WrapperProps = PropsWithChildren & {
  width?: CSSProperties['width'];
  flexDirection?: CSSProperties['flexDirection'];
};

export const Wrapper = ({ width, flexDirection = 'row', children }: WrapperProps) => {
  console.log(width);
  return <div style={{ display: 'flex', flexDirection, gap: 10, width }}>{children}</div>;
};
