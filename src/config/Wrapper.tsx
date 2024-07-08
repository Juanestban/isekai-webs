import { PropsWithChildren, CSSProperties } from 'react';

type WrapperProps = PropsWithChildren & {
  width?: CSSProperties['width'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
};

export const Wrapper = ({ width, flexDirection = 'row', flexWrap, children }: WrapperProps) => {
  console.log(width);
  return <div style={{ display: 'flex', flexDirection, flexWrap, gap: 10, width }}>{children}</div>;
};
