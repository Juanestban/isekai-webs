import { PropsWithChildren, CSSProperties } from 'react';

type WrapperProps = PropsWithChildren & { flexDirection?: CSSProperties['flexDirection'] };

export const Wrapper = ({ flexDirection = 'row', children }: WrapperProps) => {
  return <div style={{ display: 'flex', flexDirection, gap: 10 }}>{children}</div>;
};
