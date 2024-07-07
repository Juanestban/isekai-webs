export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

export type TextSize = Exclude<Size, 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'>;

export type HeadingSize = Exclude<Size, 'xs' | 'sm' | 'md'>;

export type Weight = 'thin' | 'normal' | 'semi-bold';

export type Color = 'black' | 'white' | 'green' | 'blue';
